import React from 'react';
import './Participation.css';
import img1 from '../../assets/participation1.png'

function Participation() {
    return (
        <><div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hero-text">
                            <h1>Participate In Our <br/> Communtiy</h1>
                            <p>You can change the community with your contribution. Participate and build your community
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 hello-col-2">
                        <div className="hello-img">
                            <img src={img1} alt=""/>
                        </div>


                    </div>
                </div>
            </div>


            {/*<div className="mouseclick">*/}
            {/*    <a routerLink='what-we-do'>*/}
            {/*        <img id="mouse-click" src={mouseIcon} alt="" />*/}
            {/*        <img className="finger-img" src={fingerIcon} alt=""/>*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div><div>
        </div>
        </>
    );
}

export default Participation;