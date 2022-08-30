import React from 'react';
import {Card, Button} from 'react-bootstrap'
import './Participation.css';
import img1 from '../../assets/participation1.png'
import workshopImg from '../../assets/workshops.png'
import coHostImg from '../../assets/co-host.png'
import mentorImg from '../../assets/mentor.png'

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
        </div>
        <div className="vol_con_">
            <Card className="card_1">
                <div className="vol_con_header">
                    <h4>Put Your Passion Into Action</h4>
                </div>
                <div className="vol_con_text">
                    <p>There are plenty of ways you can contribute to northernbox</p>
                </div>
            </Card>
            <Card className="card_2">
                <div className="vol_con_header">
                    <h4>Put Your Passion Into Action</h4>
                </div>
                <div className="vol_con_text">
                    <p>There are plenty of ways you can contribute to northernbox</p>
                </div>
            </Card>
        </div>

            <section className="ntc-goals">
                <div className="container">
                    <div id="ntc-goals">
                        <div className="row" >
                            <div className="col-md-6 vision-image">
                                <img src={coHostImg} alt=""/>
                            </div>
                            <div className="col-md-6">
                                <div className="vision-text">
                                    <h6>Co-Host Events</h6>
                                    <p>Partner with the community to organize events and meet-up to create awarness and share knowledge among the community members.
                                    </p>
                                </div>
                            </div>

                        </div>


                        <div className="row" >

                            <div className="col-md-6">
                                <div className="vision-text">
                                    <h6>Lead Workshops</h6>
                                    <p>Introduce community members to technical topics or participate in industry panels like “Startups vs. Corporate”</p>
                                </div>
                            </div>
                            <div className="col-md-6 vision-image">

                                <img src={workshopImg} alt=""/></div>

                        </div>
                        <div className="row" >
                            <div className="col-md-6 vision-image">

                                <img src={mentorImg} alt=""/>
                            </div>
                            <div className="col-md-6">
                                <div className="vision-text">
                                    <h6>Mentor Members</h6>
                                    <p>Provide guidance, encourage, enable and give insights from your exprience to community members.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Participation;