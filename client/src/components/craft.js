import React, { Component } from 'react';
import '../App.css';
import CraftCard from './craftCard';
import axios from 'axios';

class Craft extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            image: '',
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/craft')
            .then(res => {
                const data = res.data
                this.setState({
                    data: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render () {
        const { data } = this.state
        return (
            <div>
                {data.map( craft => {
                    return <CraftCard craft={craft} />
                })}
            </div>
        )
    }
}

export default Craft;   