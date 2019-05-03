import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
} from 'react-router-dom';

import github from "../../images/github.svg"
import stackoverflow from "../../images/overflow.svg"
import twitter from "../../images/twitter.svg"
import BlankLink from '../blankLink';


class Home extends Component {
    componentWillReceiveProps() {
        document.title = "Rai Talha Rehman khan";
    }

    componentDidMount() {
        document.title = "Rai Talha Rehman khan";
    }

    render() {
        const homeTop = <div className="home-top-container">
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
                    <li className="profiles">
                        <BlankLink url="https://github.com/raitalharehman" title="github" src={github} />
                        <BlankLink url="https://twitter.com/raitalharehman" title="twitter" src={twitter} />
                        <BlankLink url="https://stackoverflow.com/users/6727487" title="stack overflow" src={stackoverflow} />
                    </li>
                </ul>
            </div>
        </div>

        const homeBottom = <div className="home-bottom">
            <div className="home-bottom-text">
                <p>I'm Talha. A software developer intent on developing the <Link to="/projects">sweetest projects</Link> I can.
        Currently working at <BlankLink url="https://www.alchemative.com/" title="Alchemative" text="Alchemative " />
                    as a Web App Developer & Working with <BlankLink url="https://team.sobotics.org/" title="SOBotics" text="SOBotics " />
                    to help moderators on StackOverFlow.
            </p>
                <br />
                <p>When I'm not programming you can find me in the gym, hanging out with friends or watching the videos on Youtube.
        If you are interested in getting in touch with me, feel free to <Link to="/contact">contact me </Link>
                </p>
                <div className="home-bottom-buttons">
                    <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-raitalharehman.appspot.com/o/Talha%20Rehman.pdf?alt=media&token=fb23792e-115f-480a-bde2-fae2ecf71fd4" target="_blank" rel="noreferrer noopener">
                        <div className="button CV">
                            <span class="icon is-small"><i class="fa fa-arrow-circle-down"></i></span>
                            Download C.V
                    </div>
                    </a>
                </div>
            </div>
        </div>
        return (
            <div className="home-page">
                <NavBar page="home" />
                {homeTop}
                {homeBottom}
            </div>
        );
    }
}

export default Home;