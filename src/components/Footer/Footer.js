import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12">
                                <div className=" border_top1"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h3>Quick links</h3>
                                <ul className="link_menu">
                                    <Link to='/'><li><a href="#">Home</a></li>
                                    </Link>
                                    <Link to='/events'> <li><a href="events">Events</a></li></Link>
                                    <li><a href="#"> About Us</a></li>
                                    <li><a href="#">Our Goals</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 offset-md-lg-2 col-md-4 offset-md-1">
                                <h3>Contact US</h3>
                                <ul className="social-link">
                                    <li><i className="fa fa-map-marker" aria-hidden="true"></i> Cox's Bazar</li>
                                    <li><i className="fa fa-envelope" aria-hidden="true"></i> TTadmin@gmail.com</li>
                                    <li><i className="fa fa-mobile" aria-hidden="true"></i>  +8801771917392</li>
                                </ul>
                            </div>
                            <div className=" col-md-3">
                                <h3>Travel The World</h3>
                                <p className="htt-slogan">
                                    The world is waiting for you. Good Luck. Travel Safe. Go!
                                    Once the travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <p className="text-warning fw-bold"> © SHAMIM || Programming Hero 2021</p>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;