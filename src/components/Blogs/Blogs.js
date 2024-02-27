import React, {useState, useEffect} from 'react';

function Blogs(props) {


    const itemsPerPage = 6; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const [blogData, setBlogData] = useState([]);

    // Dummy JSON data
    const dummyData = [
        {
        id: 1,
        image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783788/I_am_from_north_1_dtcv4y.png",
        category: "Development",
        title: "Revolutionizing Northern Kenya's STEM Landscape",
        link: "com_soon",
        },
        {
        id: 2,
        image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1705077199/image0_0_ag1okr.jpg",
        category: "Community Engagement",
        title: "Empowering Youth: Bridging the Digital Divide in Northern Kenya",
        link: "com_soon",
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783274/create_me_an_im_1_pvqmnp.png",
            category: "Career Growth",
            title: "Unlocking New Opportunities: How Data Skills Can Propel Your Career",
            link: "com_soon",
            },
            {
                id: 4,
                image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1709072861/image1_0_t7zya4.jpg",
                category: "Sustainable Development",
                title: "Tech Solutions for a Sustainable Future: Innovating for Environmental Impact",
                link: "com_soon",
                },
                {
                    id: 5,
                    image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1705077199/image1_0_tcmip9.jpg",
                    category: "Education and Training",
                    title: "Beyond the Classroom: How Online Learning is Reshaping Education in Remote Areas",
                    link: "com_soon",
                    },
                    {
                        id: 6,
                        image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783788/I_am_from_north_1_dtcv4y.png",
                        category: "Development",
                        title: "Revolutionizing Northern Kenya's STEM Landscape",
                        link: "com_soon",
                        },
                        
        // Add more dummy blog items as needed
    ];

    useEffect(() => {
        setBlogData(dummyData);
    }, []); // Empty dependency array to run the effect only once

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = blogData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                            <h2 className="title">Blog</h2>
                            <ul className="page-list">
                                <li><a href="index.html">Home</a></li>
                                <li className="current-page">Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Breadcrump Area  --> */}
        <main className="page-wrapper">
            {/* <!-- Start blog Area  --> */}
            <div className="rn-blog-area rn-section-gap bg_color--1">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title section-title--2 text-center">
                            <h2 className="title">Latest Blogs</h2>
                            <p>
                            Embark on a digital odyssey with NorthernBox, where every blog post is a compass guiding our community through the landscapes of knowledge and inspiration.
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="row mt--20">
                        
                        {currentItems.map((item) => (
                            
                            <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <a href={item.link}>
                            <div className="blog blog-style--1">
                                <div className="thumbnail">
                                <a href={item.link}>
                                    <img className="w-100" src={item.image} alt="Blog Images" />
                                </a>
                                </div>
                                <div className="content">
                                <p className="blogtype">{item.category}</p>
                                <h4 className="title">
                                    <a href={item.link}>{item.title}</a>
                                </h4>
                                <div className="blog-btn">
                                    <a className="rn-btn text-white" href={item.link}>
                                    Read More
                                    </a>
                                </div>
                                </div>
                            </div>
                            </a>
                            </div>
                            
                            
                        ))}
                        </div>

                        <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-pagination text-center mt--60 mt_sm--30">
                            <ul className="page-list">
                                {Array.from({ length: Math.ceil(blogData.length / itemsPerPage) }, (_, index) => (
                                <li key={index} className={currentPage === index + 1 ? "active" : ""}>
                                    <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                                </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            {/* <!-- Start blog Area  --> */}


        </main>
        </div>
    );
}

export default Blogs;