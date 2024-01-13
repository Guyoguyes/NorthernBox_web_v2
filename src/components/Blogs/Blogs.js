import React, {useState, useEffect} from 'react';

function Blogs(props) {


    const itemsPerPage = 4; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const [blogData, setBlogData] = useState([]);

    // Dummy JSON data
    const dummyData = [
        {
        id: 1,
        image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783275/create_an_image_0_mycdnn.png",
        category: "Development",
        title: "Getting tickets to the big show",
        link: "blogs/:id",
        },
        {
        id: 2,
        image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783275/create_an_image_0_mycdnn.png",
        category: "Development",
        title: "Another blog post",
        link: "blogs/:id",
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783275/create_an_image_0_mycdnn.png",
            category: "Development",
            title: "Another blog post",
            link: "blogs/:id",
            },
            {
                id: 2,
                image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783275/create_an_image_0_mycdnn.png",
                category: "Development",
                title: "Another blog post",
                link: "blogs/:id",
                },
                {
                    id: 2,
                    image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783275/create_an_image_0_mycdnn.png",
                    category: "Development",
                    title: "Another blog post",
                    link: "blogs/:id",
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
                            <h2 className="title">Latest News</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration.
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
                                    Read More
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
            {/* <!-- Start blog Area  --> */}

            {/* <!-- Start Blog Area  --> */}
            <div className="rn-blog-area rn-section-gap bg_color--5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title section-title--2  text-start mb--20">
                                <h2 className="title">Popular News</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row rn-slick-activation rn-slick-dot pb--25" data-slick-options='{
                                    "spaceBetween": 15, 
                                    "slidesToShow": 3, 
                                    "slidesToScroll": 1, 
                                    "arrows": false, 
                                    "infinite": true,
                                    "dots": true
                                }' data-slick-responsive='[
                                {"breakpoint":890, "settings": {"slidesToShow": 3}},
                                {"breakpoint":770, "settings": {"slidesToShow": 2}},
                                {"breakpoint":490, "settings": {"slidesToShow": 1}}
                                ]'>
                        {/* <!-- Start Blog Area  --> */}
                        <div className="blog blog-style--1">
                            <div className="thumbnail">
                                <a href="blogs/:id">
                                    <img className="w-100" src="assets/images/blog/blog-01.jpg" alt="Blog Images" />
                                </a>
                            </div>
                            <div className="content">
                                <p className="blogtype">Development</p>
                                <h4 className="title"><a href="blogs/:id">Getting tickets to the big show</a>
                                </h4>
                                <div className="blog-btn">
                                    <a className="rn-btn text-white" href="blogs/:id">Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Blog Area  --> */}

                        {/* <!-- Start Blog Area  --> */}
                        <div className="blog blog-style--1">
                            <div className="thumbnail">
                                <a href="blogs/:id">
                                    <img className="w-100" src="assets/images/blog/blog-02.jpg" alt="Blog Images" />
                                </a>
                            </div>
                            <div className="content">
                                <p className="blogtype">Development</p>
                                <h4 className="title"><a href="blogs/:id">Getting tickets to the big show</a>
                                </h4>
                                <div className="blog-btn">
                                    <a className="rn-btn text-white" href="blogs/:id">Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Blog Area  --> */}

                        {/* <!-- Start Blog Area  --> */}
                        <div className="blog blog-style--1">
                            <div className="thumbnail">
                                <a href="blogs/:id">
                                    <img className="w-100" src="assets/images/blog/blog-03.jpg" alt="Blog Images" />
                                </a>
                            </div>
                            <div className="content">
                                <p className="blogtype">Development</p>
                                <h4 className="title"><a href="blogs/:id">Getting tickets to the big show</a>
                                </h4>
                                <div className="blog-btn">
                                    <a className="rn-btn text-white" href="blogs/:id">Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Blog Area  --> */}

                        {/* <!-- Start Blog Area  --> */}
                        <div className="blog blog-style--1">
                            <div className="thumbnail">
                                <a href="blogs/:id">
                                    <img className="w-100" src="assets/images/blog/blog-04.jpg" alt="Blog Images" />
                                </a>
                            </div>
                            <div className="content">
                                <p className="blogtype">Development</p>
                                <h4 className="title"><a href="blogs/:id">Getting tickets to the big show</a>
                                </h4>
                                <div className="blog-btn">
                                    <a className="rn-btn text-white" href="blogs/:id">Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Blog Area  --> */}
                    </div>
                </div>
            </div>
            {/* <!-- End Blog Area  --> */}

            {/* <!-- Start Blog Area  --> */}
            <div className="rn-blog-area rn-section-gap bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title section-title--2  text-center mb--20 mb_sm--0 md_sm--0">
                                <h2 className="title">Related Post</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* <!-- Start Blog Area  --> */}
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="blog blog-style--1">
                                <div className="thumbnail">
                                    <a href="blogs/:id">
                                        <img className="w-100" src="assets/images/blog/blog-01.jpg" alt="Blog Images" />
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="blogtype">Development</p>
                                    <h4 className="title"><a href="blogs/:id">Getting tickets to the big show</a>
                                    </h4>
                                    <div className="blog-btn">
                                        <a className="rn-btn text-white" href="blogs/:id">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Blog Area  --> */}

                        {/* <!-- Start Blog Area  --> */}
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="blog blog-style--1">
                                <div className="thumbnail">
                                    <a href="blogs/:id">
                                        <img className="w-100" src="assets/images/blog/blog-02.jpg" alt="Blog Images" />
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="blogtype">Development</p>
                                    <h4 className="title"><a href="blogs/:id">Getting tickets to the big show</a>
                                    </h4>
                                    <div className="blog-btn">
                                        <a className="rn-btn text-white" href="blogs/:id">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Blog Area  --> */}

                        {/* <!-- Start Blog Area  --> */}
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="blog blog-style--1">
                                <div className="thumbnail">
                                    <a href="blogs/:id">
                                        <img className="w-100" src="assets/images/blog/blog-03.jpg" alt="Blog Images" />
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="blogtype">Development</p>
                                    <h4 className="title"><a href="blogs/:id">Getting tickets to the big show</a>
                                    </h4>
                                    <div className="blog-btn">
                                        <a className="rn-btn text-white" href="blogs/:id">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Blog Area  --> */}
                    </div>
                </div>
            </div>
            {/* <!-- End Blog Area  --> */}
        </main>
        </div>
    );
}

export default Blogs;