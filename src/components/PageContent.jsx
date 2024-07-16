import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';
import "./PageLayout.css"; // Ensure to import the CSS file

function PageContent({
  img,
  info,
  oldprice,
  newprice,
  rating,
  sale,
  totalrate,
}) {
  const renderStars = (rating) => {
    return (
      <>
        {[1, 2, 3, 4, 5].map((star) => {
          if (rating >= star) {
            return (
              <FontAwesomeIcon
                key={star}
                icon={faStar}
                className="star"
                style={{ color: "blue", fontSize: "15px" }}
              />
            );
          } else if (rating >= star - 0.5) {
            return (
              <FontAwesomeIcon
                key={star}
                icon={faStarHalfAlt}
                className="star"
                style={{ color: "blue", fontSize: "15px" }}
              />
            );
          } else {
            return (
              <FontAwesomeIcon
                key={star}
                icon={faStarEmpty}
                className="star"
                style={{ color: "gray", fontSize: "15px" }}
              />
            );
          }
        })}
      </>
    );
  };

  return (
    <div className="single-product">
      {sale && <div className="sale-badge">SALE</div>}
      <div className="product-img">
        <img src={img} alt="product" />
      </div>
      <div className="product-content">
        <h3>{info}</h3>
        <div className="price-container">
        {oldprice && <p className="product-price old-price">${oldprice}</p>}
        {newprice && <p className="product-price">${newprice}</p>}
        </div>
        <div className="rating-container">
          {rating && renderStars(rating)}
          {rating && <span className="rating-number">{rating}</span>}
          {totalrate && <span className="total-rate">({totalrate})</span>}
        </div>
      </div>
    </div>
  );
}

export default PageContent;
