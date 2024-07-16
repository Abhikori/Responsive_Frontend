import React from "react";
import Slider from "react-slick";
import PageContent from "./PageContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PageLayout.css"; 

// Custom Left Arrow
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-15px", zIndex: 1 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} style={{ color: "black", fontSize: "24px" }} />
    </div>
  );
};

// Custom Right Arrow
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-15px", zIndex: 1 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} style={{ color: "black", fontSize: "24px" }} />
    </div>
  );
};

function PageLayout() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="main-div">
      <h1>Best Seller</h1>
      <div className="content-div">
        <Slider {...settings}>
          <div className="content">
            <PageContent
              img={`src/assets/LED1.png`}
              info={'Shell 50" Class LED 4K UHD Smart TV'}
              oldprice={null}
              newprice={85.00}
              rating={4.5}
              sale={false}
              totalrate={6}
            />
          </div>
          <div className="content">
            <PageContent
              img={`src/assets/Watch.png`}
              info={'Fitboot Inspire Fitness Tracker With Heart Rate Tracking'}
              oldprice={85.0}
              newprice={70.0}
              rating={4.5}
              sale={true}
              totalrate={14}
            />
          </div>
          <div className="content">
            <PageContent
              img={`src/assets/Phone.png`}
              info={'Smartphone Z Pixel Max 128GB Unlocked'}
              oldprice={85.0}
              newprice={70.0}
              rating={null}
              sale={true}
              totalrate={null}
            />
          </div>
          <div className="content">
            <PageContent
              img={`src/assets/LED2.png`}
              info={'65" Class Nano LED 4K UHD Smart TV'}
              oldprice={85.0}
              newprice={70.0}
              rating={4.3}
              sale={true}
              totalrate={12}
            />
          </div>
          <div className="content">
            <PageContent
              img={`src/assets/Earbud.png`}
              info={'White Buds Wireless Earbud'}
              oldprice={null}
              newprice={85.0}
              rating={4.8}
              sale={false}
              totalrate={4}
            />
          </div>
          <div className="content">
            <PageContent
              img={`src/assets/Speaker.png`}
              info={'SDK Portable Bluetooth Speaker'}
              oldprice={null}
              newprice={85.0}
              rating={4.7}
              sale={false}
              totalrate={3}
            />
          </div>
          <div className="content">
            <PageContent
              img={`src/assets/Camera.png`}
              info={'Megapixel Waterproof Mini Digital Camera'}
              oldprice={85.0}
              newprice={70.0}
              rating={5.0}
              sale={true}
              totalrate={1}
            />
          </div>
          <div className="content">
            <PageContent
              img={`src/assets/Drone.png`}
              info={'HKI Tech Quadcopter Drone With 360 Camera & Controller'}
              oldprice={null}
              newprice={70.0}
              rating={null}
              sale={false}
              totalrate={null}
            />
          </div>
          <div className="content">
            <PageContent
              img={`src/assets/Laptop.png`}
              info={'JP Gaming Laptop 15.6" Laptop 256GB'}
              oldprice={85.0}
              newprice={70.0}
              rating={3.9}
              sale={true}
              totalrate={9}
            />
          </div>
          <div className="content">
            <PageContent
              img={`src/assets/Wireless_earbuds.png`}
              info={'In-ear Noise Cancelling & Isolating Wireless Earbuds'}
              oldprice={85.0}
              newprice={70.0}
              rating={4.6}
              sale={true}
              totalrate={11}
            />
          </div>
          <div className="content">
            <PageContent
              img={`src/assets/Tablet.png`}
              info={'JP - space Tablet 10.4" Wi-Fi 32GB'}
              oldprice={85.0}
              newprice={70.0}
              rating={null}
              sale={true}
              totalrate={null}
            />
          </div>
          <div className="content">
            <PageContent
              img={`src/assets/Tablet2.png`}
              info={'Ocean Pro 11 Screen- 12.3" Touch'}
              oldprice={85.0}
              newprice={70.0}
              rating={4.6}
              sale={true}
              totalrate={5}
            />
          </div>
        </Slider>
      </div>
      <button className="view-all-btn">View All</button>
    </div>
  );
}

export default PageLayout;
