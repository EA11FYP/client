import React from 'react';

import ButtonLight from '../components/UI/button/light';
import './Landing.css';

const Landing = () => {

    let openChatbotHandler = () => {
        var features = 'directories=no,menubar=no,status=no,titlebar=no,toolbar=no,width=450,height=500';
        window.open('https://vibrant-swirles-080085.netlify.app/', 'mypopup', features);
    }

    return (
        <div className="landing container">
            <div className="landing-chatbot">
                <p>Interact with our chatbot</p>
                {/* <button onClick={openChatbotHandler}>Open</button> */}

                <ButtonLight 
                clicked={openChatbotHandler}
                style={{
                width:135, 
                height: 45, 
                fontSize: 18,
               }}>
                    Chat
                </ButtonLight>
            </div>
        </div>
    );
};

export default Landing;