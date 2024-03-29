import "./watchstyle.css";
export function Watch() {
  return (
    <section className="watch">
      <div className="watch__wrp">
        <div className="watch__content">
          <h2>Watch how we work</h2>
          <p>
            Capture more customers with a great brand recall. Whether you need a
            tising or as a tagline for your business, our slogan generator will
            help you come up with us.
          </p>
          <button className="watch__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="93"
              height="93"
              viewBox="0 0 93 93"
              fill="none"
            >
              <g filter="url(#filter0_b_22_1)">
                <circle cx="46.5" cy="46.5" r="46.5" fill="white" />
              </g>
              <path
                d="M62 44.7679C63.3333 45.5378 63.3333 47.4622 62 48.232L40.25 60.7894C38.9167 61.5592 37.25 60.597 37.25 59.0574L37.25 33.9426C37.25 32.403 38.9167 31.4408 40.25 32.2106L62 44.7679Z"
                fill="#35AFBF"
              />
              <defs>
                <filter
                  id="filter0_b_22_1"
                  x="-64"
                  y="-64"
                  width="221"
                  height="221"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_22_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_22_1"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
