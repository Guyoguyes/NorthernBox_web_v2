import React, {useState, useEffect} from 'react';

function Events(props) {

    const itemsPerPage = 4; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const [blogData, setBlogData] = useState([]);

    // Dummy JSON data
    const dummyData = [
        {
        id: 1,
        image: "assets/images/portfolio/Fqr4kFnWYAEFeLv.jpeg",
        category: "Women in Tech",
        title: "International Women`s Day",
        link: "com_soon",
        },
        {
        id: 2,
        image: "assets/images/portfolio/FqR1eGhWwAEvUWR.jpeg",
        category: "Women in Tech",
        title: "International Women`s Day",
        link: "com_soon",
        },
        {
            id: 2,
            image: "assets/images/portfolio/Fifj16yXwAQSWzG.jpeg",
            category: "N.E Innovation Week",
            title: "International Women`s Day",
            link: "com_soon",
            },
            {
                id: 2,
                image: "assets/images/portfolio/meet3.jpg",
                category: "Development",
                title: "Another blog post",
                link: "com_soon",
                },
                {
                    id: 2,
                    image: "assets/images/portfolio/meet2.png",
                    category: "Development",
                    title: "Another blog post",
                    link: "com_soon",
                    },
                    {
                        id: 2,
                        image: "assets/images/portfolio/meet1.png",
                        category: "Development",
                        title: "Another blog post",
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
            {/*// <!-- Start Breadcrump Area  -->*/}
            <div class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6" style={{backgroundImage:'url(assets/images/bg/NBCwave.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                                <h2 class="title" style={{fontSize: '72px'}}>Upcoming Events</h2>
                                <ul class="page-list">
                                    <li><a href="home">Home</a></li>
                                    <li class="current-page">Events</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*// <!-- End Breadcrump Area  -->*/}
            {/*// <!-- Start Page Wrapper  -->*/}
            <main class="page-wrapper">

            <div className="rn-blog-area rn-section-gap bg_color--1">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title section-title--2 text-center">
                            <h2 className="title">Upcoming Events</h2>
                            {/* <hr/> */}
                            <p>
                            Dive into a sea of knowledge and discovery on our Events. Every event is a beacon, illuminating the path to innovation and collaboration in our vibrant community. 
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="row mt--20">
                        {currentItems.map((item) => (
                            <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
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
                                    More Details
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>

                        
                    </div>
                    </div>

            <div className="rn-blog-area rn-section-gap bg_color--1">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title section-title--2 text-center">
                            <h2 className="title">Passed Events</h2>
                            {/* <p>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration.
                            </p> */}
                            </div>
                        </div>
                        </div>

                        <div className="row mt--20">
                        {currentItems.map((item) => (
                            <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
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
                                    More Details
                                    </a>
                                </div>
                                </div>
                            </div>
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

               
            </main>
        </div>
    );
}

export default Events;