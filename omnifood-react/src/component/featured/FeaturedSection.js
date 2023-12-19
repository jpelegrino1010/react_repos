import classes from "./featured.module.css";
import images from "./../../UI/LoadImg";

const FeaturedSection = () => (
  <section className={classes["section-featured"]}>
    <div className="container">
      <h2 className={classes["heading-featured-in"]}>As featured in</h2>
      <div className={classes.logos}>
        <img src={images.techcrunch} alt="Techcrunch logo" />
        <img src={images.businessinsider} alt="Business Insider logo" />
        <img src={images.thenewyorktimes} alt="The New York Times logo" />
        <img src={images.forbes} alt="Forbes logo" />
        <img src={images.usatoday} alt="USA Today logo" />
      </div>
    </div>
  </section>
);

export default FeaturedSection;
