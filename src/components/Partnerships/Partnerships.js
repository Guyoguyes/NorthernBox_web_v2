import React from 'react';

function Partnerships(props) {
    return (
        <div className="rn-brand-area brand-separation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb--30">
                            <h2>Our Partners</h2>
                        </div>
                        <ul className="brand-style-2">
                            <li style={{width: '500px !important', height: '100px', outline: '3px solid yellow'}}><img src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1689758071/Datacasmp_pzhtdn.png" alt="Logo Images" style={{width: '500px !important', height: '100px', outline: '3px solid red'}}/> </li>
                            <li><img src="assets/images/brand/holby.jpg" alt="Logo Images"/> </li>
                        <li>
                                <img src="assets/images/brand/mwit.jpg" alt="Logo Images"/>
                            </li>
                            <li>
                                <img src="assets/images/brand/teamsete.jpeg" alt="Logo Images"/>
                            </li>
                            <li>
                                <img src="assets/images/brand/refugeeyouth.png" alt="Logo Images"/>
                            </li>
                            <li>
                                <img src="assets/images/brand/noweikenya.jpeg" alt="Logo Images"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partnerships;