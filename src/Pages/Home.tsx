import NavigationBar from "../Components/NavigationBar";
import Banner from "../Components/Banner";
import "./Home.scss";
import CategoryCards from "../Components/CategoryCards";

function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <div className="content-container">
        <CategoryCards></CategoryCards>
      </div>
    </>
  );
}

export default Home;
