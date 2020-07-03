import React from 'react'
import { Link } from 'react-router-dom'
import Statistic from './Detail/Statistic'

class StatisticChart extends React.Component {

	render() {

		return (
			<div>
				<div class="col-md-12">
					<div class="content-box-large" style={{ background: 'rgba(52, 73, 94, 0.2)' }}>
						<div class="panel-heading">
						</div>
						<div class="panel-body">
							<div class="col-md-12" >
								<table class="col-md-12" >
									<Statistic />
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

export default StatisticChart