import React from "react";
import styled from "styled-components";

const HistoryPage = () => {
  return (
    <>
      {/* Section 1: Samuel Morse */}
      <section className="history">
        <div className="history__img">
          <img src="./public/img/samuel-morse.png" alt="" />
          <div>
            <p>US</p>
            <p>April 27, 1791 – April 2, 1872</p>
          </div>
        </div>
        <div className="history__text">
          <h2>Samuel Morse</h2>
          <p>
            Morse was a former painter, worked to develop an electric telegraph
            of his own. He reportedly had become intrigued with the idea after
            hearing a conversation about electromagnetism.
          </p>
        </div>
      </section>

      {/* Section 2: Dots and dashes */}
      <section className="history history--bg2">
        <div className="history__text">
          <h2>Dots and dashes</h2>
          <p>
            In collaboration with Leonard Gale and Alfred Vail, Morse eventually
            produced a single-circuit telegraph that worked by pushing the
            operator key down
          </p>
          <p>
            The Morse code assigned a set of dots and dashes to each letter of
            the English alphabet and allowed for the simple transmission of
            complex messages across telegraph lines.
          </p>
        </div>
        <div className="history__img fullwidth">
          <img src="./public/img/telegraph.png" alt="" />
        </div>
      </section>

      {/* Section 3: Leonard Gale - Alfred Vail */}
      <section className="history">
        <div className="history__character">
          <div className="history__img history__img--2">
            <img src="./public/img/leonard-gale.png" alt="" />
            <div>
              <p>US</p>
              <p>April 27, 1791 – April 2, 1872</p>
            </div>
          </div>
          <div className="history__text history__text--center">
            <h2>Leonard Gale</h2>
            <p>
              Dr. Leonard Dunnell Gale was a professor of chemistry and
              mineralogy who helped Samuel Morse develop the electromagnetic
              telegraph.
            </p>
          </div>
        </div>

        <div className="history__character">
          <div className="history__img history__img--2">
            <img src="./public/img/alfred-vail.png" alt="" />
            <div>
              <p>US</p>
              <p>April 27, 1791 – April 2, 1872</p>
            </div>
          </div>
          <div className="history__text history__text--center">
            <h2>Alfred Vail</h2>
            <p>
              Dr. Leonard Dunnell Gale was a professor of chemistry and
              mineralogy who helped Samuel Morse develop the electromagnetic
              telegraph.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: The Western Union Telegraphy Company */}
      <section className="history history--bg2">
        <div className="history__img fullwidth">
          <img src="./public/img/western-union-company.png" alt="" />
        </div>
        <div className="history__text">
          <h2>Western Union </h2>
          <p>
            The Western Union Telegraphy Company was founded in 1856. By 1861,
            Western Union had laid the first transcontinental telegraph line,
            making it the first nationwide telegraph company.
          </p>
          <p>
            Telegrams were a popular way of communicating during the 1920s and
            1930s. In 2006, Western Union officially ended its telegram service
            after 150 years.
          </p>
        </div>
      </section>

      {/* Sectopm 5: Uses */}
      <section className="history-uses">
        <h2>Morse code is still used today!</h2>
        <div className="history-uses__grid">
          <div className="history-uses__grid-item">
            <img src="./public/img/history-icon-1.png" alt="" />
            <p>
              Morse Code is most prevalent in Aviation and Aeronautical fields.
              The US Navy and Coast Guard still use signal lamps to communicate
              via Morse Code.
            </p>
          </div>

          <div className="history-uses__grid-item">
            <img src="./public/img/history-icon-2.png" alt="" />
            <p>
              Morse Code has also been used as an alternative form of
              communication for people with disabilities or whom have their
              abilities to communicate
            </p>
          </div>

          <div className="history-uses__grid-item">
            <img src="./public/img/history-icon-3.png" alt="" />
            <p>
              There have been several cases where people with disabilities
              communicate in Morse Code by using a series of long and quick
              blinks to represent that dots and dashes.
            </p>
          </div>
        </div>
      </section>

      {/* - Section 6: Sources */}
      <section className="history-sources">
        <div className="history-sources__list">
          <h3>Sources</h3>
          <ul>
            <li>
              <a href="">
                Is Morse Code Used Today? — The Brief History and Importance of
                Morse Code, Owlcation.
              </a>
            </li>
            <li>
              <a href="">Morse Code & the Telegraph, History.com</a>
            </li>
            <li>
              <a href="">History of Morse, NRICH team</a>
            </li>
            <li>
              <a href="">Morse Code, Wikipedia</a>
            </li>
          </ul>
        </div>

        <div className="history-sources__link">
          <img src="./public/img/logo.png" alt="" />
          <button className="btn">Get started</button>
        </div>
      </section>
    </>
  );
};

export default HistoryPage;
