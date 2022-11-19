import file from '../resume/resume.pdf'

export default function Resume() {
  return (
    <div>
  
  <div class="homeContainer">
  <div class="row">
    <div class="col-9"></div>
    <div class="col-4"><h5>Contact</h5>
    <br/>
    <p>Chandler, AZ</p>
    <p>602.999.3860</p>
    <p><a href='mailto:brandon.maggiano@gmail.com'>brandon.maggiano@gmail.com</a></p>
    <p><a target="_blank" href='https://github.com/bmaggiano'>github.com/bmaggiano</a></p>
    <p><a target="_blank" href='https://linkedin.com/in/brandon-maggiano-000490119'>linkedin.com/in/brandon-maggiano-000490119</a></p>
    <br/>
    <h5>Skills</h5>
    <br/>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>NodeJS</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>OOP</li>
        <li>Express</li>
        <li>Tailwind CSS</li>
        <li>EJS</li>
        <li>Sequelize</li>
        <li>GraphQL</li>
        <li>Bootstrap</li>
    </ul>
    <br/>
    <h5>Education</h5>
    <br/>
    <h6>University of Arizona</h6>
    <p>2012-2014</p>
    <p>Major: PSIO</p>
    <h6>University of Arizona</h6>
    <p>2022-2022</p>
    <p>Full Stack Coding Bootcamp</p>
    </div>
    <div class="col-6"><h2>Brandon Maggiano</h2>
    <hr/>
    <br/>
    <h4>Summary</h4>
    <p>Creative, detail-oriented, software engineer with a deep interest
in Javascript. Proven track record of creating and implementing
successful front and back-end web applications. Looking to
bring my skills to a tech company with a great team to learn and
grow with.</p>
    <hr/>
    <h4>Experience</h4>
    <br/>
    <h6>Full Stack Web Developer Student</h6>
    <p>April 2022 - Present</p>
    <ul>
        <li>Learned the MERN stack.</li>
        <li>Proficient in front end as well as back-end
programming.</li>
        <li>Collaborated with cohort of peers to build applications
and debug code on a workday simulated schedule.</li>
    </ul>
    <h6>Real Estate Agent</h6>
    <p>October 2016 - Present</p>
    <ul>
        <li>Leadership role to walk clients through the buying and
selling process involved with home ownership.</li>
        <li>Use technologies such as ARMLS, Skyslope,
Transaction Desk, and other DB driven sites to keep in
contact with clients.</li>
    </ul>
    <hr/>
    <br/>
    <h5>Recent Projects:</h5>
    <br/>
    <h6>Rankedify &#40;Full Stack Web App&#41;: </h6>
    <p>A full stack application using
Javascript, NodeJS, Sequelize, Bootstrap, and Express to allow users
to rank their top 5 video games of all time!</p>
    <h6>Wingman &#40;Front End Web App&#41;:</h6>
    <p>A project designed to take
the decision-making process away from the indecisive couple.
Using server-side API calls to get a random movie, dinner, and
cocktail, the user can also store some of their favorite dates in
local storage for future reference.</p>
    <h6>JATE &#40;PWA&#41;: </h6>
    <p>"Just Another Text Editor"... This application
showcases the power of PWA's and the usefulness of being able
to cache data and install apps to be used in offline mode. Give
this a try for yourself!</p>
    <h6>Other Projects:</h6>
    <p>Weather Forecast, Workday Scheduler,
Ecommerce back end, Social Network API, Employee Tracker
App, Random Password Generator, Coding Quiz Challenge,
Team Profile generator, Blog Site</p>

    </div>
  </div>
        <h3 className='text-center m-2 p-2'><a href={file} download="bmaggiano-resume">Click here to download my resume!</a></h3>
        <p className='text-center'>...or reach out to me directly for any coding inquires!</p>
</div>
    </div>
  );
}