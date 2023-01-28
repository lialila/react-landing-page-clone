import './fonts/Arial.ttf';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const bodyStyle = css`
  background-image: url('https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63491d729c6a15033540e97e_Group%201113%20(2).png');
  background-color: black;
  background-repeat: no-repeat;
  background-position: 75%;
  background-size: 560px;
  background-position: 730px 130px;
  color: white;
  a,
  a:link,
  a:visited {
    text-decoration: none;
  }
`;

const headerBar = css`
  display: flex;
`;

const navBar = css`
  background-color: black;
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 200px;
  height: 80px;
  font-family: 'Inter', sans-serif;
  font-weight: 550;
  letter-spacing: 0.6px;
  font-size: 16px;
  color: #fff;
  box-shadow: 0px 8px 15px black;
  float: right;

  a,
  a:link,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  ul {
    display: flex;
    gap: 140px;
    /* position: relative; */
    float: right;
    padding: 0 0 0 380px;
  }

  .logo,
  li {
    list-style-type: none;
  }

  img {
    font-size: 20px;
    // letter-spacing: 0.7px;
  }

  li:hover {
    text-decoration: underline;
    transition-delay: text-decoration 3s;
    padding: 3px 0 0;
    // box-shadow: 1px 2px 12px #e63963;
  }
`;

const h1Style = css`
  color: white;
  margin-top: 15px;
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-weight: 1000;
  letter-spacing: -2.6px;
  font-size: 55px;
  line-height: 50px;
`;

const h1Wrapper = css`
  margin-bottom: 210px;
  margin-left: 200px;
  margin-top: 180px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-flow: column wrap;

  span {
    color: #e63963;
    letter-spacing: 0.001px;
  }

  p {
    color: white;
    letter-spacing: 0.8px;
    line-height: 30px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 22px;
    margin: 12px 0 50px;
  }
  button.red {
    background-color: #e63963 !important;
    color: white;
    margin-right: 20px;
  }
  .buttonBlack {
    background-color: black;
    color: white;
  }
  .buttonWhite {
    background-color: white;
    color: black;
  }
`;
const buttonWrapper = css`
  display: flex;
  gap: 20px;
`;
const buttonStyle = css`
  border-radius: 30px;
  align-items: center;
  width: 235px;
  height: 65px;
  font-family: 'Inter', sans-serif;
  font-weight: 1000;
  font-size: 17px;
  color: #e63963;
  cursor: pointer;
`;

const h2Wrapper = css`
  h2 {
    color: white;
    margin: 80px 0 30px;
    font-family: 'Arial', 'Helvetica', sans-serif;
    font-weight: 550;
    letter-spacing: 0.2px;
    font-size: 38px;
    line-height: 50px;
    display: flex;
    justify-content: center;
  }
`;
const featured = css`
  margin-top: -20px;
  margin-bottom: -25px;
`;

const portfolioWrapper = css`
  display: flex;
  justify-content: center;
  gap: 130px;

  img {
    border-radius: 10px;
  }
`;
const pStyle = css`
  letter-spacing: 0.8px;
  line-height: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 22px;
  a {
    color: #e63963;
    text-decoration: underline;
  }
`;

const h3LeftStyle = css`
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-weight: 800;
  letter-spacing: 0.6px;
  font-size: 40px;
  line-height: 50px;
  margin-top: 230px;
`;

const partLeft = css`
  display: flex;
  justify-content: space-between;
  //flex-direction: flex-column;
  padding: 170px 0;
  max-width: 1200px;
  margin: 0 250px 20px 250px;
  img {
    z-index: 3;
    width: 22rem;
    object-position: 0px 0px;
    padding-left: -100px;
  }
`;

const partRight = css`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  flex-direction: flex-end;
  padding: 170px 0;
  max-width: 1200px;
  margin: 20px 250px;
  text-align: right;
  img {
    width: 22rem;
  }

  h3 {
    font-family: 'Arial', 'Helvetica', sans-serif;
    font-weight: 800;
    letter-spacing: 0.6px;
    font-size: 40px;
    line-height: 50px;
    margin-top: 230px;
  }
`;

const partRight1 = css`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  flex-direction: flex-end;
  padding: 170px 0;
  max-width: 1200px;
  margin: 20px 250px;
  text-align: right;

  h3 {
    font-family: 'Arial', 'Helvetica', sans-serif;
    font-weight: 800;
    letter-spacing: -2.6px;
    font-size: 40px;
    line-height: 50px;
    margin-top: 180px;
  }

  img {
    width: 600px;
  }
`;
const test = css`
  display: flex;
  flex-direction: row;
  // align-items: center;
`;

const boxes = css`
  border-radius: 45px;
  color: black;
  background-color: white;
  width: 340px;
  height: 90px;
  margin: 10px 0;
  // padding-right: 10px;
  justify-content: space-between;

  img {
    border-radius: 50%;
    width: 62px;
    margin: 13px 15px;
    float: left;
  }

  p {
    font-family: 'Arial', sans-serif;
    line-height: 20px;
    font-size: 14px;
    font-weight: 100;
    color: #333333;
    text-align: left;
    align-items: center;
  }
`;
const testH3 = css`
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  font-weight: 550;
  letter-spacing: 0.2px;
  font-size: 30px;
  line-height: 50px;
  flex-wrap: wrap;
  gap: 30px;
`;

function App() {
  return (
    <body css={bodyStyle}>
      <header css={headerBar}>
        <nav css={navBar}>
          <img
            src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00d247034585_Logo%20for%20web.svg"
            alt="HotDrop"
            width="100px"
          />
          <ul>
            <li>
              <a href="/#">Get in touch</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Join our team</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section css={h1Wrapper}>
          <h1 css={h1Style}>
            Discover music.
            <br />
            <span>Support artists.</span>
          </h1>

          <p>
            Stuck listening to the same mainstream
            <br />
            songs and artists on-repeat?
            <br />
            <br />
            Keep your music taste fresh with millions of
            <br /> new songs you've never heard before.
            <br />
            <br />
            Join the movement, become a superfan.
          </p>
          <div css={buttonWrapper}>
            <button css={buttonStyle}>DISCOVER MUSIC</button>

            <button css={buttonStyle} className="red">
              PROMOTE MUSIC
            </button>
          </div>
        </section>
        <section css={h2Wrapper}>
          <h2>Featured in</h2>
          <div css={featured}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce3e8200701d125e27_F1.png"
              alt="WSJ"
              width="25%"
            />
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dcde7aba3a29be95809_F2.png"
              alt="musically"
              width="25%"
            />

            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce67761f561f271dbb_F3.png"
              alt="Hyperbot"
              width="25%"
            />
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce1925274830086792_F4.png"
              alt="BostInno"
              width="25%"
            />
          </div>
          <h2>A proud portfolio company of</h2>
          <div css={portfolioWrapper}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/632149ed41e0510de6e577ad_Techstars_Blinking.png"
              alt="techstars"
              width="20%"
            />
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/632149ed41e05152cde577b2_Screen%2520Shot%25202022-09-13%2520at%25206.34.19%2520PM-p-500.png"
              alt="ventures"
              width="20%"
            />
          </div>
        </section>
        <section css={partLeft}>
          <div>
            <h3 css={h3LeftStyle}>
              Connect with new <br />
              artists & support <br />
              their journey.
            </h3>
            <p css={pStyle}>
              90% of artists are invisible. We put artist stories in
              <br /> the spotlight.
            </p>
          </div>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63481f87fae764870c1abdcb_Group%201110-p-500.png"
              alt="depend on"
            />
          </div>
        </section>
        <section css={partRight}>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/6310b8256fb391d0b5907328_Genres-2_iphone13midnight_portrait-p-500.png"
              alt=""
              genres
            />
          </div>
          <div>
            <h3>
              You control the
              <br /> discovery experience.
            </h3>
            <p css={pStyle}>
              Explore a feed of new music you haven't
              <br /> heard before – guaranteed.
            </p>
          </div>
        </section>
        <section css={partLeft}>
          <div>
            <h3 css={h3LeftStyle}>
              Be the reason artists
              <br /> go viral.
            </h3>
            <p css={pStyle}>
              Share hidden-gems with your friends. <br />
              Be early on the next star in music.
            </p>
          </div>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/6347f1949d97359f010efecf_Group%201111-p-500.png"
              alt="trends"
            />
          </div>
        </section>
        <section css={partRight1}>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/637a9f98ecc8b47c728bbeba_Group%201299-2_macbookgrey_front-p-800.png"
              alt="file upload"
              width="600px"
            />
          </div>
          <div>
            <h3>
              Artists promote <br />
              directly to Gen-Z.
            </h3>
            <p css={pStyle}>
              Upload your songs, reach new <br />
              superfans, and build community.
            </p>
            <div>
              <p css={pStyle}>
                <a href="/#">Sign up</a> for HotDrop Studio.
              </p>
            </div>
          </div>
        </section>
        <h3 css={testH3}>Testimonials</h3>
        <section css={(test, testH3)}>
          <div css={boxes}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd003f8903458d_8.jpg"
              alt="Aaron"
            />
            <p>"HotDrop and Spotify is the ultimate combo" - Aaron</p>
          </div>
          <div css={boxes}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd0017ea0345a0_16.jpg"
              alt="Jordam"
            />
            <p>Before HotDrop I never liked Rock music" - Jordan</p>
          </div>
          <div css={boxes}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00863903459e_15.jpg"
              alt="Samantha"
            />
            <p>"How is this not in the Top Charts?!" - Sammantha</p>
          </div>
          <div css={boxes}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00bdac034589_5.jpg"
              alt="001"
            />{' '}
            <p>"Easy to get lost and pass time like TikTok.” – Mike</p>
          </div>
          <div css={boxes}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00304003459d_13.jpg"
              alt="002"
            />
            <p>"Every college student needs to download HotDrop" - Matt</p>
          </div>
          <div css={boxes}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00e10a03458b_3.jpg"
              alt="003"
            />
            <p>"HotDrop and Spotify is the ultimate combo" - Aaron</p>
          </div>
          <div css={boxes}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd0029c403459c_11.jpg"
              alt="003"
            />
            <p>"Very addictive" - Jen</p>
          </div>
          <div css={boxes}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd0026e9034587_7.jpg"
              alt="003"
            />
            <p>"HotDrop is the ONLY way I listen to new music.” – Rachel"</p>
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
