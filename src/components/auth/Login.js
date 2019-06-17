import React, { Component } from 'react'
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';

export class Login extends Component {
    state = {
        email : '',
        password : '',
        redirect : false
    }

    componentWillMount() {
        if(sessionStorage.getItem('user_token')) {
            this.setState({
                redirect:true
            })
        }
    }
    

    changeHandle = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    submitHandle = (e) => {
        e.preventDefault();
        if (this.state.username !== '' && this.state.password !== '') {
            PostData('login',this.state).then((res) => {
                if(res.token) {
                    sessionStorage.setItem('user_token', res.token)
                    this.setState({
                        redirect:true
                    })
                } else {
                    console.log('Login Error')
                }
            })   
        } else {
            alert('Please Fill the Text Field')
        }
    }

    render() {
        if (this.state.redirect) {
            return(<Redirect to='/' />) 
        }
        
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel">
                            <div className="panel-body">
                                <h3 className='head-line'>LOGIN</h3>
                                <br/>
                                <form onSubmit={this.submitHandle}>
                                    <label htmlFor="email">Email :</label>
                                    <div className="form-group">
                                        <input type="text" id="email" className="form-control" placeholder="Username" onChange={this.changeHandle} />
                                    </div>

                                    <label htmlFor="password">Password :</label>
                                    <div className="form-group">
                                        <input type="password" id="password" placeholder="Password" className="form-control" onChange={this.changeHandle} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <button className='btn btn-primary col-md-12'>LOGIN</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )    
    }
}

export default Login
