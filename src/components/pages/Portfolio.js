import rankedify from '../images/rankedify.PNG'
import wingman from '../images/wingman.PNG'
import jate from '../images/jate.PNG'
import weather from '../images/weather.PNG'
import workday from '../images/workday.PNG'
import codingquiz from '../images/codingquiz.PNG'
// new npm package called mdb ui kit to help with logos and footer elements
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function Portfolio() {
    return (
        <>
        <div className='portContainer'>
            <h2 className='text-center'>Projects</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={rankedify} class="card-img-top" alt="Image of rankedify app" />
      <div className="card-body">
        <h5 className='portTitle'><a className="portfolioLink card-title" target="_blank" href='https://rankedify.herokuapp.com/'>Rankedify</a>
        <MDBBtn outline color="white" floating className='m-1' target="_blank" href='https://github.com/bmaggiano/Rankedify' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn></h5>
        <p className="card-text text-center">A full stack application using Javascript, NodeJS, Sequelize, Bootstrap, and Express to allow users to rank their
        top 5 video games of all time!</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={wingman} class="card-img-top" alt="Image of wingman app" />
      <div className="card-body">
        <h5 className='portTitle'><a className="portfolioLink card-title" target="_blank" href='https://dustinm5oly.github.io/WingMan/'>Wingman</a>
        <MDBBtn outline color="white" floating className='m-1' target="_blank" href='https://github.com/Dustinm5Oly/WingMan' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn></h5>
        <p className="card-text text-center">A project designed to take the decision making process away from the indecisive couple.
        Using server side API calls to get a random movie, dinner, and cocktail, the user can also store some of their
        favorite dates in local storage for future reference.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={jate} class="card-img-top" alt="Image of JATE app" />
      <div className="card-body">
        <h5 className='portTitle'><a className="portfolioLink card-title" target="_blank" href='https://bmaggiano-jate.herokuapp.com/'>JATE</a>
        <MDBBtn outline color="white" floating className='m-1' target="_blank" href='https://github.com/bmaggiano/Text-Editor-Pwa' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn></h5>
        <p className="card-text text-center">"Just Another Text Editor"... This application showcases the power of PWA's 
        and the usefulness of being able to cache data and install apps to be used in offline mode. Give this a try for yourself!</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={weather} class="card-img-top" alt="Image of weather forecast app" />
      <div className="card-body">
        <h5 className='portTitle'><a className="portfolioLink card-title" target="_blank" href='https://bmaggiano.github.io/Weather-App/'>Weather Forecast</a>
        <MDBBtn outline color="white" floating className='m-1' target="_blank" href='https://github.com/bmaggiano/Weather-App' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn></h5>
        <p className="card-text text-center">An application designed to help the user predict the weather for the current day and 
        for the next 4 days. Integrating server side API calls once again to pull data from Open weather map API
         based off the city the user chooses.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={workday} class="card-img-top" alt="Image of workday scheduler app" />
      <div className="card-body">
        <h5 className='portTitle'><a className="portfolioLink card-title" target="_blank" href='https://bmaggiano.github.io/Work-Day-Scheduler/'>Work Day Scheduler</a>
        <MDBBtn outline color="white" floating className='m-1' target="_blank" href='https://github.com/bmaggiano/Work-Day-Scheduler' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn></h5>
        <p className="card-text text-center">Plan out your work day and make use of one of the most powerful
        concepts in the work industry (Time Blocking)! Using local storage to keep data persistent across
        page refreshes to keep your day polished and organized.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={codingquiz} class="card-img-top" alt="image of coding quiz app" />
      <div className="card-body">
        <h5 className='portTitle'><a className="portfolioLink card-title" target="_blank" href='https://bmaggiano.github.io/coding-quiz-challenge/'>Coding Quiz Challenge</a>
        <MDBBtn outline color="white" floating className='m-1' target="_blank" href='https://github.com/bmaggiano/coding-quiz-challenge' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn></h5>
        <p className="card-text text-center">Take the 60 second coding quiz challenge and see how you rank among
        other users! Answer 5 questions in the shortest amount of time and input your initials to put yourself 
        in the running for best score ever!</p>
      </div>
    </div>
  </div>
</div>
</div>
</>
  )
}