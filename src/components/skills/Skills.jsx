import React from "react";
import './skills.css';

const Skills = () => {
    return (
        <div className="portfolio__skills section__margin" id="skills">
            <div className="portfolio__skills-title">
                <h1>Skills</h1>
            </div>
            <div className="portfolio__skills-sections">

                <div className="portfolio_skills-sections_languages skill_container">
                    <h3 className="gradient__text">Frontend</h3>
                    <div className="items">
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascrit</li>
                            <li>React.js</li>
                            <li>Redux Toolkit</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                </div>
                <div className="portfolio_skills-sections_frameworks skill_container">
                    <h3 className="gradient__text">Backend</h3>
                    <div className="items">
                        <ul>
                            <li>Java</li>
                            <li>SpringBoot</li>
                            <li>Hibernate</li>
                            <li>MVC</li>
                            <li>Spring Security</li>
                            <li>JWT</li>
                        </ul>
                    </div>
                </div>
                <div className="portfolio_skills-sections_databases skill_container">
                    <h3 className="gradient__text">Databases</h3>
                    <div className="items">
                        <ul>
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
                <div className="portfolio_skills-sections_others skill_container">
                    <h3 className="gradient__text">Others</h3>
                    <div className="items">
                        <ul>
                            <li>Docker</li>
                            <li>Apache Kafka</li>
                            <li>Github</li>
                            <li>J2EE</li>
                            <li>Unit Testing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills