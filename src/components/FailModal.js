const FailModal = () => {
	return (
		<div className="modal-backdrop">
			<div className="modal-content">
				<div className={'modal-title'}>Incorrect!</div>
				<div className={'modal-body'}>
					<p>Bad news :) Your answer is incorrect. Your score 20.</p>
				</div>
				<div className={'modal-footer'}>
					<div className={'button-group align-right'}>
						<button type={'button'} className={'btn bg-dark'}>Try Again</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FailModal