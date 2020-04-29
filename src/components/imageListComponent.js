import React from "react";

function ImageListComponent({ imageList }) {
  console.log(imageList);

  return (
    <div className="project-detail-content">
      <h3>更多照片</h3>
      <div className="flex flex-wrap justify-start mt-12 mb-12">
      {imageList.map((item) => (
        <div class="mx-auto mb-4 w-2/3 sm:w-5/12 md:w-30p rounded overflow-hidden shadow-lg">
          <a href={item + ".jpg"}>
            <img class="w-full"
                 src={item + "-small.jpg"}
                 alt="Sunset in the mountains" />
          </a>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ImageListComponent;
