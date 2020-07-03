import React from 'react'
import apiconfig from '../config/api.config.json'
import axios from 'axios'


class Sidebar extends React.Component {

	render() {

		return (


			<div class="sidebar content-box" style={{ background: '#c8d6e5' }}>
				{/* {sideItems} */}
				<ul class="nav" >
					<li class="nav">
						<a href="/chartcover">
							<i class="glyphicon glyphicon-list"></i>Chart Cover
						</a>
					</li>
					<li class="nav">
						<a href="/statistic">
							<i class="glyphicon glyphicon-list"></i>Statistic Cover
						</a>
					</li>
				</ul>
				<div class="row">
					<div class="col-md-12">
					</div>
				</div>
			</div>
		)
	}

}


export default Sidebar
