import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
} from 'react-router-dom';

import github from "../../images/github.svg"
import stackoverflow from "../../images/overflow.svg"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin.svg"
import BlankLink from '../blankLink';

function LiItem(props) {
    const { icon, text } = props;
    return (
        <li>
            <div className="icon is-small"><i className={"fa fa-" + icon}></i></div>
            <span>{text}</span>
        </li>
    );
}
function HomeTop() {
    return <div className="home-top-container">
        <div className="home-top-left">
            <img src="https://i.imgur.com/VnNqp5t.png" alt="Rai Talha Rahman" />
        </div>
        <div className="home-top-right">
            <h2>Talha Rahman</h2>
            <ul>
                <LiItem icon="user" text="Senior Software Engineer" />
                <LiItem icon="location-arrow" text="Lahore, Pakistan" />
                <LiItem icon="graduation-cap" text="BScs" />
                <li className="profiles">
                    <BlankLink url="https://github.com/raitalharehman" title="github" src={github} />
                    <BlankLink url="https://twitter.com/raitalharehman" title="twitter" src={twitter} />
                    <BlankLink url="https://stackoverflow.com/users/6727487" title="stack overflow" src={stackoverflow} />
                    <BlankLink url="https://www.linkedin.com/in/raitalharehman" title="Linked in" src={linkedin} />
                </li>
            </ul>
        </div>
    </div>
}

function HomeBottom() {
    return <div className="home-bottom">
        <div className="home-bottom-text">
            <p>Hi. I'm Talha. A software developer intent on developing the <Link to="/projects">sweetest projects</Link> I can.
Currently working at <BlankLink url="https://ginkgoretail.com/" title="Ginkgo" text="Ginkgo " />
                as a Senior Software Engineer & Working with <BlankLink url="https://team.sobotics.org/" title="SOBotics" text="SOBotics " />
                to help moderators on StackOverFlow.
    </p>
            <br />
            <p>When I'm not programming you can find me in the gym, hanging out with friends or watching the videos on Youtube.
If you are interested in getting in touch with me, feel free to <Link to="/contact">contact me </Link>
            </p>
            <div className="home-bottom-buttons">
                <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-raitalharehman.appspot.com/o/Talha%20Rehman.pdf?alt=media&token=fb23792e-115f-480a-bde2-fae2ecf71fd4" target="_blank" rel="noreferrer noopener">
                    <div className="button CV">
                        <span className="icon is-small"><i className="fa fa-arrow-circle-down"></i></span>
                        Download C.V
            </div>
                </a>
            </div>
        </div>
    </div>
}
class Home extends Component {
    componentWillReceiveProps() {
        document.title = "Rai Talha Rahman khan";
    }

    componentDidMount() {
        document.title = "Rai Talha Rahman khan";
    }

    render() {
        return (
            <div className="home-page">
                <NavBar page="home" />
                <HomeTop />
                <HomeBottom />
            </div>
        );
    }
}

export default Home;