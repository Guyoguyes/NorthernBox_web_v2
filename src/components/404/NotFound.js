import React from "react"

const NotFound = () =>{
    return(
        <>
        <div class="error-page-inner bg_color--4" style={{marginBottom: '40px'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="inner">
                                <h1 class="title theme-gradient">404!</h1>
                                <h3 class="sub-title">Page not found</h3><span>The page you were looking for could not
                                    be found.</span>
                                <div class="error-button">
                                    <a class="rn-button-style--2 btn_solid" href="https://northernbox.org/">Back To Homepage</a>
                                </div>
                            </div>
                            <img src="assets/images/bg/oops.png" style={{transform: 'rotate(-44.79deg)'}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound