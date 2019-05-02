import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';

class Projects extends Component {
    componentWillReceiveProps() {
        document.title = "Projects - Rai Talha Rehman Khan";
    }

    componentDidMount() {
        document.title = "Projects - Rai Talha Rehman Khan";
    }

    render() {
        return (
            <div className="projects-page">
                <NavBar page="projects" />
                <div className="projects-container">
                    <h2>Projects</h2>
                    <div className="project">
                        <img src="https://i.imgur.com/vQsy7iGh.png" alt="Pakixah" />
                        <div className="project-text">
                            <h3>Pakixah <a href="https://pakixah.com/" target="_blank" rel="noreferrer noopener"><i className="fas fa-link"></i></a></h3>
                            <p>Its a Portal base on News, Blog, Forum, Social wall, Heros, Videos, Petitions & Polls</p>
                        </div>
                        <div className="project-tags">
                            <div className="tag tag-css">MaterializeCSS</div>
                            <div className="tag tag-js">JS</div>
                            <div className="tag tag-mysql">MySQL</div>
                            <div className="tag tag-html">Laravel</div>
                        </div>
                    </div>
                    <h2>Contributions</h2>
                    <div className="project">
                        <img src="https://i.imgur.com/fnJ2p84h.png" alt="Saleor Store front" />
                        <div className="project-text">
                            <h3>Saleor Store front <a href="https://pwa.getsaleor.com/" target="_blank" rel="noreferrer noopener"><i className="fas fa-link"></i></a> <a href="https://github.com/mirumee/saleor-storefront" target="_blank" rel="noreferrer noopener"><span className="fab fa-github"></span></a></h3>
                            <p>A GraphQL-powered, React, PWA, single-page application storefront for Saleor.</p>

                        </div>
                        <div className="project-tags">
                            <div className="tag tag-pwa">PWA</div>
                            <div className="tag tag-react">React</div>
                            <div className="tag tag-js">Typescript</div>
                            <div className="tag tag-nodejs">Node JS</div>
                            <div className="tag tag-mysql">GraphQL</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;