import React, { Component } from 'react';
import portrait from './portrait.jpg';

class LandingPage extends Component{
    render() {
        return (
            <div className = "contentLP">
                {/* <div className = "text-stuff"> 
                    <div className = "center-text"> 
                        <p className = "landingcaption">I'm on the right</p>
                    </div>
                </div> */}
                <div className = "imageLand">

                    <img className = "imageLand"  src = {portrait}/>
                </div>
            </div>
        )
    }
}

export default LandingPage;
