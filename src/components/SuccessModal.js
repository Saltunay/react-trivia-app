const SuccessModal = (props) => {
	const {status} = props
	if (status) {
		return (
			<div className="modal-backdrop">
				<div className="modal-content">
					<div className={'modal-title'}>Correct!</div>
					<div className={'modal-body'}>
						<p>Congrats! Your answer is correct. You get more 10 point.</p>
					</div>
					<div className={'modal-footer'}>
						<div className={'button-group align-right'}>
							<button type={'button'} className={'btn bg-dark'}>Next</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SuccessModal