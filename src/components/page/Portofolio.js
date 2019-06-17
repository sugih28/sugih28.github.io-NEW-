import React, { Component } from 'react'
import ListPortofolio from './ListPortofolio';
import axios from 'axios';

export class Portofolio extends Component {
    state = {
        portos : []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.setState({
                    portos: res.data.slice(0,5)
                })
            })
    }

    render() {
        if (this.state.portos) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="head-line col-md-4">PORTOFOLIO</h1>
                        </div>
                    </div>
                    <br />
                    {
                        this.state.portos.map(porto => {
                            return (
                                <ListPortofolio key={porto.id} porto={porto}/>
                            )
                        })
                    }
                </div>
            )
        }
    }
}

export default Portofolio
