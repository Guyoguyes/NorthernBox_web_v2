import React, {useState, useEffect} from 'react';

function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentYear(new Date().getFullYear());
        }, 1000); // Update every second to handle year change

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <footer class="bg-dark rounded-lg shadow m-4 dark:bg-gray-800">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-3  me-4 md:me-6">Copyright © {currentYear} <a href="home">NorthernBox</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/about" class="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li><a href="/membership" class="hover:underline me-4 md:me-6">Membership</a></li>
                    {/* <li><a href="" class="hover:underline me-4 md:me-6">Volunteer</a></li> */}
                    <li><a href="" class="hover:underline me-4 md:me-6">Let's Talk</a></li>
                    <li><a href="mailto:hi@northernbox.org" class="hover:underline me-4 md:me-6 sm:mt-5">hi@northernbox.org</a></li>
                    <li><a href="mailto:contact@northernbox.org" class="hover:underline me-4 md:me-6">contact@northernbox.org</a></li>
                </ul>
                    {/* <div className="" style={{outline: '1px solid red'}}> */}
                        <ul className="social-share social-style--2 d-flex justify-content-start liststyle  mt-3">
                            <li><a href="https://m.facebook.com/groups/2058420990978109/?ref=group_browse"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/northernbox/"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://twitter.com/NorthernBox_"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/northernboxcommunity/"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    {/* </div> */}
                </div>
                
            </footer>

        </>
        
    );
}

export default Footer;