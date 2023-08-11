import "./commentstyle.css";
import logo from "../../images/svg/commentlogo.svg";
import profile from "../../images/profile.png";
export function Comment() {
  return (
    <section className="comment">
      <div className="comment__wrp">
        <div className="comment__top">
          <img src={logo} alt="logo" />
          <p className="maincomment">
            “Always a pleasure to work with The Agency Creative. Such
            professional and happy people and you know you’ll receive a quick
            innovative and no fuss service.”
          </p>
          <div className="comment__profile">
            <img width={60} height={60} src={profile} alt="profile" />
            <div className="comment__profile__content">
              <p> Johnatan Doe </p>
              <span> Web Designer</span>
            </div>
          </div>
        </div>
        <div className="comment__bottom">
          <h2>
            People have tried to predict the future since the dawn of time.
          </h2>
          <button className="comment__bottom__button btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}
