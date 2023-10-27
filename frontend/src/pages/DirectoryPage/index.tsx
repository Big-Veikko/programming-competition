import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { SubmitBtn } from "../../components/button/Buttons";

import "./styles.scss";

export const DirectoryPage = () => {
  return (
    <>
      <Navbar />
      <br />
      <div className="landing"></div>

      <div className="content">
        <div className="search-field">
          <input type="text" placeholder="Enter Alumni Name or Year" />
          <SubmitBtn text="Search" onClick={() => {}} />
        </div>
    

        <table className="alumni-table">
          <thead>
            <th>Full Name</th>
            <th>Degree</th>
            <th>Major</th>
            <th>Graduaton Year</th>
          </thead>
          <tbody>
            <tr>
                <td>John Doe</td>
                <td>Master's</td>
                <td>Biomed</td>
                <td>2021</td>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>Master's</td>
                <td>Biomed</td>
                <td>2021</td>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>Master's</td>
                <td>Biomed</td>
                <td>2021</td>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>Master's</td>
                <td>Biomed</td>
                <td>2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
