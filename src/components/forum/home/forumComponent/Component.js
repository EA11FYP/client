// single forum component
import React from 'react';
import './Component.css';

const Component = () => {
    return (
        <div>
            <div className='forumHome-div1'>
                <div className='forumHome-div2'>
                    <p className='forumHome-Comment'>Lorem Ipsum</p>
                    <div className='forumHome-div3'>
                        <div className='forumHome-div4'>
                            <div className='forumHome-ldc'>
                                <button className='forumHome-btnx1 forumHome-lyk'></button>
                                5
                            </div>
                            <div className='forumHome-ldc'>
                                <button className='forumHome-btnx1 forumHome-dlyk'></button>
                                3
                            </div>
                            <div className='forumHome-ldc'>
                                <button className='forumHome-btnx1 forumHome-cmn'></button>
                                4
                            </div>
                        </div>
                        <div className='forumHome-div5'>Created by Sukrut Khot</div>
                    </div>
                </div>
                <button className='forumHome-dwn'></button>
            </div>
        </div>
    );
};

export default Component;