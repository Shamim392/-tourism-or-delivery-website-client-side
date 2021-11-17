import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import errorImg from '../../images/pageNotFound.jpg'


const NotFound = () => {
    return (
        <div>
            <div className="row d-lg-flex flex-row pt-5">
                <div className="col-lg-6 error-img d-flex flex-column justify-content-center  align-items-center">
                    <img  src={errorImg} alt="" />
                </div>

                <div className="container text-center col-lg-6  d-flex flex-wrap justify-content-center  align-items-center">
                    <div>
                        <h1 >Sorry Page Not found</h1>
                        <p className="text-center">We are extremely sorry to say that the page you are looking for is not found.You may entered a false link or this page is under construction. Please keep patience. </p>
                        <h3>Thanks for stay with us </h3>

                    </div>
                    <div className="pt-4">
                        <Link to="/"><Button variant="info">Go to Home</Button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotFound;