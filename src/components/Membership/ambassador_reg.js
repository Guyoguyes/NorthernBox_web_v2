import React, { useState, useRef, useEffect } from "react";
import Tagify from '@yaireo/tagify';
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import Swal from 'sweetalert2';

function AmbassadorReg() {
    const [selectedOption, setSelectedOption] = useState('');
    const [tags, setTags] = useState([]);
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [residence, setResidence] = useState('');
    const [education, setEducation] = useState('');
    const [communityExperience, setCommunityExperience] = useState('');
    const [communityExperienceDesc, setCommunityExperienceDesc] = useState('');
    const [purpose, setPurpose] = useState('');
    const [areasOfInterest, setAreasOfInterest] = useState('');
    const [skills, setSkills] = useState('');
    const [connectionSite, setConnectionSite] = useState('');
    const [otherConnectionSite, setOtherConnectionSite] = useState('');
    const [conditionTerms, setConditionTerms] = useState(false);
    const [error, setError] = useState(null);

    const addAmbassador = async (e) => {
        e.preventDefault();
        if (!fName || !lName || !email || !phone || !age || !gender || !residence || !education || !communityExperience || !purpose || !areasOfInterest || !skills || !connectionSite || !conditionTerms) {
            setError('Please fill in all fields');
            return;
        }
        const newAmb = {
            fName: fName,
            lName: lName,
            email: email,
            phone: phone,
            age: age,
            gender: gender,
            residence: residence,
            areasOfInterest: areasOfInterest,
            education: education,
            communityExperience: communityExperience,
            communityExperienceDesc: communityExperienceDesc,
            purpose: purpose,
            skills: skills,
            connectionSite: connectionSite,
            otherConnectionSite: otherConnectionSite,
            conditionTerms: conditionTerms
        };
        try {
            const response = await addDoc(collection(db, 'ambassadors'), newAmb);
            Swal.fire({
                title: 'Success!',
                text: `Ambassador Registered Successfully. You will be updated on the next step`,
                icon: 'success',
                confirmButtonText: 'Back'
            });
            console.log('Ambassador Registered Successfully. ', response);
        } catch (e) {
            Swal.fire({
                title: 'Error!',
                text: `Failed. Please try again!!`,
                icon: 'error',
                confirmButtonText: 'Try'
            });
            console.error("Error adding Ambassador: " + e.message);
        }
    };

    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
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

    return (
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
            <div className="rn-service-area rn-section-gap bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--30">
                                <p>"See Everyone you Encounter As Something Positive To Offer, <br/>To Find Out What Is, And To Find Out Where Your Vision And Theirs Overlaps. That's What True Collaboration Looks Like." <i>~ Fred Swaniker</i></p>
                            </div>
                        </div>
                    </div>
                    <div className="about-inner inner">
                        <div className="section-title">
                            <p className="description">Become a cornerstone of NorthernBox's community-driven initiatives by joining our passionate team of ambassadors. These dedicated team is committed to nurturing a culture of learning, innovation, and collaboration in their respective regions. As ambassadors, they play a pivotal role in connecting communities, inspiring change, and shaping the future of NorthernBox. Join this dynamic force and be a catalyst for positive transformation in your region. Together, let's foster a culture where knowledge thrives, innovation blossoms, and collaboration knows no bounds. Elevate your impact – become a NorthernBox Ambassador today.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rn-service-area rn-section-gap bg_color--5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--30">
                                <h2 className="title">Ambassador Benefits</h2>
                            </div>
                        </div>
                        {items.map((item, key) =>{
                            return(
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={key}>
                                    <div className="single-service service__style--2 bg-color-gray">
                                        <a href="service-details.html">
                                            <div className="service">
                                                <div className="icon"></div>
                                                <div className="content">
                                                    <h3 className="title">{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 mb-20 ">
                <div className="relative">
                    <a href="#">
                        <img className="rounded-t-lg w-full h-60 opacity-80" src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1705246387/ian-schneider-TamMbr4okv4-unsplash_ubeoww.jpg" alt="" />
                    </a>
                </div>
                <form className="mt-4 m-5" onSubmit={addAmbassador}>
                    <p className="text-gray-900 text-4xl dark:text-gray-100 text-center mb-4">Ambassador Registration Form</p>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label htmlFor="fName" className="text-gray-700">First Name</label>
                            <input type="text" id="fName" value={fName} onChange={(e) => setFname(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="lName" className="text-gray-700">Last Name</label>
                            <input type="text" id="lName" value={lName} onChange={(e) => setLname(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-gray-700">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="text-gray-700">Phone</label>
                            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="age" className="text-gray-700">Age</label>
                            <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="gender" className="text-gray-700">Gender</label>
                            <input type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="residence" className="text-gray-700">Residence</label>
                            <input type="text" id="residence" value={residence} onChange={(e) => setResidence(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="education" className="text-gray-700">Education</label>
                            <input type="text" id="education" value={education} onChange={(e) => setEducation(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="communityExperience" className="text-gray-700">Community Experience</label>
                            <input type="text" id="communityExperience" value={communityExperience} onChange={(e) => setCommunityExperience(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="communityExperienceDesc" className="text-gray-700">Community Experience Description</label>
                            <input type="text" id="communityExperienceDesc" value={communityExperienceDesc} onChange={(e) => setCommunityExperienceDesc(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="purpose" className="text-gray-700">Purpose</label>
                            <input type="text" id="purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="areasOfInterest" className="text-gray-700">Areas of Interest</label>
                            <input type="text" id="areasOfInterest" value={areasOfInterest} onChange={(e) => setAreasOfInterest(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="skills" className="text-gray-700">Skills</label>
                            <input type="text" id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="connectionSite" className="text-gray-700">Connection Site</label>
                            <input type="text" id="connectionSite" value={connectionSite} onChange={(e) => setConnectionSite(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="otherConnectionSite" className="text-gray-700">Other Connection Site</label>
                            <input type="text" id="otherConnectionSite" value={otherConnectionSite} onChange={(e) => setOtherConnectionSite(e.target.value)} className="w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className="form-checkbox" onChange={(e) => setConditionTerms(e.target.checked)} />
                                <span className="ml-2 text-gray-700">I accept the terms and conditions</span>
                            </label>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AmbassadorReg;
