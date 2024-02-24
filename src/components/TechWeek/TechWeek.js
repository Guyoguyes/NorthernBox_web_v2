import React, {useState} from 'react';
import {Card, Tab, Table, Tabs} from "react-bootstrap";
import axios from "../../api/axios";
import requests from "../../api/requests";
import AlertMsg from "../../utils/AlertMsg";

function TechWeek(props) {
    const [key, setKey] = useState('About');

    // Personal Details
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [altPhone, setAltPhone] = useState();
    const [gender, setGender] = useState();
    const [county, setCounty] = useState();
    const [consituency, setConsituency] = useState();
    const [pdisability, setDisability] = useState();
    const [disabilityDesc, setDisabilityDesc] = useState();

    // Project Details
    const [projectName, setProjectName] = useState();
    const [category, setCategory] = useState();
    const [entryType, setEntryType] = useState();
    const [teamMembers, setTeamMeambers] = useState();
    const [innovvationTime, setInnovationTime] = useState();
    const [pitchDesk, setPitchDesk] = useState();
    const [projectDescription, setProjectDescription] = useState();
    const [ problemSolved, setProblemSolved] = useState()
    const [marketStats, setMarketStats] = useState();
    const [existingMarket, setExistingMarket] = useState();

    // Social Handles
    const [twitter, setTwitter] = useState();
    const [linkedIn, setLinkedIn] = useState();
    const [facebook, setFacebook] = useState();
    const [git, setGit] = useState();

    const [show, setShow] = useState(false)
    const [title, setTitle] = useState();
    const [icon, setIcon] = useState();
    const [message, setMessage] = useState();
    const [status, setStatus] = useState();


    const handleSubmit = () =>{
        const data = {name:name, email:email, phone: phone, altPhone: altPhone, gender: gender, region:county, constituency:consituency, person_with_disability: pdisability, describe_disability: disabilityDesc,
            innovation_name: projectName, category: category, entry_type: entryType, teamMembers: teamMembers, innovation_period: innovvationTime,  pitch_desk: pitchDesk, project_description: projectDescription, problem_targeted: problemSolved, target_market: marketStats, current_solution: existingMarket,
            linkedin: linkedIn, facebook: facebook, github_profile: git, twitter:twitter}
        axios.post(requests.registerTeam, data)
            .then((response) =>{
                if(response.data.message === "user registered!"){
                    console.log('response success: ', response.data)
                    setShow(true)
                    setStatus('success')
                    setTitle('You have registered successfully')
                    setInterval(() =>{
                        setShow(false)
                    }, 5000)
                }
                else{
                    console.log('response success 1: ', response.data)
                    setShow(true)
                    setStatus('error')
                    setTitle('Failed to register. Please try again!!')
                    setInterval(() =>{
                        setShow(false)
                    }, 5000)
                }
            })
            .catch((err) =>{
                console.log('response error: ', err)
                setShow(true)
                setStatus('error')
                setTitle(err)
                setInterval(() =>{
                    setShow(false)
                }, 5000)
            })

    }

    return (
        <div>
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7" data-black-overlay="7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-single-page-title text-center pt--100">
                                <h2 className="title theme-gradient">Northern Frontier  <br/>Innovation Week</h2>
                                <ul className="blog-meta d-flex justify-content-center align-items-center">
                                    <li><i data-feather="clock"></i>December 18, 2022</li>
                                    <li><i data-feather="user"></i>GARRISSA</li>
                                    <li><i data-feather="message-circle"></i>15 Comments</li>
                                    <li><i data-feather="heart"></i>Like</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rn-service-details rn-section-gap bg_color--1">
                <div className="container">
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}

                        style={{margin: '0 auto'}}
                    >
                        <Tab eventKey="About" title="About the challenge">
                            <div>
                                <h4 className="title">Northern Frontier Innovation Week.</h4>
                                <p style={{width: '800px'}}>There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form, by injected humour, or randomised words
                                    which don't look even slightly believable. If you are going to use a passage of
                                    Lorem Ipsum. You need to be sure there isn't </p>
                                <h5 className="title">Background</h5>
                                <p style={{width: '800px'}}>There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form, by injected humour, or randomised words
                                    which don't look even slightly believable. If you are going to use a passage of
                                    Lorem Ipsum. You need to be sure there isn't </p>
                                <h6 className="title">Key Objectives.</h6>
                                <ul className="list-style">
                                    <li>Yet this above sewed flirted opened ouch</li>
                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                    <li>Abominable this abidin far successfully then like piquan</li>
                                    <li>Risus commodo viverra</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                </ul>
                            </div>
                        </Tab>
                        <Tab eventKey="Judging" title="Judging Criteria">
                            <p style={{width: '800px'}}>There are many variations of passages of Lorem Ipsum available, but the majority
                                have suffered alteration in some form,  </p>
                            <Table striped={'#000'} bordered hover responsive className='table-striped'>
                                <thead>
                                <tr>
                                    <th>Criteria</th>
                                    <th>Description</th>
                                    <th>Points Earned</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Originality and relevance of concept</td>
                                    <td>The innovation provides a meaningful intervention to the Kenyan environment
                                        <br/>
                                        The project needs to create new solutions or apply existing solutions in a new, innovative way.
                                        <br/>
                                        The idea should have potential to scale.</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Completeness of Solution</td>
                                    <td>Completeness of Solution</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <td >Use of technology</td>
                                    <td>Creativity in application of Technology in the design of the solution.
                                        <br/>
                                        Consideration for human interaction while using the solution.</td>
                                    <td>20</td>
                                </tr>
                                    <tr>
                                        <td>Usefulness/ Feasibility</td>
                                        <td>The project must be realistic in terms of the legal, technological and scientific aspects of the solution. It should be possible to realize the project within a few months
                                            <br/>
                                            The impact of the solution  to the sector of Relevance</td>
                                        <td>20</td>
                                    </tr>
                                <tr>
                                    <td>Innovation Challenge Impact </td>
                                    <td>The project should have a real significance in economic recovery to businesses, communities and people’s lives.</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}><b>Total Points</b></td>
                                    <td><b>100</b></td>
                                </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="Awards" title="Awards" >
                            <h4>Awards</h4>
                            <ol className="list-style">
                                <li>Yet this above sewed flirted opened ouch</li>
                                <li>Goldfinch realistic sporadic ingenuous</li>
                                <li>Abominable this abidin far successfully then like piquan</li>
                                <li>Risus commodo viverra</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                            </ol>
                        </Tab>
                        <Tab eventKey="Application" title="Application" style={{ overflow: "scroll", overflowY: "scroll", overflowX: "scroll"}}>
                            {!show?
                                <Card>
                                    <Card.Header>
                                        <h4>How to apply</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="rn-contact-area rn-section-gap bg_color--1" style={{marginTop: '-50px', height: '500px', marginLeft: '50px'}}>
                                            <div className="contact-form--1">
                                                <div className="container-full">
                                                    <div className="row row--35 align-items-start">
                                                        <div className="col-lg-6 order-2 order-lg-1" style={{width: '75%'}}>

                                                            <form onSubmit={handleSubmit}>
                                                                <Card >
                                                                    <Card.Header>Personal Details</Card.Header>
                                                                    <Card.Body>
                                                                        <div className="form-wrapper">

                                                                            <div className="container">
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 ">
                                                                                                        <label>Name</label>
                                                                                                        <input type="text" name="name" id="item01" value={name} onChange={(e) => setName(e.target.value)}
                                                                                                               placeholder="Your Name *"/>

                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 order-1 order-lg-2">
                                                                                                        <label>Email</label>
                                                                                                        <input type="text" name="email" id="item02" value={email} onChange={(e) => setEmail(e.target.value)}
                                                                                                               placeholder="Your email *"/>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 ">
                                                                                                        <label>Phone</label>
                                                                                                        <input type="text" name="name" id="item01" value={phone} onChange={(e) => setPhone(e.target.value)}
                                                                                                               placeholder="Phone *"/>

                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 order-1 order-lg-2">
                                                                                                        <label>Alt Phone</label>
                                                                                                        <input type="text" name="email" id="item02" value={altPhone} onChange={(e) => setAltPhone(e.target.value)}
                                                                                                               placeholder="Your email *"/>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 ">
                                                                                                        <label>Gender</label>
                                                                                                        <select type="text" name="name" id="item01" value={gender} onChange={(e) => setGender(e.target.value)}
                                                                                                                placeholder="Phone *">
                                                                                                            <option value=""></option>
                                                                                                            <option value="male">Male</option>
                                                                                                            <option value="Female">Female</option>
                                                                                                        </select>

                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 order-1 order-lg-2">
                                                                                                        <label>County</label>
                                                                                                        <select type="text" name="name" id="item01" value={county} onChange={(e) => setCounty(e.target.value)}
                                                                                                                placeholder="Phone *">
                                                                                                            <option value=""></option>
                                                                                                            <option value="county">Male</option>
                                                                                                            <option value="county">Female</option>
                                                                                                        </select>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 ">
                                                                                                        <label>Constituency</label>
                                                                                                        <select type="text" name="name" id="item01"  value={consituency} onChange={(e) => setConsituency(e.target.value)}
                                                                                                                placeholder="constituency*">
                                                                                                            <option value=""></option>
                                                                                                            <option value="Constituency">Male</option>
                                                                                                            <option value="Constituency">Female</option>
                                                                                                        </select>

                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 order-1 order-lg-2">
                                                                                                        <label>Person With Disability</label>
                                                                                                        <select type="text" name="name" id="item01" value={pdisability} onChange={(e) => setDisability(e.target.value)}
                                                                                                                placeholder="">
                                                                                                            <option value=""></option>
                                                                                                            <option value="true">Yes</option>
                                                                                                            <option value="false">No</option>
                                                                                                        </select>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 ">
                                                                                                        <label>If Yes, Please Describe the Disability</label>
                                                                                                        <textarea name="message" placeholder="" value={disabilityDesc} onChange={(e) => setDisabilityDesc(e.target.value)}/>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Card.Body>
                                                                </Card>
                                                                <Card style={{marginTop: '20px'}}>
                                                                    <Card.Header>Project Details</Card.Header>
                                                                    <Card.Body>
                                                                        <div className="form-wrapper">

                                                                            <div className="container">
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 ">
                                                                                                        <label>Project Name</label>
                                                                                                        <input type="text" name="name" id="item01" value={projectName} onChange={(e) => setProjectName(e.target.value)}
                                                                                                               placeholder="Your Name *"/>

                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 order-1 order-lg-2">
                                                                                                        <label>Category</label>
                                                                                                        <select type="text" name="name" id="item01" value={category} onChange={(e) => setCategory(e.target.value)}
                                                                                                                placeholder="">
                                                                                                            <option value=""></option>
                                                                                                            <option value="category">Male</option>
                                                                                                            <option value="category">Female</option>
                                                                                                        </select>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 ">
                                                                                                        <label>Entry Type</label>
                                                                                                        <select type="text" name="name" id="item01"
                                                                                                                placeholder="" value={entryType} onChange={(e) => setEntryType(e.target.value)}>
                                                                                                            <option value=""></option>
                                                                                                            <option value="entryType">Male</option>
                                                                                                            <option value="entryType">Female</option>
                                                                                                        </select>

                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 order-1 order-lg-2">
                                                                                                        <label>Team IF any</label>
                                                                                                        <i>separate name with commas</i>

                                                                                                        <input type="text" name="email" id="item02"
                                                                                                               placeholder="" value={teamMembers} onChange={(e) => setTeamMeambers(e.target.value)}/>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 ">
                                                                                                        <label>How long has the innovation been in existence?</label>
                                                                                                        <input type="text" name="email" id="item02"
                                                                                                               placeholder="in years" value={innovvationTime} onChange={(e) => setInnovationTime(e.target.value)}/>


                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 ">
                                                                                                        <label>Pitch Desk File</label>
                                                                                                        <input name="name" type="file" placeholder="" value={pitchDesk} onChange={(e) => setPitchDesk(e.target.value)}/>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-12 col-12 ">
                                                                                                        <label>Brief Description of the project (200 words max)</label>
                                                                                                        <textarea name="message" placeholder="Your Message" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}/>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-12 col-12 ">
                                                                                                        <label>What problem are you solving and for who (300 words max)</label>
                                                                                                        <textarea name="message" placeholder="Your Message" value={problemSolved} onChange={(e) => setProblemSolved(e.target.value)}/>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-12 col-12 ">
                                                                                                        <label>Is there available market? give rough statistics of your target market.</label>
                                                                                                        <textarea name="message" placeholder="Your Message" value={marketStats} onChange={(e) => setMarketStats(e.target.value)}/>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-12 col-12 ">
                                                                                                        <label>How what currently exists and how and why are you different?</label>
                                                                                                        <textarea name="message" placeholder="Your Message" value={existingMarket} onChange={(e) => setExistingMarket(e.target.value)}/>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Card.Body>
                                                                </Card>
                                                                <Card style={{marginTop: '20px'}}>
                                                                    <Card.Header>Social Media Links</Card.Header>
                                                                    <Card.Body>
                                                                        <div className="form-wrapper">

                                                                            <div className="container">
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 ">
                                                                                                        <label>Twitter</label>
                                                                                                        <input type="text" name="name" id="item01"
                                                                                                               placeholder="twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)}/>

                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 order-1 order-lg-2">
                                                                                                        <label>LinkedIn</label>
                                                                                                        <input type="text" name="email" id="item02"
                                                                                                               placeholder="linkedIn" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)}/>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="service-details-inner">
                                                                                            <div className="inner">
                                                                                                <div
                                                                                                    className="row ">
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 ">
                                                                                                        <label>Facebook</label>
                                                                                                        <input type="text" name="name" id="item01"
                                                                                                               placeholder="facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)}/>

                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="col-lg-6 col-12 order-1 order-lg-2">
                                                                                                        <label>Git</label>
                                                                                                        <input type="text" name="email" id="item02"
                                                                                                               placeholder="githb/gitlab etc" value={git} onChange={(e) => setGit(e.target.value)}/>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Card.Body>
                                                                </Card>
                                                                <button type='submit' className="slide-btn btn-primary-color" style={{color: '#000'}}><a className="rn-button-style--2 btn-primary-color" >Register</a></button>
                                                            </form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>:<AlertMsg title={title} status={status}/>
                            }



                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default TechWeek;