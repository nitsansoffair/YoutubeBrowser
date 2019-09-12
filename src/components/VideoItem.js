import './videoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    const  { snippet: { title, thumbnails: { medium:  { url } } } } = video;

    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img alt={title}
                 className="ui image"
                 src={url}
            />
            <div className="content">
                <div className="header">
                    {title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;