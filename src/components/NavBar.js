import React, { Component } from 'react';
import './navBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faInstagram, faGithub, faFacebook  } from "@fortawesome/free-brands-svg-icons"

class NavBar extends Component{

    render() {
        return (
            < div className = "nav">
                <div className = "links">
                    <div className = "name">
                        <a href = "/" class="text-decoration-none text-reset" >eric he</a>
                    </div>
                    <div className = "pages">
                        <a href = "/aboutme" class="text-decoration-none text-reset" >about</a>
                    </div>
                    {/* <div className = "pages">
                        <a href = "/resume">resume</a>
                    </div> */}
                    <div className = "pages">
                        <a href = "/experience" class="text-decoration-none text-reset" >experiences</a>
                    </div>
                    <div className = "pages">
                        <a href = "/contact" class="text-decoration-none text-reset" >contact</a>
                    </div>
                </div>
                    <div className = "right">
                        <div className = "icons">
                                <a className = "icon text-decoration-none text-reset" href = "https://www.linkedin.com/in/erictaohe/" rel="noopener noreferrer"target = "_blank"  > 
                                    <FontAwesomeIcon className = "icon" icon= {faLinkedin} />
                                </a>
                                <a className = "icon text-decoration-none text-reset" href = "https://www.instagram.com/_eriche/" rel="noopener noreferrer" target = "_blank"> 
                                    <FontAwesomeIcon className = "icon" icon= {faInstagram} />
                                </a>
                                <a className = "icon text-decoration-none text-reset" href = "https://www.facebook.com/profile.php?id=100006081406789" rel="noopener noreferrer" target = "_blank"> 
                                    <FontAwesomeIcon  className = "icon" icon= {faFacebook} />
                                </a>
                                <a className = "icon text-decoration-none text-reset" href = "https://github.com/erictaohe" rel="noopener noreferrer" target = "_blank"> 
                                    <FontAwesomeIcon  className = "icon" icon= {faGithub} />
                                </a>
                        </div>
                    </div>

            </div> 
        )
    }
}

export default NavBar;
