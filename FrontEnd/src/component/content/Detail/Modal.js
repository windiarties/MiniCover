import React from 'react'

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comp: '',
			id: '',
			mode: '',
			size: 'sm'
		}
	}
	componentWillReceiveProps(nextProps) {
		if (this.state !== nextProps) {
			this.setState({
				comp: nextProps.comp,
				id: nextProps.id,
				mode: nextProps.mode,
				size: nextProps.size,
			});
		}
	}
	render() {
		return (
			<div className={"modal fade bs-modal-" + this.state.size} id={this.state.id}>
				<div className="modal-dialog bs-modal-sm">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<h4 className="modal-title">{this.state.comp} <small>{this.state.mode}</small></h4>
						</div>
						<div className="modal-body">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Modal;