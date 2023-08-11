import "./footerstyle.css";
import facebook from "../../images/svg/facebook.svg";
import inst from "../../images/svg/inst.svg";
import wechat from "../../images/svg/wechat.svg";
import twitter from "../../images/svg/twitter.svg";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrp cont">
        <ul className="footer__list">
          <li className="footer__list-item">
            <h2>Freelancer</h2>
            <p>
              {" "}
              <span>19</span>/mo{" "}
            </p>
            <p>5 Psd fles included </p>
            <p>24 hours free support</p>
            <p> Multiple features installed</p>
            <p> 100 Elements PSD + Al</p>
            <button>Subscribe</button>
          </li>
          <li className="footer__list-item">
            <h2>Freelancer</h2>
            <p>
              {" "}
              <span>19</span>/mo{" "}
            </p>
            <p>5 Psd fles included </p>
            <p>24 hours free support</p>
            <p> Multiple features installed</p>
            <p> 100 Elements PSD + Al</p>
            <button>Subscribe</button>
          </li>
          <li className="footer__list-item">
            <h2>Freelancer</h2>
            <p>
              {" "}
              <span>19</span>/mo{" "}
            </p>
            <p>5 Psd fles included </p>
            <p>24 hours free support</p>
            <p> Multiple features installed</p>
            <p> 100 Elements PSD + Al</p>
            <button>Subscribe</button>
          </li>
          <li className="footer__list-item">
            <h2>Freelancer</h2>
            <p>
              {" "}
              <span>19</span>/mo{" "}
            </p>
            <p>5 Psd fles included </p>
            <p>24 hours free support</p>
            <p> Multiple features installed</p>
            <p> 100 Elements PSD + Al</p>
            <button>Subscribe</button>
          </li>
        </ul>
        <span className="line"></span>
        <div className="footer__bottom">
          <div className="footer__bottom__link">
            <ul className="footer__bottom__link__list">
              <li className="footer__bottom__link__list-item">
                <a href="/">Home</a>
              </li>
              <li className="footer__bottom__link__list-item">
                <a href="/">Privacy</a>
              </li>
              <li className="footer__bottom__link__list-item">
                <a href="/">Terms & Conditions</a>
              </li>
              <li className="footer__bottom__link__list-item">
                <a href="/">About us</a>
              </li>
              <li className="footer__bottom__link__list-item">
                <a href="/">Contact us</a>
              </li>
            </ul>
            <ul className="footer__bottom__link__icon">
              <li>
                <a href="/">
                  {" "}
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <img src={wechat} alt="wechat" />
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <img src={inst} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
          <p>@ A new era 2016. Awesome wireframe by Andrei Dorin</p>
        </div>
      </div>
    </footer>
  );
}
