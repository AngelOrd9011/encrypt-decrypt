import './App.css';
import 'primeflex/primeflex.css';
import EncryptText from './components/EncryptText';
import DecryptText from './components/DecryptText';
import { AES, DES, TripleDES, Rabbit, RC4 } from 'crypto-js';

function App() {
	const algorithms = [
		{ name: 'AES', algorithm: AES },
		{ name: 'DES', algorithm: DES },
		{ name: 'Triple DES', algorithm: TripleDES },
		{ name: 'Rabbit', algorithm: Rabbit },
		{ name: 'RC4', algorithm: RC4 },
	];
	const optionsTemplate = () => {
		return (
			<>
				{algorithms.map((option, index) => {
					return (
						<option key={`en-alg-${index}`} value={option.name}>
							{option.name}
						</option>
					);
				})}
			</>
		);
	};
	return (
		<div className="app">
			<div className="grid">
				<div className="col-12 md:col-6">
					{' '}
					<EncryptText algorithms={algorithms} optionsTemplate={optionsTemplate} />
				</div>
				<div className="col-12 md:col-6">
					{' '}
					<DecryptText algorithms={algorithms} optionsTemplate={optionsTemplate} />
				</div>
			</div>
		</div>
	);
}

export default App;
