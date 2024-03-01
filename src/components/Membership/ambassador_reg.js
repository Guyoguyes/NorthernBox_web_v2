import React, {useState, useRef, useEffect} from "react";
// import { WithContext as ReactTags } from 'react-tag-input';
import '@yaireo/tagify/dist/tagify.css';
import Tagify from '@yaireo/tagify';
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../../firebase'
import Swal from 'sweetalert2'


function AmbassadorReg(){

  const [selectedOption, setSelectedOption] = useState('');
  const [tags, setTags] = useState([]);

    const [fName, setFname] = useState()
    const [lName, setLname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [rescidence, setRescidence] = useState()
    const [education, setEducation] = useState()
    const [communityExprience, setCommunityExprience] = useState()
    const [communityExprienceDesc, setCommunityExprienceDesc] = useState()
    const [purpose, setPurpose] = useState()
    const [areasOfInterset, setAreasOfInterset] = useState()
    const [skills, setSkills] = useState([])
    const [connectionSite, setConnectionSite] = useState()
    const [otherConnectionSite, setOtherConnectionSite] = useState('')
    const [conditionTerms, setConditionTerms] = useState()

    const addAmbassador = async (e) => {
        e.preventDefault();
        const newAmb = {
            fName: fName,
            lName: lName,
            email: email,
            phone: phone,
            age: age,
            gender: gender,
            rescidence: rescidence,
            areasOfInterset: areasOfInterset,
            education: education,
            communityExprience: communityExprience,
            communityExprienceDesc: communityExprienceDesc,
            purpose: purpose,
            skills: skills,
            connectionSite: connectionSite,
            otherConnectionSite: otherConnectionSite, // fixed property name
            conditionTerms: conditionTerms
        };
        console.log("New Amb Data: " + JSON.stringify(newAmb));
        try {
            const response = await addDoc(collection(db, 'ambassadors'), newAmb);
            Swal.fire({
                title: 'Success!',
                text: `Ambassador Registered Successfully. You will be updated on the next step`,
                icon: 'success',
                confirmButtonText: 'Back'
              })
            
            console.log('Ambassador Registered Successfully. ', response);

        } catch (e) {
            Swal.fire({
                title: 'Error!',
                text: `Failed. Please try again!!`,
                icon: 'error',
                confirmButtonText: 'Try'
              })
            console.error("Error adding Ambassador: " + e.message);
        }
    }


  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      // Initialize Tagify on the input node reference
      new Tagify(inputRef.current);
    }
  }, []);





    const items = [
        {
            icon: '',
            title: 'Community Connect',
            description: 'Immerse yourself in the rich tapestry of local communities, grasping the nuances of their distinctive needs and aspirations. Cultivate a profound sense of belonging by uniting like-minded individuals who are driven by a shared commitment to lifelong learning.'
        }, {
            icon: '',
            title: 'Promoting Progress',
            description: 'Amplify the reach of NorthernBox`s transformative programs, events, and initiatives. Boost awareness and engagement within their networks and local communities.'
        }, {
            icon: '',
            title: 'Voice of the Community',
            description: 'Bridge the community and NorthernBox, offering essential feedback and insights. Champion the diverse voices and concerns of their regions, ensuring inclusive representation.'
        }, {
            icon: '',
            title: 'Empowering Events',
            description: 'Curate impactful local events, workshops, and meetups to unite the community. Boost community involvement and collaboration through tailor-made regional initiatives.'
        }, {
            icon: '',
            title: 'Regional Envoys',
            description: 'Serve as ambassadors for NorthernBox in their specific regions, effectively echoing our values and goals.'
        }, {
            icon: '',
            title: 'Growing Together',
            description: 'Assist in recruiting new members and encouraging active participation. Contribute to the growth and success of NorthernBox by inspiring positive change. make it better'
        },
    ]

    return(
        <>
            <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6" style={{backgroundImage:'url(assets/images/bg/wave.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor:'#212121'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                                <h2 className="title" style={{fontSize: '72px'}}>Be An Ambassador</h2>
                                <ul className="page-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="current-page">Ambassador</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rn-service-area rn-section-gap bg_color--1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center mb--30">
                                {/* <h2>Intro to code Wave</h2> */}
                                <p>"See Everyone you Encounter As Something Positive To Offer, <br/>To Find Out What Is, And To Find Out Where Your Vision And Theirs Overlaps. That's What True Collaboration Looks Like." <i>~ Fred Swaniker</i></p>
                            </div>
                        </div>
                    </div>
                    <div className="about-inner inner">
                                <div className="section-title">
                                    {/* <h2 className="title">Who are we</h2> */}
                                    <p className="description">Become a cornerstone of NorthernBox's community-driven initiatives by joining our passionate team of ambassadors. These dedicated team is committed to nurturing a culture of learning, innovation, and collaboration in their respective regions. As ambassadors, they play a pivotal role in connecting communities, inspiring change, and shaping the future of NorthernBox. Join this dynamic force and be a catalyst for positive transformation in your region. Together, let's foster a culture where knowledge thrives, innovation blossoms, and collaboration knows no bounds. Elevate your impact – become a NorthernBox Ambassador today.</p>
                                </div>
                            </div>
                </div>
            </div>
            <div class="rn-service-area rn-section-gap bg_color--5">
                <div class="container">
                <div class="row">
                <div class="col-lg-12">
                            <div class="section-title text-center mb--30">
                                <h2 class="title">Ambassador Benefits</h2>
                                {/* <p>The Community is currently undertaking several projects starting form STEM education to
                                startups and innovation incubation</p> */}
                            </div>
                        </div>
{/*// <!-- Start Single Service  -->*/}
                        {items.map((item, key) =>{
                            return(
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                            <div class="single-service service__style--2 bg-color-gray">
                                <a href="service-details.html">
                                    <div class="service">
                                        <div class="icon">
                                            {/* <GiIcons.GiTeacher/> */}
                                        </div>
                                        <div class="content">
                                            <h3 class="title">{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                            )
                        })}

{/*// <!-- End Single Service  -->*/}
{/*//*/}


{/*// <!-- End Single Service  -->*/}
</div>
                </div>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 mb-20 ">
            {/* <a href="#">
                <img className="rounded-t-lg w-full h-60 opacity-80" src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1686430339/IMG_8657_yolykv.jpg" alt="" />
            </a> */}

            <div className="relative">
              
                <a href="#">
                    <img className="rounded-t-lg w-full h-60 opacity-80" src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1705246387/ian-schneider-TamMbr4okv4-unsplash_ubeoww.jpg" alt="" />
                    
                </a>
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img className="rounded-full" src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1697296240/NorthernBox_Logo-1_kabjwb-removebg-preview_yixpzn.png" alt="" />
                </div> */}
            </div>


            <form className="mt-4 m-5" onSubmit={addAmbassador}>
                <p class="text-gray-900 text-4xl dark:text-grey-500 text-center mx-auto mb-10">Become A NorthernBox Ambassador</p>

                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-transparent border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            value={fName}
                            onChange={(e) => setFname(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Last Name</label>
                        <input
                            type="text"
                            id="last_name"
                            className="bg-transparent border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            value={lName}
                            onChange={(e) => setLname(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div >
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-transparent border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="john.doe@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div >
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            className="bg-transparent border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="(+254)-XXX-XXX-XXX"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div >
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Age</label>
                        <select
                            id="gender"
                            className={`bg-transparent border border-blue-500 ${selectedOption ? 'text-black' : 'text-gray-500'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        >
                            <option value="" disabled></option>
                            <option value="0-5">0-5 years</option>
                            <option value="6-10">6-10 years</option>
                            <option value="11-15">11-15 years</option>
                            <option value="16-20">16-20 years</option>
                            <option value="21-25">21-25 years</option>
                            <option value="26-30">26-30 years</option>
                            <option value="31-35">31-35 years</option>
                            <option value="35+"> Above 35 years</option>
                        </select>
                    </div>


                    <div >
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Gender</label>
                        <select
                            id="gender"
                            className={`bg-transparent border border-blue-500 ${selectedOption ? 'text-black' : 'text-gray-500'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="" disabled></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="none">Prefer not to say</option>
                        </select>
                    </div>
                    
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">County of Residence</label>
                    <input
                            type="text"
                            id="phone"
                            className="bg-transparent border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nairobi"
                            value={rescidence}
                            onChange={(e) => setRescidence(e.target.value)}
                            required
                        />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Level of Education</label>
                    <select
                        id="email"
                        className={`bg-transparent border border-blue-500 ${selectedOption ? 'text-black' : 'text-gray-500'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        required
                    >
                        <option value=""></option>
                        <option value="highSchool">High School</option>
                        <option value="associateDegree">Associate Degree</option>
                        <option value="bachelorsDegree">Bachelor's Degree</option>
                        <option value="mastersDegree">Master's Degree</option>
                        <option value="doctoralDegree">Doctoral Degree</option>
                        <option value="professionalCertification">Professional Certification</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Do you have any Community Engagement Experience</label>
                    <select
                        id="email"
                        className={`bg-transparent border border-blue-500 ${selectedOption ? 'text-black' : 'text-gray-500'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        value={communityExprience}
                        onChange={(e) => setCommunityExprience(e.target.value)}
                        required
                    >
                        <option value="" disabled></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">If Yes (Previous experience in community engagement or leadership roles)</label>
                    <input
                            type="text"
                            id="phone"
                            className="bg-transparent border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            value={communityExprienceDesc}
                            onChange={(e) => setCommunityExprienceDesc(e.target.value)}
                            required
                        />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">What motivates you to become an ambassador for NorthernBox?</label>
                    <input
                            type="text"
                            id="phone"
                            className="bg-transparent border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            value={purpose}
                            onChange={(e) => setPurpose(e.target.value)}
                            required
                        />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Your areas of interest or expertise</label>
                    <input
                            type="text"
                            id="phone"
                            className="bg-transparent border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            ref={inputRef}
                            autoFocus
                            value={areasOfInterset}
                            onChange={(e) => setAreasOfInterset(e.target.value)}
                            required
                        />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Skills You bring to the role</label>
                    <input
                            type="text"
                            id="phone"
                            className="bg-transparent border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            ref={inputRef}
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            autoFocus
                            required
                        />
                </div>

                    
                
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">How Did You Hear About Us </label>
                    <select
                        id="email"
                        className={`bg-transparent border border-blue-500 ${selectedOption ? 'text-black' : 'text-gray-500'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        value={connectionSite}
                        onChange={(e) => setConnectionSite(e.target.value)}
                        required
                    >
                        <option value=""></option>
                        <option value="friend">From a Friend</option>
                        <option value="searchEngine">Search Engine</option>
                        <option value="socialMedia">Social Media</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="website">Our Website</option>
                        <option value="event">Event or Conference</option>
                        <option value="other">Other</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">How Did You Hear About Us (OTHER)</label>
                    <input
                            type="text"
                            id="phone"
                            className="bg-transparent border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            value={otherConnectionSite}
                            onChange={(e) => setOtherConnectionSite(e.target.value)}
                            required
                        />
                </div>

                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                    <input id="remember" type="checkbox"  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" 
                    value={conditionTerms}
                            onChange={(e) => setConditionTerms(e.target.value)}required/>
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
                
                {/* ... other form fields ... */}
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Register
                </button>
            </form>
        </div>

    

        </>
    )
}

export default AmbassadorReg