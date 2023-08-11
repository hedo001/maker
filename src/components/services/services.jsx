import four from "../../images/svg/four.svg";
import tri from "../../images/svg/triangular.svg";
import box from "../../images/svg/box.svg";
import doc from "../../images/svg/document.svg";
import "./servicesstyle.css";
export function Services() {
  return (
    <section className="services">
      <div className="services__wrp cont">
        <div className="services__top">
          {" "}
          <div className="services__content">
            <h2>We provide great services</h2>
            <p>
              We help people to think independent. Be the boss of your brand and
              be the storyteller. An appropriate approach.
            </p>
          </div>
          <ul className="services__list">
            <li>
              <img width={83} height={83} src={four} alt="rectangular" />
              <h3>Web Design</h3>
              <p>Powerful creations for the practice safe design.</p>
            </li>
            <li>
              <img width={83} height={83} src={tri} alt="triangular" />
              <h3>Web Design</h3>
              <p>Powerful creations for the practice safe design.</p>
            </li>
            <li>
              <img width={83} height={83} src={box} alt="box" />
              <h3>Web Design</h3>
              <p>Powerful creations for the practice safe design.</p>
            </li>
            <li>
              <img width={83} height={83} src={doc} alt="document" />
              <h3>Web Design</h3>
              <p>Powerful creations for the practice safe design.</p>
            </li>
          </ul>
        </div>
        <div className="services__bottom">
          <div className="services__bottom__content">
            <h2>Johnatan Doe </h2>

            <p>
              <span>Marketing Specialist </span>
              To make your web design company famous in the little we are here
              to provide you as many as catchy and useful web design company
              will surely help your company.
            </p>
            <button className="services__bottom__button">Learn More</button>
          </div>
          <div className="services__bottom__img"></div>
        </div>
      </div>
    </section>
  );
}
