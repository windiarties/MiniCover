import React from 'react'
import API from '../helpers/API_Login'
import config from '../config/api.config.json'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            formdata:{
                emailabuid: '', 
                abpwd: ''
            },
            isRequest: false
        }
        this.onSignIn = this.onSignIn.bind(this)
        this.textChanged = this.textChanged.bind(this)
    }
    textChanged(e){
        let tmp = this.state.formdata
        tmp[e.target.name]= e.target.value
        this.setState({
            formdata: tmp
        })
    }

    async onSignIn(){
        this.setState({
            isRequest: true
        })
       

        let result = await API.login(this.state.formdata.emailabuid,this.state.formdata.abpwd)
        // alert(JSON.stringify(result.message.userdata))
        // alert(result.message.token)
   

        if (result.code === 200){
            localStorage.setItem(config.LS.ADDRBOOK,JSON.stringify(result.message.userdata))
            localStorage.setItem(config.LS.TOKEN,result.message.token)
            // alert(JSON.stringify(localStorage.getItem(config.LS.ADDRBOOK)))
            // alert(JSON.stringify(localStorage.getItem(config.LS.TOKEN)))
            this.props.history.push('/access')
        }
        else {
            alert(result.message)
        }
        this.setState({
            isRequest: false
        })
    }

    render(){ 
        return(
            
	<div class="page-content container" style={{marginTop:'6%'}}>
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="login-wrapper">
                <div class="box">
                    <div class="content-wrap">
                            <b><h1 style={{color:'#1B1464', fontWeight: 'bold'}}>XSIS 2.0</h1></b>
                        
                            <input class="form-control" type="text" placeholder="E-mail address" name="emailabuid" value={this.state.emailabuid} onChange={this.textChanged}/>
                            <input class="form-control" type="password" placeholder="Password" name="abpwd" value={this.state.abpwd} onChange={this.textChanged}/>
                            <a class="btn btn-primary btn-block signup"  style={{backgroundColor: '#1B1464'}} disabled={this.isRequest} type="button" onClick={this.onSignIn}>Masuk</a>
                            <b><h5><a href="/forgotpassword" style={{color: '#1B1464', fontWeight: 'bold'}}>Lupa Password</a></h5></b>
                            <br />
                            <div class="row">
                                <p style={{color: '#1B1464', fontWeight: 'bold'}}>2020 - Xsis Mitra Utama</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
        )
    }
}


export default Login