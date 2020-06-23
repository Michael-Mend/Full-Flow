import React, { Component } from 'react';
import '../App.css';

class CraftCard extends Component {

    openCard = e => {
        console.log(this.props.craft.name)
    }

    render () {
        return (
            <div>
                <div onClick={this.openCard} className='card'>
                    <div className='r2' >
                        <h2>{this.props.craft.name}</h2>
                    </div>
                    <img src={this.props.craft.image} alt={this.props.craft.name} className='r1'/>
                </div>
            </div>
        )
    }
}

export default CraftCard;   