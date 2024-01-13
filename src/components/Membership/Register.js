import React, { useState } from "react";
import { Tab, initTE } from "tw-elements";

function MemberShipRegistration() {
  const [activeTab, setActiveTab] = useState("tabs-home01");
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

  

  return (
    <>
      <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6" style={{ backgroundImage: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1686429267/800px-Mt._Ololokwe_Samburu_awr1i1.jpg' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                <h2 className="title" style={{ fontSize: '72px' }}>Become A Member</h2>
                <ul className="page-list">
                  <li><a href="home">Home</a></li>
                  <li className="current-page">Membership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <main className="page-wrapper"> */}
        
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 mb-20 ">
            {/* <a href="#">
                <img className="rounded-t-lg w-full h-60 opacity-80" src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1686430339/IMG_8657_yolykv.jpg" alt="" />
            </a> */}

            <div className="relative">
                <a href="#">
                    <img className="rounded-t-lg w-full h-60 opacity-80" src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1686430339/IMG_8657_yolykv.jpg" alt="" />
                </a>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img className="rounded-full" src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1697296240/NorthernBox_Logo-1_kabjwb-removebg-preview_yixpzn.png" alt="" />
                </div>
            </div>


            <form className="mt-4 m-5">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-transparent border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
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
                            value={selectedOption}
                            onChange={handleSelectChange}
                            required
                        >
                            <option value="" disabled>Select an email option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="none">Prefer not to say</option>
                        </select>
                    </div>


                    <div >
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Gender</label>
                        <select
                            id="gender"
                            className={`bg-transparent border border-blue-500 ${selectedOption ? 'text-black' : 'text-gray-500'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            value={selectedOption}
                            onChange={handleSelectChange}
                            required
                        >
                            <option value="" disabled>Select an email option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="none">Prefer not to say</option>
                        </select>
                    </div>
                    
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">County of Residence</label>
                    <select
                        id="email"
                        className={`bg-transparent border border-blue-500 ${selectedOption ? 'text-black' : 'text-gray-500'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        value={selectedOption}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="" disabled>Select an email option</option>
                        <option value="john.doe@company.com">john.doe@company.com</option>
                        <option value="jane.smith@company.com">jane.smith@company.com</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Areas Of Interest / Specialization</label>
                    <select
                        id="email"
                        className={`bg-transparent border border-blue-500 ${selectedOption ? 'text-black' : 'text-gray-500'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        value={selectedOption}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="" disabled>Select an email option</option>
                        <option value="john.doe@company.com">john.doe@company.com</option>
                        <option value="jane.smith@company.com">jane.smith@company.com</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Level of Education</label>
                    <select
                        id="email"
                        className={`bg-transparent border border-blue-500 ${selectedOption ? 'text-black' : 'text-gray-500'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        value={selectedOption}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="" disabled>Select an email option</option>
                        <option value="john.doe@company.com">john.doe@company.com</option>
                        <option value="jane.smith@company.com">jane.smith@company.com</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">How Did You Hear About Us </label>
                    <select
                        id="email"
                        className={`bg-transparent border border-blue-500 ${selectedOption ? 'text-black' : 'text-gray-500'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        value={selectedOption}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="" disabled>Select an email option</option>
                        <option value="john.doe@company.com">john.doe@company.com</option>
                        <option value="jane.smith@company.com">jane.smith@company.com</option>
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
                            required
                        />
                </div>

                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
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

      {/* </main> */}
    </>
  );
}



export default MemberShipRegistration;
