import React from "react";
import './experience.css';
import Jobs from '../../containers/jobs/Jobs';

const jobsData = [
    {
        title: 'Daimler Truck Innovation Center India ',
        year: 'Dec 2021 - Present',
        designation: 'Software Engineer',
        text: 'Responsible for building modular and customizable UI with React.js for Dash Layout Order Management and creating REST APIs using MVC pattern and Hibernate (ORM) for the same with Spring Boot. Lead Developer in Digital Transformation Team, building applications from ground-up for counterparts from Europe and Detroit. Responsible for requirement gathering, workflow design, development and testing.',
    },
    {
        title: 'Mercedes-Benz Research & Development Center India',
        year: 'Aug 2021 - Dec 2021',
        designation: 'Graduate Engineer Trainee',
        text: 'Developed POC’s on Data Replication using Apache Kafka to replicate data from IBM DB2 to PostgreSQL with latency as low as 2ms. Developed APIs for Producers and Consumers using SpringBoot.',
    },
    {
        title: 'Cognizant ',
        year: 'April 2021 - Aug 2021',
        designation: 'Intern',
        text: 'Hands on training in MySQL, Core Java, Python, Big Data Fundamentals and Data Warehousing.',
    },
];

const Experience = () => {
    return (
        <div className="portfolio__experience section__padding" id="experience">
            <div className="portfolio__experience-header">
                <h1 className="gradient__text">Experience</h1>
            </div>
            <div className="portfolio__jobs-container">
                {jobsData.map((item, index) => (
                    <Jobs title={item.title} year={item.year} designation={item.designation} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Experience;