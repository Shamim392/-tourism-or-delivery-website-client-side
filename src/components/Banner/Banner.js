import React from 'react';
import './Banner.css'
import bannerImg from '../../images/bannerImg.jpg'
const Banner = () => {
    return (
        <div>
            <div className="container col-lg-12 d-lg-flex py-5 banner">
                <div className="col-lg-5 py-4 ps-2 my-auto">
                    <h1 className="mb-3">Travel Tour</h1>
                    <h2 className="mb-3 text-success">A Tour Management Company</h2>
                    <h3>“Do not follow where the path may lead. Go instead where there is no path and leave a trail”  <span className="text-success"> ~ Ralph Waldo Emerson</span></h3>
                </div>

                <div className="my-auto col-lg-6">
                    <img className="img-fluid" src={bannerImg} alt="" srcset="" /> 
                </div>
            </div>
        </div>
    );
};
export default Banner;