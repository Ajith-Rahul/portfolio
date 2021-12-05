import React, { Component } from "react";
import "./projects.css"


class projects extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            projectList: [

                {
                    imgPath: '',
                    projectName: 'Spotify',
                    projectDesc: 'this application is a music based on.',
                    projectLink: "https://github.com/Ajith-Rahul/sit725-prac3",
                    projectTech: 'HTML, CSS, Node.js, MongoDB.'
                },
                {
                    imgPath: '',
                    projectName: 'b',
                    projectDesc: 'A simple script that takes your liked videos on Youtube, and generates a Spotify playlist based on the song in your liked videos.',
                    projectLink: '',
                    projectTech: 'A simple script that takes your liked videos on Youtube, and generates a Spotify playlist based on the song in your liked videos.'
                },
                {
                    imgPath: '',
                    projectName: 'c',
                    projectDesc: 'A simple script that takes your liked videos on Youtube, and generates a Spotify playlist based on the song in your liked videos.',
                    projectLink: '',
                    projectTech: 'A simple script that takes your liked videos on Youtube, and generates a Spotify playlist based on the song in your liked videos.'
                }

            ]
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="title">
                        
                    <div className="square"></div>
                    <h3 className="header-project">PROJECTS</h3>
                    </div>
                    <p className="subtitle">Check out some of my projects down below!</p>
                    {
                      this.state.projectList.map(projectLists =>
                            <div className="project-container card">
                                <div className="row">
                                    <div className="col-md">
                                        <button className="rounded-pill check-out float-right"><a href={projectLists.projectLink} target="_blank">Check out</a></button>
                                        <div className="card-header project-name">
                                           <h5>{projectLists.projectName}</h5>
                                        </div>
                                        <div className="card-body">
                                            <h6>Project Description</h6>
                                            <div>{projectLists.projectDesc}</div>
                                        </div>
                                        <div className="card-footer">
                                            <h6>Project Technology</h6>
                                            <div>{projectLists.projectTech}</div>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <img src={projectLists.imgPath} alt="" />
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>
            </React.Fragment>

        );
    }




}

export default projects;