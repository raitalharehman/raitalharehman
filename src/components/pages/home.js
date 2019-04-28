import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
} from 'react-router-dom';

import github from "../../images/github.svg"
import stackoverflow from "../../images/overflow.svg"
import twitter from "../../images/twitter.svg"


class Home extends Component {
    componentWillReceiveProps() {
        document.title = "Rai Talha Rehman khan";
    }

    componentDidMount() {
        document.title = "Rai Talha Rehman khan";
    }

    render() {
        return (
            <div className="home-page">
                <NavBar page="home" />
                <div className="home-top-container">
                    <div className="home-top-left">
                        <picture className="home-top-left-image">
                            <source srcSet="img/webp/profile.webp" type="image/webp" />
                            <source srcSet="img/png/profile.png" type="image/jpeg" />
                            <img src="img/png/profile.png" alt="Talha Rehman" />
                        </picture>
                    </div>
                    <div className="home-top-right">
                        <h2>Talha Rehman</h2>
                        <ul>
                            <li>
                                <div className="icon is-small"><i className="fa fa-user"></i></div>
                                <span>Software Engineer</span>
                            </li>
                            <li>
                                <div className="icon is-small"><i className="fa fa-location-arrow"></i></div>
                                <span>Lahore, Pakistan</span></li>
                            <li>
                                <div className="icon is-small"><i className="fa fa-graduation-cap"></i></div>
                                <span>BScs</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="home-bottom">
                    <div className="home-bottom-text">
                        <p>I'm Talha. A software developer intent on developing the <Link to="/projects">sweetest projects</Link> I can.
                    Currently working at <a href="https://www.alchemative.com/" target="_blank" rel="noreferrer noopener">Alchemative </a>
                            as a Web App Developer & Working with <a href="https://team.sobotics.org/" target="_blank" rel="noreferrer noopener">SOBotics </a>
                            to help moderators on StackOverFlow
                        </p>
                        <br />
                        <p>When I'm not programming you can find me in the gym, hanging out with friends or watching the videos on Youtube.
                    If you are interested in getting in touch with me, feel free to <Link to="/contact">contact me</Link>.</p>
                        <div className="home-bottom-buttons">
                            <a href="https://github.com/raitalharehman" target="_blank" rel="noreferrer noopener">
                                <img src={github} alt="github" />
                            </a>
                            <a href="https://twitter.com/raitalharehman" target="_blank" rel="noreferrer noopener">
                                <img src={twitter} alt="twitter" />
                            </a>
                            <a href="https://stackoverflow.com/users/6727487" target="_blank" rel="noreferrer noopener">
                                <img src={stackoverflow} alt="stackoverflow" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;