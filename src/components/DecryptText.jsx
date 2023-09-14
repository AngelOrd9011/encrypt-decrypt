import { useState } from 'react';
import { AES, enc } from 'crypto-js';

const DecryptText = ({ algorithms, optionsTemplate }) => {
	const [secretKey, setSecretKey] = useState(null);
	const [text, setText] = useState(null);
	const [decryptText, setDecryptText] = useState('');
	const [error, setError] = useState(null);
	const [show, setShow] = useState('password');
	const [showBtn, setShowBtn] = useState('Mostrar');
	const [selected, setSelected] = useState(AES);

	const showKey = () => {
		let _show = show === 'password' ? 'text' : 'password';
		let _showBtn = showBtn === 'Mostrar' ? 'Ocultar' : 'Mostrar';
		setShowBtn(_showBtn);
		setShow(_show);
	};

	const decrypt = () => {
		if (!text || !secretKey) setError('Ambos campos son obligatorios');
		else {
			setError(null);
			let _decryptText = selected.decrypt(text, secretKey).toString(enc.Utf8);
			setDecryptText(_decryptText);
		}
	};

	const onSelectChange = (opt) => {
		let _selected = algorithms.find((alg) => alg.name === opt);
		setSelected(_selected.algorithm);
	};

	return (
		<>
			<h1>Des-encriptar texto</h1>
			<section className="form">
				<div className="input-text">
					<label htmlFor="select-alg">Selecciona un algoritmo</label>
					<br />
					<select name="select-alg" onChange={(event) => onSelectChange(event.target.value)}>
						{optionsTemplate()}
					</select>
				</div>
				<div className="input-text">
					<label htmlFor="secret-key">Palabra clave</label>
					<br />
					<input name="secret-key" type={show} onChange={(event) => setSecretKey(event.target.value)} />
					<button onClick={showKey}>{showBtn}</button>
				</div>
				<div className="input-textarea">
					<label htmlFor="text">Texto a des-encriptar</label>
					<br />
					<textarea name="text" onChange={(event) => setText(event.target.value)} />
				</div>
				<div className="btn">
					<button onClick={decrypt}>Des-encriptar</button> {error}
				</div>
				<label htmlFor="results">Resultado</label>
				<br />
				<textarea name="results" className="results" value={decryptText} disabled />
			</section>
		</>
	);
};
export default DecryptText;
