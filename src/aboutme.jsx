import React, { Component } from "react";
import logo from './ajith.jpg';
import "./aboutme.css"

class aboutme extends Component {
    constructor() {
        super();
        this.state = {
            name: "Ajith Rahul Sanaboina",
            designation: "Database Administrator"
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="container-fluid main-div">
                    <div>
                        <div class="row content">
                            <div class="col">
                                <div class="first-card card shadow p-3 mb-5 bg-body rounded mt-5">
                                    <img src={logo} class="card-img-top" alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">{this.state.name}</h5>
                                        <p class="card-text">{this.state.designation}</p>
                                        <div class="follow">
                                         <a href="https://www.linkedin.com/in/ajith-rahul-sanaboina" target="_blank" data-toggle="popover" title="Click here to navigate to my linked in account"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg></a>
</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="second-card card shadow p-3 mb-5 bg-body rounded mt-5">
                                    <div class="card-body">
                                        <a href="/resume">
                                            <button class="btns btn btn-primary">Resume</button>
                                        </a>
                                        <a href="/projects">
                                            <button class="btns btn btn-primary">Project <span class="badge bg-secondary">4</span> </button>
                                        </a>
                                        <p>myself ajith rahul sanaboina graduated from deakin university</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }

}


export default aboutme;