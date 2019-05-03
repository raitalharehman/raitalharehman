import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function LiItem(props) {
    const { classes, to, icon, text } = props;
    return (
        <li className={classes}>
            <Link to={to}>
                <span className="icon is-small"><i className={"fa fa-" + icon}></i></span>
                <span className="nav-text">{text}</span>
            </Link>
        </li>
    );
}
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { homeLink: '', eduLink: '', projectLink: '', contactLink: '' };
        this.updateActive = function (aPage) {
            if (aPage === "home") {
                this.setState({ homeLink: 'is-active', eduLink: '', projectLink: '', contactLink: '' });
            }
            else if (aPage === "education") {
                this.setState({ homeLink: '', eduLink: 'is-active', projectLink: '', contactLink: '' });
            }
            else if (aPage === "projects") {
                this.setState({ homeLink: '', eduLink: '', projectLink: 'is-active', contactLink: '' });
            }
            else if (aPage === "contact") {
                this.setState({ homeLink: '', eduLink: '', projectLink: '', contactLink: 'is-active' });
            }
            else {
                this.setState({ homeLink: '', eduLink: '', projectLink: '', contactLink: '' });
            }
        }
    }

    componentWillReceiveProps() {
        this.updateActive(this.props.page);
    }

    componentDidMount() {
        this.updateActive(this.props.page);
    }

    render() {
        return (
            <div className="nav">
                <ul>
                    <LiItem classes={this.state.homeLink} to="/raitalharehman/" icon="home" text="Home" />
                    <LiItem classes={this.state.projectLink} to="/projects" icon="laptop" text="Projects" />
                    <LiItem classes={this.state.eduLink} to="/education" icon="graduation-cap" text="Education" />
                    <LiItem classes={"nav-last " + this.state.contactLink} to="/contact" icon="phone" text="Contact" />
                </ul>
            </div>
        );
    }
}

export default NavBar;