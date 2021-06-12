import React from "react";
const loadingImg = "https://i.postimg.cc/bw91c2hX/preloader.gif";

const Loading = () => (
  <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
