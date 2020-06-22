import React, { Component } from 'react';
import '../App.css';
import ttt from '../images/ttt.jpg';
import sss from '../images/sss.jpg';
import strshp from '../images/strshp.png';

class CraftCard extends Component {
    openCard = e => {
        
    }

    render () {
        return (
            <div>
                <div onClick={this.openCard} className='card'>
                    <div className='r2' >
                        <h2>Soyuz</h2>
                    </div>
                    <img src={ttt} alt='' className='r1'/>
                </div>
                <div onClick={this.openCard} className='card'>
                    <div className='r2' >
                        <h2>Saturn V</h2>
                    </div>
                    <img src={sss} alt='' className='r1'/>
                </div>
                <div onClick={this.openCard} className='card'>
                    <div className='r2' >
                        <h2>Starship</h2>
                    </div>
                    <img src={strshp} alt='' className='r1'/>
                </div>
            </div>
        )
    }
}

export default CraftCard;   