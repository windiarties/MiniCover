import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Detail/Form'
import config from '../../config/api.config.json'

class ChartCover extends React.Component {
	render() {

		return (
			<div>
				<div class="col-md-12">
					<div class="content-box-large" style={{ background: '#c8d6e5' }}>
						<div class="panel-heading">
						</div>
						<div class="panel-body">
							<div class="col-md-12" >
								<table class="col-md-12" >
									<Form/>
								</table>
							</div>
							{/* <div class="pull-right">
								<ul class="pager wizard">
									<li class="previous first disabled" style={{ display: 'none' }}><a href="javascript:void(0);">First</a></li>
									<li class="previous disabled"><a href="javascript:void(0);">Previous</a></li>
									<li class="next last" style={{ display: 'none' }}><a href="javascript:void(0);">Last</a></li>
									<li class="next"><a href="javascript:void(0);">Next</a></li>
								</ul>
							</div> */}
						</div>
					</div>
				</div>
			</div >
		)
	}
}

export default ChartCover