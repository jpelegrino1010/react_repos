import classes from "./hero.module.css";
import heroImg from "./../../img/hero.png";
import customerImg from "./../../UI/LoadImg";

const HeroSection = () => (
  <section className={classes["section-hero"]}>
    <div className={classes.hero}>
      <div className={classes["hero-text-box"]}>
        <h1 className="heading-primary">
          A healthy meal delivered to your door, every single day
        </h1>
        <p className={classes["hero-description"]}>
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
        <a href="#" className="btn btn--full margin-right-sm">
          Start eating well
        </a>
        <a href="#" className="btn btn--outline">
          Learn more &darr;
        </a>
        <div className={classes["delivered-meals"]}>
          <div className={classes["delivered-imgs"]}>
            <img src={customerImg.customer1} alt="Customer photo" />
            <img src={customerImg.customer2} alt="Customer photo" />
            <img src={customerImg.customer3} alt="Customer photo" />
            <img src={customerImg.customer4} alt="Customer photo" />
            <img src={customerImg.customer5} alt="Customer photo" />
            <img src={customerImg.customer6} alt="Customer photo" />
          </div>
          <p className={classes["delivered-text"]}>
            <span>250,000+</span> meals delivered last year!
          </p>
        </div>
      </div>
      <div className={classes["hero-img-box"]}>
        <img
          src={heroImg}
          className={classes["hero-img"]}
          alt="Woman enjoying food, meals in storage container, and food bowls on a table"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
