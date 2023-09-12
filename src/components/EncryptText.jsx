import { useState } from 'react';
import { AES } from 'crypto-js';

const EncryptText = () => {
	const [secretKey, setSecretKey] = useState(null);
	const [text, setText] = useState(null);
	const [encryptText, setEncryptText] = useState('');
	const [error, setError] = useState(null);
	const [show, setShow] = useState('password');
	const [showBtn, setShowBtn] = useState('Mostrar');

	const showKey = () => {
		let _show = show === 'password' ? 'text' : 'password';
		let _showBtn = showBtn === 'Mostrar' ? 'Ocultar' : 'Mostrar';
		setShowBtn(_showBtn);
		setShow(_show);
	};

	const encrypt = () => {
		if (!text || !secretKey) setError('Ambos campos son obligatorios');
		else {
			setError(null);
			let _encryptText = AES.encrypt(text, secretKey).toString();
			setEncryptText(_encryptText);
		}
	};
	return (
		<>
			<h1>Encriptar texto</h1>
			<section className="form">
				<div className="input-text">
					<label htmlFor="secret-key">Palabra clave</label>
					<br />
					<input id="secret-key" name="secret-key" type={show} onChange={(event) => setSecretKey(event.target.value)} />
					<button onClick={showKey}>{showBtn}</button>
				</div>
				<div className="input-textarea">
					<label htmlFor="text">Texto a encriptar</label>
					<br />
					<textarea name="text" onChange={(event) => setText(event.target.value)} />
				</div>
				<div className="btn">
					<button onClick={encrypt}>Encriptar</button> {error}
				</div>
				<label htmlFor="results">Resultado</label>
				<br />
				<textarea name="results" className="results" value={encryptText} disabled />
			</section>
		</>
	);
};

export default EncryptText;
