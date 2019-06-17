import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export class Home extends Component {
    state = {
        redirect:false
    }

    componentWillMount() {
        if (sessionStorage.getItem('user_token')) {
            console.log('Welcome! You Are Avenger Now')
        } else {
            this.setState({
                redirect:true
            })
        }
    }
    

    render() {
        if(this.state.redirect) {
            return(<Redirect to='/login' />)
        }

        return (
            <div className='v-center'>
                
            </div>
        )
    }
}

export default Home
