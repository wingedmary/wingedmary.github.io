
document.addEventListener("DOMContentLoaded", ()=>{
    // const titleButton = document.querySelector('.header-block .title-section .title');
    const showcase = document.querySelector('.showcase');
    const showcaseItems = document.querySelectorAll('.showcase .item');
    const sidebar = document.querySelector('.sidebar');
    const sidebarButtons = document.querySelectorAll('.sidebar .button');
    const projectSlider = document.querySelector('.project-slider');
    const sliderList = document.querySelector('.project-slider .project-list');
    const closeBtn = document.querySelector('.sidebar .close');
    
    let projectIndex;

    // const showAbout = () => {
    //     titleButton.onclick = null;
    //     document.querySelector('.header-block .title-section').classList.toggle('active');
    //     setTimeout(()=>{
    //         titleButton.onclick = showAbout;
    //     }, 400);
        
    // }

    //Постепенное появление проектов после загрузки DOM
    showcaseItems.forEach((item, index) => {
        item.addEventListener('click', ()=>{
            item.style.transition = '.1s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.transform = 'scale(0.9)';
            
            setTimeout(()=>{
                item.style.transform = 'scale(1)';
            }, 100)
        })

        setTimeout(()=>{
            item.style.transform = 'translateY(0)';
            item.style.opacity = 1;
        }, 500 * index);

    });


    function setShowcaseItems(e) {
        if (e.currentTarget.id === 'game_wiki') {
            sliderList.style.transform = 'translateY(0)';
            sidebar.querySelectorAll('.button')[0].classList.add('active');
        }
        if (e.currentTarget.id === 'developer_studio') {
            sliderList.style.transform = 'translateY(-100%)';
            sidebar.querySelectorAll('.button')[1].classList.add('active');
        }
        if (e.currentTarget.id === 'online_store') {
            sliderList.style.transform = 'translateY(-200%)';
            sidebar.querySelectorAll('.button')[2].classList.add('active');
        }

        showcase.classList.add('down');
        sidebar.classList.add('show');
        projectSlider.classList.add('up');

        setTimeout(()=> {
            sliderList.style.transition = '.4s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 500);
    }

    
    
    for (let i = 0; i < sidebarButtons.length; i++) {
        sidebarButtons[i].addEventListener('click', ()=>{
            sidebar.querySelector('.active').classList.remove('active');
            projectIndex = i;
            if (projectIndex === 0) sliderList.style.transform = 'translateY(0)';
            if (projectIndex === 1) sliderList.style.transform = 'translateY(-100%)';
            if (projectIndex === 2) sliderList.style.transform = 'translateY(-200%)';
            sidebar.querySelectorAll('.button')[projectIndex].classList.add('active');
        });
    }
    
    closeBtn.onclick = () => {
        showcase.classList.remove('down');
        sidebar.classList.remove('show');
        projectSlider.classList.remove('up');
        sliderList.style.transition = 'none';
        sidebar.querySelector('.active').classList.remove('active');
        
    }

    //POP-UP
    const popup = document.querySelector('.pop-up');
    const popupContent = document.querySelectorAll('.pop-up .inner-content');
    const popupClose = document.querySelectorAll('.inner-content .close');
    const showPopup = (e) => {
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
        if (e.currentTarget.id === 'game_wiki') popupContent[0].style.display = 'block';
        if (e.currentTarget.id === 'developer_studio') popupContent[1].style.display = 'block';
        if (e.currentTarget.id === 'online_store') popupContent[2].style.display = 'block';
    }

    popupClose.forEach(button=> {
        button.onclick = (e) => {
            popup.classList.remove('show');
            document.body.style.overflow = 'auto';
            if (e.currentTarget.parentElement.classList.contains('game-wiki')) {
                setTimeout(()=>{
                    popupContent[0].style.display = 'none';
                }, 400)
            }
            if (e.currentTarget.parentElement.classList.contains('developer-studio')) {
                setTimeout(()=>{
                    popupContent[1].style.display = 'none';
                }, 400)
            } 
            if (e.currentTarget.parentElement.classList.contains('online-store')) {
                setTimeout(()=>{
                    popupContent[2].style.display = 'none';
                }, 400)
            } 
            
           
        }
    });


    //Мобильная версия
    const breakpoint = window.matchMedia('(max-width: 941px)');
    const breakpointChecker = () => {
        if (breakpoint.matches) {
            //titleButton.onclick = null;
            showcase.classList.remove('down');
            for (let i = 0; i < showcaseItems.length; i++) {
                showcaseItems[i].removeEventListener('click', setShowcaseItems);
                showcaseItems[i].addEventListener('click', showPopup);
            }
        } else {
            //titleButton.onclick = showAbout;
            popup.classList.remove('show');
            if (projectSlider.classList.contains('up')) showcase.classList.add('down');
            popup.querySelectorAll('.inner-content').forEach(item=>item.style.display = 'none');
            for (let i = 0; i < showcaseItems.length; i++) {
                showcaseItems[i].addEventListener('click', setShowcaseItems);
                showcaseItems[i].removeEventListener('click', showPopup);
            }
       }
    };
    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();



});    


