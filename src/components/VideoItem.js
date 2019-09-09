import React from 'react';
import '../CSS/VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) =>
{
    return (
        <div 
            onClick={() => onVideoSelect(video)} 
            className="item">

            <a className="ui small image">
                <img 
                    className="ui image" 
                    src = { video.snippet.thumbnails.medium.url } 
                    alt={ video.snippet.title }
                />
            </a>

            <div className="content">
                <a className="header"> { video.snippet.title } </a>
                <div className="description">
                    <p> { video.snippet.description } </p>
                </div>
            </div>

        </div>);
}

export default VideoItem;
