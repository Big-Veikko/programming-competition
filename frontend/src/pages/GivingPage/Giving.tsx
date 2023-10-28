import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Giving.scss";

const GivingPage = () => {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h3>Giving to [Univesity]</h3>
        <p>
          Thank you for considering a gift to [University name]. If you have
          questions or need assistance making a gift, you can call [university
          number] or email school@domain.com.
        </p>
      </div>

      <div className="content">
        <div className="cards">
          <div className="info-card">
            <h2>EFT(Bank Wire)</h2>
            <table>
              <tr>
                <th>Bank Name</th>
                <td>First Nation Bank</td>
              </tr>
              <tr>
                <th>Account Name</th>
                <td>Nust</td>
              </tr>
              <tr>
                <th>Account Number</th>
                <td>8129018092</td>
              </tr>
              <tr>
                <th>Branch Code</th>
                <td>98123</td>
              </tr>
              <tr>
                <th>SWIFT/BIC CODE</th>
                <td>80998</td>
              </tr>
              <tr>
                <th>Reference</th>
                <td>Dontation</td>
              </tr>
            </table>
          </div>
          <div className="nb-card">
            <h2>Important</h2>
            <p>
              To ensure accurate handling, donors should send a confirmation
              email to school@domain.com with the following details:
            </p>
            <ul>
              <li>Donor Name</li>
              <li>Contact Phone Number</li>
              <li>Date the wire was sent</li>
              <li>Name of the originating bank</li>
              <li>Amount of the bank wire</li>
              <li>Was a wiring fee deducted from the wire amount?</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GivingPage;
