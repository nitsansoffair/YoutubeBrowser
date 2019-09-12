import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        const { id: { videoId } } = video;

        return <VideoItem
            key={videoId}
            onVideoSelect={onVideoSelect}
            className="ui relaxed divided list"
            video={video}
        />;
    });

    return <div>{renderedList}</div>;
};

export default VideoList;