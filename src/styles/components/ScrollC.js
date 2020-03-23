import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const ScrollC = () => {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: `rgb(255, 255, 255)`,
      borderRadius: "12px"
    };
    return (
      <div
        className='scroll-bar-thumb'
        style={{ ...style, ...thumbStyle }}
        {...props}
      />
    );
  };

  return (
    <div className='scroll-bar-c'>
      <Scrollbars renderThumbVertical={renderThumb} autoHeight>
        <h1>This is heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nam
          distinctio aspernatur delectus nihil tempore doloribus consectetur
          soluta iusto nobis illo, cum voluptas totam dolorem laudantium
          consequatur voluptates modi. Voluptatibus?
        </p>
        <h2>This is Heading 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          facilis hic assumenda voluptatem dolore mollitia impedit et odit
          quasi. Doloremque eum optio quod id omnis totam quam. Incidunt
          consequatur voluptatum magni, totam laborum laboriosam? Ipsam error
          nisi voluptatem, tempora optio nobis nulla eligendi similique dolorum.
          Odit quae eveniet laborum perferendis?
        </p>
        <h1>This is heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nam
          distinctio aspernatur delectus nihil tempore doloribus consectetur
          soluta iusto nobis illo, cum voluptas totam dolorem laudantium
          consequatur voluptates modi. Voluptatibus?
        </p>
        <h2>This is Heading 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          facilis hic assumenda voluptatem dolore mollitia impedit et odit
          quasi. Doloremque eum optio quod id omnis totam quam. Incidunt
          consequatur voluptatum magni, totam laborum laboriosam? Ipsam error
          nisi voluptatem, tempora optio nobis nulla eligendi similique dolorum.
          Odit quae eveniet laborum perferendis?
        </p>
      </Scrollbars>
    </div>
  );
};

export default ScrollC;
