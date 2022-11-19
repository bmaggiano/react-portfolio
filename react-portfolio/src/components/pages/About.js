import cardPic from '../images/cardpic.jpg'
import reactPic from '../images/react.jpg'

export default function About() {
    return (
        <>
        <div className="homeContainer">
            <h1>Brandon Maggiano</h1>
        </div>

        <div className="homeContainerOne">
        <section className="first-row">
    <div className="profile-side">
        <img src={cardPic} alt="a picture of a laptop open with vibrant colors" className='cardpic'/>
    </div>
    <div className="profile-text">
        <h2 className="profile-name">Welcome to my React portfolio<hr/></h2> 
        <p className="profile-body">Hi there! My name is Brandon Maggiano and I am a full
            stack Web Developer based out of Chandler, AZ. I started my coding journey 4/21/2022 when I wrote my very first line of HTML.

            <blockquote>"Hello World"</blockquote>

            Probably the most common first couple words that any aspiring web dev would choose to write, 
            and from then on... a never ending journey to hone my skills, learn new languages,
            and to make sure that I never got too comfortable. Since then, I have written and assisted in the
            formation of a variety of projects all the way from a basic static HTML document all the way up to a 
            full blown applications that integrate the MERN stack.
        </p>
    </div>
</section>
</div>

<div className="languages card mb-3">
  <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-center">Languages Learned and Technologies Used<hr/></h5>
        
        <div className='languagesList p-2'>
        <ul>
            <li>HTML</li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>NodeJS</li>
        </ul>
        <ul>
            <li>Express</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Tailwind CSS</li>
        </ul>
        <ul>
            <li>React</li>
            <li>Handlebars</li>
            <li>GraphQL</li>
            <li>EJS</li>
            <li>PHP</li>
        </ul>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <img src={reactPic} className="img-fluid rounded" alt="a picture of a react web application" />
    </div>
  </div>
</div>

</>
  )
}