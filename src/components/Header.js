const Header = () => {
	return (
		<div className="header d-flex space-evenly">
			<div className="app-brand col-6">React Trivia App</div>
			<div className="point-area col-6">
				<p className="text-right">0 question of 10 questions</p>
				<p className="text-right">Your Score: 0</p>
			</div>
		</div>
	)
}

export default Header