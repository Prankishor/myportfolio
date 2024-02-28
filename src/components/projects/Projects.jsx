import React from "react";
import './projects.css';
import { project1, project2, project3, hnm, minigram, fitme } from './imports';
import Project from '../../containers/project/Project';

const Projects = () => {
    return (
        <div className="portfolio__projects section__padding" id="projects">
            <div className="portfolio__projects-heading">
                <h1 className="gradient__text">Projects</h1>
            </div>
            <div className="portfolio__projects-container">
                <div className="portfolio__projects-container_groupA">
                    <Project imgUrl={minigram} date="Dec 2023" text="MiniGram"
                        data="Full Stack,responsive social media platform with features like: JWT based Authentication and Authorization, Private Routing, Infinite Scrolling and much more. The Frontend is hosted live on Netlify and the Backend in Railway.
                        Technologies Stack: HTML, CSS, Javascript, Axios, React.js, React Router DOM v6, Java, Springboot, Spring Security, MySQL"
                        gitlink="https://minigramplatform.netlify.app/" />
                </div>
                <div className="portfolio__projects-container_groupB">
                    <Project imgUrl={fitme} date="June 2023" text="FitMe"
                        data="Fitme is a fully responsive web app, aims to provide a library of workouts and nutrition with features like Pagination, Search,
                        Add to Cart and much more. The application is hosted live on Netlify. Technology Stack: Javascript, ReactJS, Redux Toolkit, RTK Query, React Routing, Stripe Integration"
                        gitlink="https://github.com/Prankishor/Home-Automation" />
                    <Project imgUrl={project2} date="Mar 2019" text="Speech Embedded Facial Recognition System"
                        data="It is a facial recognition system that has a speech module attached. The system is attempted to be made 
                        portable in order to help people with no sight. Its main goal is to make people with no sight independent and help 
                        them recognise known as well as new people standing near them."
                        gitlink="https://github.com/Prankishor/Speech-Embedded-Image-Recognition-System" />
                    {/* <Project imgUrl={project4} date="Dec 2022" text="Movie Seat Booking: UI"
                        data="A frontend / UI based project solely focused on L&D with Vanilla Javascript involving modern syntax and design" />
                    <Project imgUrl={project5} date="Feb 2023" text="My Portfolio using React JS"
                        data="A React JS based fully functional frontend portfolio project." /> */}
                </div>
            </div>
        </div>
    )
}

export default Projects