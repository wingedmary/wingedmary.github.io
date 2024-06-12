import './ContactForm.css';

export default function ContactForm({expanded}) {
	return(
		<form className='contact-form'>
			<div className='form-field'>
				<label className='form-field--title'>Имя*</label>
				<div className='form-field-container'>
					<input className='form-field--input' type='text'/>
				</div>
			</div>
			<div className='form-field'>
				<label className='form-field--title'>Фамилия*</label>
				<div className='form-field-container'>
					<input className='form-field--input' type='text'/>
				</div>
			</div>
			<div className={expanded ? 'form-field' : 'form-field--wide'}>
				<label className='form-field--title'>Эл. почта*</label>
				<div className='form-field-container'>
					<input className='form-field--input' type='email'/>
				</div>
			</div>
			{expanded &&
				<>
					<div className='form-field'>
						<label className='form-field--title'>Телефон</label>
						<div className='form-field-container'>
							<input className='form-field--input' type='tel'/>
						</div>
					</div>
				
				
					<div className='form-field--wide'>
						<label className='form-field--title'>Вакансия*</label>
						<div className='form-field-container'>
							<select className='form-field--dropdown'>
								<option>Вакансия 1</option>
								<option>Вакансия 2</option>
								<option>Вакансия 3</option>
								<option>Вакансия 4</option>
							</select>
						</div>
					</div>
				
					<div className='form-field'>
						<label className='form-field--title'>Ссылка на резюме*</label>
						<div className='form-field-container'>
							<input className='form-field--input' type='url'/>
						</div>
					</div>
					<div className='form-field'>
						<label className='form-field--title'>Ссылка на ВК</label>
						<div className='form-field-container'>
							<input className='form-field--input'/>
						</div>
					</div>
				</>
			}
			<div className='form-field--wide'>
				<label className='form-field--title'>Оставьте сообщение...</label>
				<div className='form-field-container form-field-container--message'>
					<textarea className='form-field--message'/>
				</div>
			</div>
			<div className='form-field--wide'>
				<div className='form-field-container'>
					<button className='form-submit' type='submit'>Отправить</button>
				</div>
			</div>

		</form>
	);
}