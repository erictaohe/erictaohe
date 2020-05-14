import React, { Component } from 'react';
import './experience.css';
import cisco from './cisco.jpg';
import profile from './profile.jpg';
import asteroid from './asteroid.gif';
import bash from './bash.png';
import tec from './tec.png';

import {Button, ButtonToolbar} from 'react-bootstrap';
import {Project} from './project.js';

class Experience extends Component{
    constructor(props){
        super(props);
        this.state = {projectShowB1 : false , 
            projectShowB2 : false,
            projectShowB3 : false};
    }
    render() {
        let projectClose1 =() => this.setState({projectShowB1 : false});
        let projectClose2 =() => this.setState({projectShowB2 : false});
        let projectClose3 =() => this.setState({projectShowB3 : false});
        
        return (
            <div>
                <div className = "page_margin">
                
                    {/* <div className  = "header1">experiences</div> */}

                    <div className  = "strike">
                        <span className = "text_style">
                            what I've done so far
                        </span>
                    </div>
                    
                    <div className = "section">
                        <div className = "experience cisco"></div>
                        <div className = "text">
                            <div className  = "top">
                                <div className = "header"> Cisco </div>
                                <div className = "position"> Software Engineering Intern </div>
                                <div className = "location"> San Jose, California </div>
                            </div>
                            <div className = "body">
                                <p>
                                Incoming software engineer on the network prototyping team - very excited. 
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className = "section">
                        <div className = "experience commvault"></div>
                        <div className = "text">
                            <div className  = "top">
                                <div className = "header"> Commvault </div>
                                <div className = "position"> Software Engineering Intern // HYPERMAX </div>
                                <div className = "location"> Tinton Falls, New Jersey </div>
                            </div>
                            <div className = "body">
                                <p>
                                This summer was my rite of passage into the world of SWE. As an internal engineer, I developed a 
                                crash crawler using Shell and Golang to diagnose Commvault program crashes on client machines. In 
                                addition to this project, I proposed and designed a web application to facilitate how employees reserve 
                                servers, which I’m very happy to say has also been deployed. Outside of my technical work, I also sat 
                                as a chair on the company’s intern committee, where I helped organize networking events, intern trips, 
                                and distributed free food to the best of my ability. 
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className = "section">
                        <div className = "experience yale"></div>
                        <div className = "text">
                            <div className  = "top">
                                <div className = "header"> Yale University </div>
                                <div className = "position"> Class of 2022 </div>
                                <div className = "location"> New Haven, Connecticut</div>
                            </div>
                            <div className = "body">
                                <p>
                                    I am so proud and lucky to call Yale my home. Since my first day here, I've felt comfortable stepping out 
                                    of what’s familiar, whether it be debating contentious issues in bioethics or 
                                    singing to a crowd of strangers. I sit in breathtaking classes, discuss what excites 
                                    me with others as a TA, and deploy my own projects and software in industry. I’ve met 
                                    people I’d cut off a limb for, travelled for the first time (and 5 times since), and I’ve 
                                    jumped out of a plane. 
                                </p>
                                <p>
                                    Yale constantly shows me what I love, exposes me to new way of thinking, and surrounds me with people from 
                                    whom I have the world to learn. boola boola. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className = "section">
                        <div className = "experience princeton"></div>
                        <div className = "text">
                            <div className  = "top">
                                <div className = "header"> Princeton University</div>
                                <div className = "position"> Research Intern // Software Development</div>
                                <div className = "location"> Tinton Falls, New Jersey </div>
                            </div>
                            <div className = "body">
                                <p>
                                I was a member of Dr. Paul Prucnal’s Lightwave Communications Laboratory under Thomas Lima. Here, in addition 
                                to being assigned an idol’s workstation, I helped develop a virtual lab space to remotely equipment for optical 
                                experiments that are traditionally controlled physically; this involved creating a package in Python to represent 
                                instrument drivers as well as connections made between the instruments within experiments. I also used pyvis to
                                create a dynamic visualization of the virtual laboratory—showing which instruments and connections are currently 
                                being used—to prevent equipment conflicts. By the end of the internship, we had developed a fully operating virtual 
                                laboratory, allowing research members to conduct their experiments remotely. 
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className = "section">
                        <div className = "experience thorlabs"></div>
                        <div className = "text">
                            <div className  = "top">
                                <div className = "header"> Thorlabs </div>
                                <div className = "position"> Engineering Intern // Vytran Division </div>
                                <div className = "location"> Marlboro, New Jersey </div>
                            </div>
                            <div className = "body">
                                <p>
                                I was a member of Vytran’s R+D department, where I worked on developing a cleaner and more efficient 
                                optical fiber splicer (a device used to create fiber optic connections). I used Autodesk Inventor to 
                                design components (i.e telescope unit, refractors) of the splicer and Python to create an algorithm that 
                                would help counter laser drift and maintain clean splices. My time in this lab was invaluable — it was 
                                incredibly rewarding to experience the project’s entire life cycle, from conception to its ultimate deployment 
                                in industry. I was also lucky enough to present this project at the Intel Science and Engineering 
                                Fair in LA, where I got the opportunity to meet countless young scientists and lay on a beach in April.


                                </p>
                            </div>
                        </div>
                    </div>

                    <div className = "section">
                        <div className = "experience hths"></div>
                        <div className = "text">
                            <div className  = "top">
                                <div className = "header"> High Technology High School </div>
                                <div className = "position"> Class of 2018 </div>
                                <div className = "location"> Lincroft, New Jersey </div>
                            </div>
                            <div className = "body">
                                <p>
                                High Tech was a marathon. High school was relentless and difficult, 
                                and at many times left me in doubt of whether my ambitions were worth 
                                the effort; it was also, however, four of the most formative years of 
                                my life. In addition to providing an unparalleled breadth of opportunity, 
                                High Tech challenged me to think independently and to persist through times 
                                when trying seemed endless, and for that I am incredibly grateful. It was here 
                                also that I could be stupid—crabbing at 2a.m. or what went down at PEEC 
                                (iykyk)— alongside some of my closest friends.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className  = "strike">
                        <span className = "text_style">
                            what I've worked on
                        </span>
                    </div>
                <div className = "margins">
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="container1" onClick={()=> this.setState({projectShowB1: true})} >
                            <div className = "experience1 asteroid"> </div>
                            <div className="overlay">
                                <div className="text1"></div>
                            </div>
                        </div>
                        <Project
                            show = {this.state.projectShowB1} 
                            onHide = {projectClose1}
                            imageC = {asteroid}
                            textStuff = {"hi"}
                        />
                    </div>
                    <div className="grid-item">
                        <div className="container1" onClick={()=> this.setState({projectShowB2: true})} >
                                <div className = "experience1 tec"> </div>
                                <div className="overlay">
                                    <div className="text1"></div>
                                </div>
                            </div>
                            <Project
                            show = {this.state.projectShowB2} 
                            onHide = {projectClose2}
                            imageC = {tec}
                            textStuff = {"hi"}
                            />
                    </div>
                    <div className ="grid-item">
                    <div className="container1" onClick={()=> this.setState({projectShowB3: true})} >
                            <div className = "experience1 bash"> </div>
                            <div className="overlay">
                                <div className="text1"></div>
                            </div>
                            </div>
                            <Project
                            show = {this.state.projectShowB3} 
                            onHide = {projectClose3}
                            imageC = {bash}
                            textStuff = {"hi"}
                            />
                    </div>
                    </div>
                </div>
            
            
            
            </div> 
            )
        }
    }
    
    export default Experience;