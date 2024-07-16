import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faHeart,
  faMagnifyingGlass,
  faCartShopping,
  fa0
} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-1">
        <p>Free Shipping for orders over $50</p>
        <div className="list">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Call Us 123-456-789</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-2">
        <div className="search-bar-div">
          <h3>TechShed</h3>
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-bar" />
            <div className="side-search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
            </div>
          </div>
        </div>
        <div className="user-div">
          <FontAwesomeIcon 
            icon={faCircleUser} 
            style={{ marginRight: "10px", cursor:"pointer", height:"20px", width:"20px" }}
          />
          <p style={{ margin: "0 10px" }}>Log In</p>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ marginLeft: "10px", marginRight: "10px", cursor:"pointer",height:"20px", width:"20px"  }}
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ marginLeft: "10px", cursor:"pointer",height:"20px", width:"20px"  }}
          />
          <FontAwesomeIcon
            icon={fa0}
            style={{ marginLeft: "2px", cursor:"pointer",height:"12px", width:"12px"  }}
          />
        </div>
      </div>
      <div className="nav-3">
        <ul>
          <li>
            <a href="#">Shop All</a>
          </li>
          <li>
            <a href="#">Computers</a>
          </li>
          <li>
            <a href="#">Tablets</a>
          </li>
          <li>
            <a href="#">Drones & Cameras</a>
          </li>
          <li>
            <a href="#">Audio</a>
          </li>
          <li>
            <a href="#">Mobile</a>
          </li>
          <li>
            <a href="#">T.V & Home Cinema</a>
          </li>
          <li>
            <a href="#">Wearable Tech</a>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
