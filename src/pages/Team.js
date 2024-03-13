import React from "react";
import { msrStudent, pastMTech, pastPhdStudent, students, teams } from "../utils/constants";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";

const Team = () => {
    return (
        <div className="teams-wrapper">
            <div className="container">
                <div className="teams">
                    <header>
                        <h3>TEAMS</h3>
                    </header>
                    <div className="teams-content-wrapper">
                        <div className="teams-content">
                            <div className="top-heading">
                                Principal Investigator
                            </div>
                            <div className="content">
                                <div className="teams-img">
                                    <img
                                        src="assets/images/tem1.png"
                                        alt="research"
                                    />
                                </div>
                                <div className="teams-content">
                                    <h5>Abhas Singh</h5>
                                    <p>PhD(Washington University)</p>
                                    <p>Phone: 0512-259-7665</p>
                                    <p>Email:  abhas@iitk.ac.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="cards-wrapper">
                            {teams.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">
                            Current Phd Candidates
                        </div>
                        <div className="cards-wrapper">
                            {students.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">
                            Current M.Tech and MSR  students
                        </div>
                        <div className="cards-wrapper">
                            {msrStudent.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">
                            Past Phd  Scholars
                        </div>
                        <div className="cards-wrapper">
                            {pastPhdStudent.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">
                            Past M.tech and MS (By Research)
                        </div>
                        <div className="cards-wrapper">
                            {pastMTech.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">Lab Alumni</div>
                        <div className="cards-wrapper">
                            <div className="aluminis-card">
                                <h4>M-Tech</h4>
                                <ul>
                                    <li>Prakhar Srivastava</li>
                                    <li>Ankit Kumar</li>
                                    <li>Aditya Shekhar</li>
                                    <li>Deepka Tiwari</li>
                                    <li>Vishakha Nimesh</li>
                                    <li>Anshuman Satpathy</li>
                                    <li>Prafulla Pokhara</li>
                                    <li>Rahul Silori</li>
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>MTech-BTech</h4>
                                <ul>
                                    <li>Vinod Bhojwani</li>
                                    <li>Harshit Khaitan</li>
                                    <li>Shrikant Bhole</li>
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>Postdoc</h4>
                                <ul>
                                    <li>Dr. Isha Vishan</li>
                                    <li>Dr. Amritanshu Shriwastav</li>
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>JRF</h4>
                                <ul>
                                    <li>Nivedita Iyer</li>
                                    <li>Ashwini K. Mohapatra</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
