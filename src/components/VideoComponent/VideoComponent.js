import React from 'react';
import ReactPlayer from 'react-player';
import './VideoComponent.css'

const VideoComponent = () => {
    return (
        <div className="d-lg-flex video-TT">
            <div className="container my-auto">
                <h1 className="text-center title"> Travel With Travel Tour</h1>
                <div className="container pt-5 subtitle text-center">
                    <h4>Travel Tour is one of the finest and oldest tour management Group in Bangladesh. We offer our customers maximum security and maximum amount of comfort. We have several hosts who will try their best to host the tours very arrangly.</h4>
                </div>
            </div>
            <div className="container">
                <ReactPlayer width="100%" controls="true"
                    url="https://www.youtube.com/watch?v=b3B8NQCde4w"
                />
            </div>
        </div>
    );
};

export default VideoComponent;