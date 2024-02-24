import React, {useState, useRef} from "react";
import './wave.css'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'


function NBCWave(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [ subject1, setSubject1] = useState()
    const [ message1, setMessage] = useState()

    const [activeTab, setActiveTab] = useState("personalInformation");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    age: "",
    location: "",
    education:"",
    codingExperience: "",
    programmingLanguages: [],
    codingProjects: [],
    areasOfInterest: [],
    goals: "",
    mentorExpectations: "",
    availability: "",
    challenges: "",
    additionalInfo: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
        ? [...prevData[name], e.target.value]
        : prevData[name].filter((value) => value !== e.target.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    console.log(formData);
  };

    const items = [
        {
            icon: '',
            title: 'Mentorship',
            description: 'Gain access to experienced mentors who will provide guidance, support, and personalized advice as you navigate your coding journey. Benefit from their expertise, learn industry best practices, and receive valuable insights to accelerate your learning.'
        }, {
            icon: '',
            title: 'Community Engagement',
            description: 'Connect with a vibrant community of like-minded beginners who share your passion for coding. Engage in pair programming sessions, collaborate on projects, and learn from each other`s experiences. Build lasting connections, find inspiration, and surround yourself with a supportive network.'
        }, {
            icon: '',
            title: 'Interactive Learning Resources',
            description: 'Access a wide range of learning materials, coding exercises, and real-world projects tailored to beginners. Expand your knowledge, practice your skills, and gain hands-on experience through interactive tools and resources.'
        }, {
            icon: '',
            title: 'Confidence Building',
            description: 'Gain the confidence you need to pursue your software development goals. Through mentorship, collaborative learning, and continuous practice, you`ll build a solid foundation in coding and develop the skills to tackle challenges with confidence. As you progress, you`ll become more proficient and ready to take on more advanced coding projects.'
        }, {
            icon: '',
            title: 'Career Opportunities',
            description: 'By joining Coding Wave, you`ll be equipped with the skills and knowledge sought after in the software development industry. As you grow and refine your coding abilities, you`ll unlock exciting career opportunities in web development, app development, data science, and more. Coding Wave sets you on a path towards a fulfilling and in-demand career.'
        }, {
            icon: '',
            title: 'Personal Growth',
            description: 'Engaging in software development and being part of Coding Wave will foster personal growth and self-improvement. As you overcome coding challenges, acquire new skills, and work collaboratively with others, you`ll develop problem-solving abilities, critical thinking skills, and resilience. These qualities extend beyond coding and contribute to your overall personal and professional development.'
        },
    ]


    // The state for our timer
    // const [timer, setTimer] = useState('00:00:00');
    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    //
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    //
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = "2023",
        dayMonth = "09/21/",
        launchDate = dayMonth + yyyy;
    //
    today = mm + "/" + dd + "/" + yyyy;
    if (today > launchDate) {
        launchDate = dayMonth + nextYear;
    }
    const countDown = new Date(launchDate).getTime(),
        x = setInterval(function() {

        const now = new Date().getTime(),
            distance = countDown - now;


        setDays(Math.floor(distance / (day)))
        setHours(Math.floor((distance % (day)) / (hour)))
        setMinutes(Math.floor((distance % (hour)) / (minute)))
        setSeconds(Math.floor((distance % (minute)) / second))

    })




    return(
        <>
            <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6" style={{backgroundImage:'url(assets/images/bg/wave.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor:'#212121'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                                <h2 className="title" style={{fontSize: '72px'}}>CODE WAVE</h2>
                                <ul className="page-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="current-page">Wave</li>
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
                                <h2>Intro to code Wave</h2>
                                <p>"See Everyone you Encounter As Something Positive To Offer, <br/>To Find Out What Is, And To Find Out Where Your Vision And Theirs Overlaps. That's What True Collaboration Looks Like." <i>~ Fred Swaniker</i></p>
                            </div>
                        </div>
                    </div>
                    <div className="about-inner inner">
                                <div className="section-title">
                                    {/* <h2 className="title">Who are we</h2> */}
                                    <p className="description">Coding Wave is your gateway to seamless learning and collaboration in software development. Our program connects aspiring developers with experienced mentors who will guide you through your coding journey, providing invaluable insights, personalized advice, and hands-on support. Whether you're starting from scratch or looking to enhance your existing skills, our mentors are here to help you navigate the vast ocean of coding knowledge.</p>
                                </div>
                                <div className="row mt--30 mt_sm--10">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="about-us-list">
                                            {/* <h3 className="title">Our Mission</h3> */}
                                            <p>With Coding Wave, access to learning resources, coding exercises, and real-world projects is at your fingertips. Take advantage of our platform's interactive features and create meaningful connections with mentors and peers. Whether you aspire to build web applications, create mobile apps, or delve into data science, Coding Wave provides the foundation you need to embark on your coding journey with confidence.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="about-us-list">
                                            {/* <h3 className="title">Our Approach</h3> */}
                                            <p>Join us as we dive into the world of software development and ride the Coding Wave. Together, we'll unlock the possibilities of coding and chart a course towards success. Don't miss this opportunity to connect, learn, and grow in a supportive and collaborative environment. Get ready to ride the coding wave and shape your future in software development!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            <div class="rn-service-area rn-section-gap bg_color--5">
                <div class="container">
                <div class="row">
                <div class="col-lg-12">
                            <div class="section-title text-center mb--30">
                                <h2 class="title">Code Wave Benefits</h2>
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
            <div className="contact-form--1" style={{marginTop: '50px'}}>
            <div className="">
                            <div className="row row--35 align-items-center" style={{width: '70vw', margin: '0 auto'}}>
                                   
                                    <div className="mx-auto  bg-white rounded shadow" style={{width: '70vw', margin: '0 auto'}}>
                                    <h2 className="title">Join Code Wave.</h2>
                                        <p className="description">Fill all required Fields *
                                        </p> 

      <div className="flex">
        <button
          className={`px-4 py-2 rounded-tl rounded-bl ${
            activeTab === "personalInformation"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => handleTabChange("personalInformation")}
        >
          Personal Information
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "codingExperience"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => handleTabChange("codingExperience")}
        >
          Coding Experience
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "areasOfInterest"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => handleTabChange("areasOfInterest")}
        >
          Areas Of Interest
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "goalsAndExpectations"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => handleTabChange("goalsAndExpectations")}
        >
          Goals and Expectations
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "additionalInformation"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => handleTabChange("additionalInformation")}
        >
          Additional Information
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "codeOfConduct"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => handleTabChange("codeOfConduct")}
        >
          Code of Conduct Agreement
        </button>
        {/* Add more buttons for additional tabs */}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Information Tab */}
        {activeTab === "personalInformation" && (
          <div>
            <label className="block mb-4">
              Full Name:
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label> <label className="block mb-4">
              Email:
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label> <label className="block mb-4">
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.contactNumber}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label> <label className="block mb-4">
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label> <label className="block mb-4">
              Highest Level of Education:
              <input
                type="text"
                name="Education"
                value={formData.education}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label>
            {/* Add more fields for personal information */}
          </div>
        )}

        {/* Coding Experience Tab */}
        {activeTab === "codingExperience" && (
          <div>
            <label className="block mb-4">
            What is your current level of coding experience?
              <input
                type="text"
                name="location"
                value={formData.codingExperience}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label><label className="block mb-4">
            Which programming languages are you familiar with?
              <input
                type="text"
                name="Programming Languages and Tools"
                value={formData.programmingLanguages}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label><label className="block mb-4">
            Have you worked on any coding projects before?
              <input
                type="text"
                name="location"
                value={formData.codingProjects}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label>
            <label className="block mb-4">
            If yes, please provide brief details.
              <input
                type="text"
                name="location"
                value={formData.codingProjects}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label>
            {/* Add more fields for coding experience */}
          </div>
        )}
        {activeTab === "areasOfInterest" && (
             <div>
             <label className="block mb-4">
             What specific areas of software development are you interested in?
               <input
                 type="text"
                 name="fullName"
                 value={formData.fullName}
                 onChange={handleChange}
                 className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
               />
             </label>
             <label className="block mb-4">
             Are there any particular technologies or frameworks you would like to learn or explore?
               <input
                 type="text"
                 name="fullName"
                 value={formData.fullName}
                 onChange={handleChange}
                 className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
               />
             </label>

             </div>
        )}

        {activeTab === "goalsAndExpectations" && (
            <div>
            <label className="block mb-4">
            What are your goals or objectives in joining Code Wave?
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label>
            <label className="block mb-4">
            What do you hope to achieve or gain from the mentorship program?
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label>
            <label className="block mb-4">
            Do you have any specific expectations or preferences for a mentor?
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label>

            </div>
        )}

        {activeTab === "additionalInformation" && (
            <div>
            <label className="block mb-4">
            Do you have any specific challenges or areas where you would like assistance or support?
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label>
            <label className="block mb-4">
            Is there anything else you would like us to know about you or your coding journey?
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
              />
            </label>

            </div>
        )}

        {/* Add more sections for additional tabs */}

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
                                
                            </div>
                        </div>
            </div>
            

    

        </>
    )
}

export default NBCWave