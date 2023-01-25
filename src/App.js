import './fonts/Ondo.ttf';
import './fonts/Arial.ttf';
import './fonts/Circular.ttf';
import './fonts/Circular-book.ttf';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const bodyStyle = css`
  background-color: black;
`;
const headerBar = css`
  z-index: 1000;
  background-color: black;
  display: flex;
`;
const navBar = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 250px;
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
    gap: 150px;
    position: relative;
    float: right;
    padding: 0 0 0 330px;
  }

  .logo,
  li {
    list-style-type: none;
  }
  img {
    font-size: 20px;
    letter-spacing: 0.7px;
  }
  li:hover {
    text-decoration: underline;
    transition-delay: text-decoration 3s;
    padding: 3px 0 0;
    // box-shadow: 1px 2px 12px #e63963;
  }
`;
const h1Wrapper = css`
  background-color: black;
  h1 {
    color: white;

    font-family: 'Arial';
    font-weight: 1000;
    letter-spacing: -2px;
    font-size: 50px;
    span {
      color: #e63963;
    }
  }
  p {
    color: white;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 25px;
    line-height: 1.6;
  }
  button {
    border-radius: 30px;
    align-items: center;
    padding: 20px 20px;
    width: 230px;
    height: 60px;
    font-family: 'Inter', sans-serif;
    font-weight: 1000;
    font-size: 17px;
    //.white {
    color: #e63963;
  }
  button.red {
    background-color: #e63963;
    color: white;
  }
`;

function App() {
  return (
    <body css={bodyStyle}>
      <header css={headerBar}>
        <nav css={navBar}>
          <img src="/images/Logo.svg" alt="HotDrop" width="100" />
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
            Stuck listening to the same mainstream songs and artists on-repeat?
            <br />
            Keep your music taste fresh with millions of new songs you've never
            heard before.
            <br />
            Join the movement, become a superfan.
          </p>
          <img src="/images/index-image.png" />
          <button className="white">DISCOVER MUSIC</button>
          <button className="red">PROMOTE MUSIC</button>
        </div>
      </main>
      <footer>Some info</footer>
    </body>
  );
}

export default App;
