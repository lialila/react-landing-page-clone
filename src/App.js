import './fonts/Ondo.ttf';
import './fonts/Arial.ttf';
import './fonts/Circular.ttf';
import './fonts/Circular-book.ttf';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const bodyStyle = css`
  box-sizing: border-box;
  background-image: url('https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63491d729c6a15033540e97e_Group%201113%20(2).png');
  background-color: black;
  background-repeat: no-repeat;
  background-position: 75%;
  background-size: 560px;
  background-position: 730px 130px;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: white;
`;

const headerBar = css`
  background-color: black;
  display: flex;
`;

const navBar = css`
  //position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 200px;
  height: 80px;
  font-family: 'Inter', sans-serif;
  font-weight: 550;
  letter-spacing: 0.6px;
  font-size: 16px;
  color: #fff;
  position: relative;
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

const h1Wrapper = css`
  margin-bottom: 100px;
  margin-left: 200px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-flow: column wrap;

  h1 {
    color: white;
    margin-top: 15px;
    font-family: 'Arial', 'Helvetica', sans-serif;
    font-weight: 1000;
    letter-spacing: -2.6px;
    font-size: 55px;
    line-height: 50px;

    span {
      color: #e63963;
      letter-spacing: 0.001px;
    }
  }

  p {
    color: white;
    letter-spacing: 0.8px;
    line-height: 30px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    margin: 12px 0 50px;
  }

  button {
    border-radius: 30px;
    align-items: center;
    width: 235px;
    height: 65px;
    font-family: 'Inter', sans-serif;
    font-weight: 1000;
    font-size: 17px;
    color: #e63963;
  }

  button.red {
    background-color: #e63963;
    color: white;
    margin-left: 20px;
  }
`;

const wrapperh2 = css`
  display: inline-block;
  //  justify-content: space-evenly;
  max-width: 100%;

  h2 {
    align-items: center;
    font-size: 14px;
    font-family: 'Arial', 'Helvetica', sans-serif;
    font-weight: 500;
  }
`;

const wrapperGrid = css`
  display: grid;
  grid-auto-columns: 30px;
  grid-gap: 100px;
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
        <div css={h1Wrapper}>
          <h1>
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
          <div>
            <a href="/#">
              <button className="white">DISCOVER MUSIC</button>
            </a>
            <a href="/#">
              <button className="red">PROMOTE MUSIC</button>
            </a>
          </div>
        </div>
        <div style={wrapperh2}>
          <h2>Featured in</h2>
          <div style={wrapperGrid}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce3e8200701d125e27_F1.png"
              alt="WSJ"
              width="20%"
            />
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dcde7aba3a29be95809_F2.png"
              alt="musically"
              width="20%"
            />

            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce67761f561f271dbb_F3.png"
              alt="Hyperbot"
              width="20%"
            />
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce1925274830086792_F4.png"
              alt="BostInno"
              width="20%"
            />
          </div>
          <div>
            <h2>A proud portfolio company of</h2>

            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/632149ed41e0510de6e577ad_Techstars_Blinking.png"
              alt="techstars"
            />
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/632149ed41e05152cde577b2_Screen%2520Shot%25202022-09-13%2520at%25206.34.19%2520PM-p-500.png"
              alt="ventures"
            />
          </div>
        </div>
      </main>
      <footer>Some info</footer>
    </body>
  );
}

export default App;
