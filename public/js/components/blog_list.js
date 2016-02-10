import React from 'react';
import VideoListItem from './blog_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map((video)=>{
    return (
      <VideoListItem key={video._id} video={video} />
    )
  });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};


export default VideoList;