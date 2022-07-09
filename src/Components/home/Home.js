import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../home/style/home.css";
import img1 from "../../Assets/Images/carousel-img1.png";
import img2 from "../../Assets/Images/carousel-img2.png";
import img3 from "../../Assets/Images/carousel-img3.png";

const Home = () => {
  return (
    <main className="container home">
      <div className="home-left">
        <p className="home-header">Lorem ipsum </p>
        <div className="home-text-con">
        <p className="home-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className="carousel-con">
      <Carousel autoPlay
      infiniteLoop
      showArrows={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = { marginLeft: 20, color: "transparent", cursor: "pointer", width: "15px", height: "15px", borderRadius: "100%", padding: "6px", fontSize : "1px"
      };
        const style = isSelected
          ? { ...defStyle, backgroundColor: "#559F94" }
          : { ...defStyle, backgroundColor: "#C4C4C4" };
        return (
            <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            {index}
          </span>
        );
      }}>
          <div>
            <img src={img1} alt="#" />
          </div>
          <div>
            <img src={img2} alt="#" />
          </div>
          <div>
            <img src={img3} alt="#" />
          </div>
        </Carousel>
      </div>
    </main>
  );
};

export default Home;
