import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';

function ProjectModel(props) {
    const { img, title, url, text, tags, github } = props;
    return <div className="project">
        <img src={img} alt={title} />
        <div className="project-text">
            <h3>{title}
                <a href={url} target="_blank" rel="noreferrer noopener"><i className="fas fa-link"></i></a>
                {github ?
                    <a href={github} target="_blank" rel="noreferrer noopener"><span className="fab fa-github"></span></a>
                    : null
                }
            </h3>
            <p>{text}</p>
        </div>
        {tags}
    </div>
}

function Project() {
    return <div>
        <h2>Projects</h2>
        <ProjectModel img="https://i.imgur.com/vQsy7iGh.png" title="Pakixah" url="https://pakixah.com/"
            text="Its a Portal base on News, Blog, Forum, Social wall, Heros, Videos, Petitions & Polls"
            tags={<div className="project-tags">
                <div className="tag tag-css">MaterializeCSS</div>
                <div className="tag tag-js">JS</div>
                <div className="tag tag-mysql">MySQL</div>
                <div className="tag tag-html">Laravel</div>
            </div>}
        />
    </div>
}

function Contribution() {
    return <div>
        <h2>Contributions</h2>
        <ProjectModel img="https://i.imgur.com/fnJ2p84h.png" title="Saleor Store front" url="https://pwa.getsaleor.com/"
            text="A GraphQL-powered, React, PWA, single-page application storefront for Saleor."
            github="https://github.com/mirumee/saleor-storefront"
            tags={<div className="project-tags">
                <div className="tag tag-pwa">PWA</div>
                <div className="tag tag-react">React</div>
                <div className="tag tag-js">Typescript</div>
                <div className="tag tag-nodejs">Node JS</div>
                <div className="tag tag-mysql">GraphQL</div>
            </div>}
        />
    </div>
}

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
                    <Project />
                    <Contribution />
                </div>
            </div>
        );
    }
}

export default Projects;