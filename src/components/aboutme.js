import React, { Component } from 'react';
import profile from './profile.jpg';
import './about.css';
class About extends Component{
    render() {
        return (
            < div>
                <div className= "margins">
                    <div className = "left">
                        <h1 className = "header">hey, I'm Eric!</h1>
                        <div className = "body">
                        <p>
                        I’m 19, and while my home is New Jersey (born and raised), I currently live in New Haven. 
                        I’m a junior at Yale studying math and computer science with a keen interest in creating fresh and impactful software;
                        aside from tech, other things I’ve had on my mind recently include better understanding how the world operates
                        through market trends and exploring how different education systems work. Between working on projects and boolin’ with 
                        the Baker’s Dozen at school, I also love to sing, play poker, make tomato sauce, and contemplate Avatar the Last Airbender (iykyk). 
                        </p>
                        <p>
                        Amidst all the academic craze and young lunacy, one of my fondest memories from high school was writing my blog. It was a relaxing escape
                        I could return to week by week and looking back now, a great way to capture and document my life back then. While I have little intention
                        of revealing that blog, I hope that working on this site will help me rekindle that hobby of mine. Hope you enjoy. 
                        </p>
                        </div>
                    </div>
                    <div className = "right">
                        <img className = "eric" src= {profile}/>
                    </div>
                </div>
               
                

            </div> 
        )
    }
}

export default About;