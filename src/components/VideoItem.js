import React from "react";
import "../CSS/VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className="item">
			<div className="ui small image">
				<img
					className="ui image"
					src={video.snippet.thumbnails.medium.url}
					alt={video.snippet.title}
				/>
			</div>

			<div className="content">
				<div className="header"> {video.snippet.title} </div>
				<div className="description">
					<p> {video.snippet.description} </p>
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
