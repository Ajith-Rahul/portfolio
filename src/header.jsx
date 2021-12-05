import  "./header.css";

function header(props)
{
    
    return(
    <div class="header fixed-top">
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <p class="navbar-brand mb-0">{props.name}</p>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav-items-list" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/aboutme">About Me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/projects">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/resume">Resume</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contactme">Contact Me</a>
            </li>
        </ul>
    </div>
</nav>
</div>
    );
}

export default header;