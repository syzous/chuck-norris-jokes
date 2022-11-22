import { useState } from "react";
import Container from "../Container";
import "./styles.scss";

function NavigationBar() {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <div className="navigation-bar">
      <div className="flex-end">
        <span className="navigation-menu-container">
          <div className="navigation-menu">SO FUNKTIONIERT'S</div>
        </span>
        <span className="navigation-menu-container">
          <div className="navigation-menu">SONDERANGEBOTE</div>
        </span>
        <span className="navigation-menu-dropdown-container">
          <div className="center">
            <img
              className="padding-right-8"
              alt="shape"
              src="/assets/assets_Homework_Front-End_01/shape.png"
            />
            <span>MEIN BEREICH</span>
            <img
              onClick={() => setIsExpand((prev) => !prev)}
              className="padding-left-16"
              alt="arrow-down"
              src="/assets/assets_Homework_Front-End_01/path_2.png"
            />
          </div>
          {isExpand && (
            <div className="navigation-menu-dropdown-expansion">
              <div>My published jokes</div>
              <div className="line"></div>
              <div>My saved jokes</div>
              <div className="line"></div>
              <div>Account Information</div>
              <div className="line"></div>
              <div>Publish new joke</div>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}

export default NavigationBar;
