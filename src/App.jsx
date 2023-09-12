import './App.css';
import 'primeflex/primeflex.css';
import EncryptText from './components/EncryptText';
import DecryptText from './components/DecryptText';

function App() {
	return (
		<div className="app">
			<div className="grid">
				<div className="col-12 md:col-6">
					{' '}
					<EncryptText />
				</div>
				<div className="col-12 md:col-6">
					{' '}
					<DecryptText />
				</div>
			</div>
		</div>
	);
}

export default App;
