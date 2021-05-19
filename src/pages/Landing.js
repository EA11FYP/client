import React from "react";

import ButtonLight from "../components/UI/button/light";
import DataAnalysisComponent from "../components/dataAnalysis";
import "./Landing.css";

const Landing = () => {
  let openChatbotHandler = () => {
    var features =
      "directories=no,menubar=no,status=no,titlebar=no,toolbar=no,width=450,height=500";
    window.open(
      "https://vibrant-swirles-080085.netlify.app/",
      "mypopup",
      features
    );
  };

  return (
    <div className="landing container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="landing-chatbot">
            <p>Interact with our chatbot</p>
            <ButtonLight
              clicked={openChatbotHandler}
              style={{
                width: 135,
                height: 45,
                fontSize: 18,
              }}
            >
              Chat
            </ButtonLight>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="landing-chatbot">
            <p>View Job Opportunity</p>
            <a href="/placement/home" target="_blank">
              <ButtonLight
                style={{
                  width: 135,
                  height: 45,
                  fontSize: 18,
                }}
              >
                View
              </ButtonLight>
            </a>
          </div>
        </div>
      </div>

      <hr />
      <div style={{ marginTop: 45 }}>
        <DataAnalysisComponent />
      </div>
    </div>
  );
};

export default Landing;
