import React from 'react';

function Funfact() {
    return (
        <div className="rn-counterup-area pt--25 pb--110 bg_color--1" style={{backgroundImage: 'url(assets/images/bg/funfact1.png)',
            backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',backgroundColor: '#014A75',
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h3 className="fontWeight500" style={{color: '#fefefe'}}>Our Fun Facts</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/*// <!-- Start Single Counterup  -->*/}
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="rn-counterup counterup_style--1">
                            <h5 className="counter count" style={{color: '#fefefe'}}>250</h5>
                            <p className="description" style={{color: '#fefefe'}}>Total Members.</p>
                        </div>
                    </div>
                    {/*// <!-- Start Single Counterup  -->*/}
                    {/*//*/}
                    {/*// <!-- Start Single Counterup  -->*/}
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="rn-counterup counterup_style--1">
                            <h5 className="counter count" style={{color: '#fefefe'}}>33</h5>
                            <p className="description" style={{color: '#fefefe'}}>Skilled and Exprienced Members.</p>
                        </div>
                    </div>
                    {/*// <!-- Start Single Counterup  -->*/}
                    {/*//*/}
                    {/*// <!-- Start Single Counterup  -->*/}
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="rn-counterup counterup_style--1">
                            <h5 className="counter count" style={{color: '#fefefe'}}>5</h5>
                            <p className="description" style={{color: '#fefefe'}}>Nortern Counties we cover</p>
                        </div>
                    </div>
                    {/*// <!-- Start Single Counterup  -->*/}
                </div>
            </div>
        </div>
    );
}

export default Funfact;