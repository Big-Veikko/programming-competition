import React from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";

import { useGetNewsQuery } from "../../services/expressApi";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="main-content">
        {/* <img src={homeImage} alt="Welcome to the Xplor Alumni System" /> */}
        <h1>Welcome to the Xplor Alumni System</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br></br>
          Magnam perspiciatis quisquam numquam nesciunt quo excepturi <br></br>
          blanditiis atque enim reprehenderit repudiandae quod autem repellat
          asperiores animi adipisci deleniti ea, minima ab.
        </p>
      </div>

      <h2 className="news">News</h2>

      <div className="info-cards">{/* info cards content */}</div>
    </div>
  );
};

export default Home;
