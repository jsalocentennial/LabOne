const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <a> {/*Include link to larger photo?*/}
                <img src="/assets/GLIPPhoto.jpg" alt="GLIP Photo" />
            </a>
            <h2>Profile</h2>
                <p>Name: Jordan Salo</p>
                <p>Professional Biography: I am a pilot by trade with over 12 years in the industry.
                    I began my software engineering journey in 2024 while learning how to use the Unity
                    game engine. I started with CodeCademy online courses, and later enrolled in Centennial
                    Colleges Online Software Engineering program. I am currently in my second year of the
                    program and have expanded my knowledge considerably.
                </p>
                <h2>Skills</h2>
                <ul>
                    <li>C#</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>HTML/CSS</li>
                    <li>SQL/Oracle</li>
                </ul>
                <Link to="JSTechResume.pdf" target="_blank" rel="noopener noreferrer"> /*Link to resume*/ */
                    Download Resume
                </Link>
            
        </div>
    )
}

export default About;