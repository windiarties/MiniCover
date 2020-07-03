import React from 'react'
import apiconfig from '../config/api.config.json'
import axios from 'axios';



class Navbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			ab: '',
			hd: '',
			tl: '',
			mo: '',
			addr: {
				id: '',
				created_by: '',
				created_on: '',
				modified_by: '',
				modified_on: '',
				deleted_by: '',
				deleted_on: '',
				is_deleted: "",
				is_locked: "",
				attempt: 1,
				email: '',
				abuid: '',
				abpwd: '',
				fp_token: '',
				fp_expired_date: '',
				fp_counter: 0
			},
			MT: {
				tittle: '',
				menu_image_url: '',
				menu_icon: '',
				menu_order: '',
				menu_level: '',
				menu_parent: '',
				menu_url: '',
				menu_header: '',
				created_by: '',
				created_on: '',
				modified_by: '',
				modified_on: '',
				deleted_by: '',
				deleted_on: '',
				is_delete: ''
			}
		}
		this.getListAddr = this.getListAddr.bind(this)
		this.getListMT = this.getListMT.bind(this)
	}
	getListAddr() {
		let option = {
			url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.Addrbook,
			method: "GET",
		}
		axios(option)
			.then((response) => {
				this.setState({
					addr: response.data.message
				})
				localStorage.setItem(apiconfig.LS.USERDATA, JSON.stringify(this.state.addr[0]))
				this.setState({
					ab: JSON.parse(localStorage.getItem(apiconfig.LS.USERDATA)).abuid
				})

			})
			.catch((error) => {
				alert(error)
			})
	}
	getListMT() {

		// alert("cek url...."+JSON.stringify(apiconfig.BASE_URL + apiconfig.ENDPOINTS.Addrbook))
		let option = {
			url: apiconfig.BASE_URL + apiconfig.ENDPOINTS.Menutree,
			method: "GET",
		}
		axios(option)
			.then((response) => {
				this.setState({
					MT: response.data.message
				})
				localStorage.setItem(apiconfig.LS.MENUTREE, JSON.stringify(this.state.MT[0]))
				this.setState({
					hd: JSON.parse(localStorage.getItem(apiconfig.LS.MENUTREE)).menu_header,
					tl: JSON.parse(localStorage.getItem(apiconfig.LS.MENUTREE)).tittle,
					mo: JSON.parse(localStorage.getItem(apiconfig.LS.MENUTREE)).menu_order
				})
				// alert("test hd"+JSON.parse(localStorage.getItem(apiconfig.LS.MENUTREE)).menu_header)

			})
			.catch((error) => {
				alert(error)
			})
	}
	componentDidMount() {
		this.getListAddr()
		this.getListMT()
	}
	onSignOut() {
		localStorage.clear();
		// this.props.history.push('/')
	}
	render() {

		const menuItems = []
		
		for (let i = 1; i <= this.state.mo; i++) {
			menuItems.push(<ul class="nav navbar-nav">
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" style={{ color: '#e74c3c', fontSize: '30px' }}>{this.state.hd + ' ' + i} <b class="caret"></b></a>
					<ul class="dropdown-menu animated fadeInUp">
						<li><a href="/pelamar">Pelamar</a></li>
						<li><a href="#">Sub Menu</a></li>
					</ul>
				</li>

			</ul>
			);
		}

		return (
			<div>
				<div class="header" style={{ backgroundColor: '#e74c3c' }}>
					<div class="container">
						<div class="row">
							<div class="col-md-8">
								<div class="navbar navbar-inverse" role="banner">
									<nav class="collapse navbar-collapse bs-navbar-collapse navbar-left" role="navigation">
										{menuItems}

									</nav>
								</div>
							</div>

							<div class="col-md-4">
								<div class="navbar navbar-inverse" role="banner">
									<nav class="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
										<ul class="nav navbar-nav">
										
											<li class="dropdown">
												<a href="#" class="dropdown-toggle" data-toggle="dropdown">Musica Studio's<b class="caret"></b></a>
												<ul class="dropdown-menu animated fadeInUp">
													<li><a href="profile.html">Ubah Kata Sandi</a></li>
													<li><a href="#Login" onClick={this.onSignOut}>Keluar</a></li>
												</ul>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>

				</div>
			
			</div>
		)
	}

}

export default Navbar

