import "./styles.scss";

function Banner() {
  return (
    <div className="banner">
      <img
        alt=""
        className="banner-image"
        src="/assets/assets_Homework_Front-End_01/bitmap.png"
      />
      <div>
        <span className="banner-element-strong-title">The Joke Bible</span>
        <span className="banner-element-title ">
          Daily Laughs for you and yours
        </span>
        <div className="banner-element-search">
          <input placeholder="How can we make you laugh today" />
          <img
            alt="Search"
            src="/assets/assets_Homework_Front-End_01/search-copy.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
