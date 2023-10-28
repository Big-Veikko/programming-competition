import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { SubmitBtn } from "../../components/button/Buttons";

import "./styles.scss";

import { useGetAlumniQuery } from "../../services/expressApi";

export const DirectoryPage = () => {
  const { data: alumni = [], error, isLoading } = useGetAlumniQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occured contact the administrator</div>;
  
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
            {alumni.map((alumnus) => (
              <tr key={alumnus.id}>
                  <td>{alumnus.name}</td>
                  <td>{alumnus.degree}</td>
                  <td>{alumnus.major}</td>
                  <td>{alumnus.graduation}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  );
};
