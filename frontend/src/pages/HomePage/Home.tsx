import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div>
      <div className="logo">
        <img src="/assets/xploreAlumni Logo.png" alt="XplorAlumni" />
      </div>

      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/giving">Giving</a></li>
          <li><a href="/event">Event</a></li>
          <li><a href="/opportunity">Opportunity</a></li>
          <li className="contact-us"><a href="/contactus">Contact Us</a></li>
        </ul>
      </nav>

      <div className="main-content">
        <img src="/assets/homeImage.png" alt="Welcome to the Xplor Alumni System" />
        <h1>Welcome to the Xplor Alumni System</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br></br>
       Magnam perspiciatis quisquam numquam nesciunt quo excepturi <br>
       </br>blanditiis atque enim reprehenderit repudiandae quod autem repellat asperiores animi adipisci deleniti ea, minima ab.</p>
      </div>

      <h2 className="news">News</h2>

      <div className="info-cards">
        {/* info cards content */}
      </div>
    </div>
  );
};

export default Home;
