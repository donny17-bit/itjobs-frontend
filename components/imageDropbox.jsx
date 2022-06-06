import React from "react";

function ImageDropbox({ image }) {
  return (
    <div>
      <img alt="" src={image.src} />
    </div>
  );
}
export default ImageDropbox;
