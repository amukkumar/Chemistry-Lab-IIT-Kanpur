import React from "react";
import { msrStudent, students, teams } from "../utils/constants";
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
                                    <h5><Link to={`/team/Abhas Singh`}>Abhas Singh</Link></h5>
                                    <p>PhD(Washington University)</p>
                                    <p>Phone: 0512-259-7665</p>
                                    <p>Email:  abhas@iitk.ac.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="info-about-heading">
                            Current Phd Candidates
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
                            {teams.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">Lab Alumni</div>
                        <div className="cards-wrapper">
                            <div className="aluminis-card">
                                <h4>Ph.D</h4>
                                <ul>
                                    {teams.map((team, index) => (
                                        <li key={index}>
                                            {team.name},{team.to}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>Master and Undergraduate</h4>
                                <ul>
                                    {teams.map((team, index) => (
                                        <li key={index}>
                                            {team.name}, {team.to}, {team.designation}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>Visiting Students and Scholars</h4>
                                <ul>
                                    {teams.map((team, index) => (
                                        <li key={index}>
                                            {team.name}, {team.to}, {team?.colleges[0]}
                                        </li>
                                    ))}
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
