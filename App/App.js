import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './../Components/Navbar/Navbar';
import HomePage from './../Layouts/HomePage/HomePage';
import GamesPage from './../Layouts/GamesPage/GamesPage';
import TeamPage from '../Layouts/TeamPage/TeamPage';
import ContactsPage from '../Layouts/ContactsPage/ContactsPage';
import BlogPage from '../Layouts/BlogPage/BlogPage';
import SingleNewsPage from '../Layouts/SingleNewsPage/SingleNewsPage';
import Footer from './../Components/Footer/Footer';

import "./App.css";

function App(){

    return(
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                    <Route path='/games' element={<GamesPage/>}></Route>
                    <Route path='/team' element={<TeamPage/>}></Route>
                    <Route path='/blog' element={<BlogPage/>}></Route>
                    <Route path='/single' element={<SingleNewsPage />}></Route>
                    <Route path='/contacts' element={<ContactsPage/>}></Route>
                </Routes> 
                <Footer/>
            </Router>
        </div>
    );
}

export default App;