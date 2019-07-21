import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import npmImg from '../../images/npm.jpg';

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
        <ProjectModel img="https://i.imgur.com/oCKyLU0h.jpg" title="Victory League" url="https://www.victoryleague.com.pk/"
            text="Victory League is for sports enthusiasts across Pakistan. It is Pakistan’s first fantasy sports game app. Use your skill and knowledge of the sports to win big! Your passion for sports will now be amplified as you decide your own team. Take charge by creating your own team and win prizes too! Compete with family and friends to see who can win the most."
            tags={<div className="project-tags">
                <div className="tag tag-pwa">PWA</div>
                <div className="tag tag-react">React</div>
                <div className="tag tag-js">Typescript</div>
            </div>}
        />
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
        <ProjectModel img="https://i.imgur.com/lWdq5E2h.png" title="Advanced Flagging" url="https://raw.githubusercontent.com/SOBotics/AdvancedFlagging/master/dist/AdvancedFlagging.user.js"
            text="Userscript to highlight reported posts, and send feedback to Smokey, Natty, Guttenberg and GenericBot."
            github="https://github.com/SOBotics/AdvancedFlagging"
            tags={<div className="project-tags">
                <div className="tag tag-js">Typescript</div>
                <div className="tag tag-nodejs">Node JS</div>
            </div>}
        />
    </div>
}

function Repository() {
    return <div>
        <h2>Repositories</h2>
        <ProjectModel img={npmImg} title="Behna" url="https://www.npmjs.com/package/behna"
            text="This package is about some cool funtions like debounce, getSize, existInThisRadius and Ellipsis"
            github="https://github.com/raitalharehman/behna"
            tags={<div className="project-tags">
                <div className="tag tag-js">Javcript</div>
                <div className="tag tag-nodejs">Node JS</div>
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
                    <Repository />
                </div>
            </div>
        );
    }
}

export default Projects;