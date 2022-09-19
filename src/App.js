import Header from './components/Header'
import Quiz from './components/Quiz'
import SuccessModal from './components/SuccessModal'
import FailModal from './components/FailModal'

const App = () => {
	return (
		<div className="App">
			<Header/>
			<Quiz/>
			<SuccessModal status={true}/>
			<FailModal/>
		</div>
	);
}

export default App;
