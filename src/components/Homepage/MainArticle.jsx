import mainImgMobile from "../../assets/images/image-web-3-mobile.jpg";
import mainImgDesktop from "../../assets/images/image-web-3-desktop.jpg";

const MainArticle = () => {
  return (
    <div className="main-article__container">
      <picture>
        <source media="(min-width: 48rem)" srcSet={mainImgDesktop} />
        <img src={mainImgMobile} alt="" className="main-article__main-img" />
      </picture>

      <div className="main-article__article-container">
        <h1>The Bright Future of Web 3.0?</h1>

        <div className="main-article__article-content">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default MainArticle;
