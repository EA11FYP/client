// new component
import React from 'react';
import './New.css'

const New = () => {
    return (
        <div className='newDis-div1'>
            <p>NEW DISCUSSION</p>
            <form className='newDis-form'>
                <div className='newDis-form1'>
                    <label for="newDis-fname">Title:</label>
                    <input type="text" id="newDis-Title" name="newDis-Title"/>
                </div>
                <br/><br/>
                <div className='newDis-form1'>
                    <label for="newDis-description">Description:</label>
                    <input type="text" id="newDis-description" name="newDis-description"/>
                </div>
            </form>
            <br/><br/>
            <button className='newDis-butt'>Submit</button>
        </div>
    );
};

export default New;