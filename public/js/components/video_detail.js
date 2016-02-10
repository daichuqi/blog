import React from 'react'

var textStyle = {
  'fontWeight': 'bold'
};

const VideoDetail = ({video}) =>{
  if(!video){
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  // const url = 'https://www.youtube.com/embed/' + videoId;
  return (
    <div className="video-detail col-md-8">
      <div className = "embed-responsive embed-responsive-16by9">
      </div>
      <div className="details">
        <div style={textStyle}>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}
export default VideoDetail