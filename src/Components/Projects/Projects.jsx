import React from "react";
import styles from "./Projects.module.css";
import Lumen5_clone from "../../Images/Lumen5_clone.png";
import PremierLeague_clone from "../../Images/PremierLeague_clone.png";
import UrbanCompany from "../../Images/UrbanCompany_clone.png";
import redux from "../../Images/redux.png";
import yatra from "../../Images/yatra_clone.png";

export const Projects = () => {
  return (
    <div id="projects">
      <div className={styles.projects}>
        <div className={styles.name}> Projects </div>

        {/* YatraClone */}
        <div className={styles.card}>
          <div className={styles.cardleft}>
            <img className={styles.image} alt="yatra" src={yatra} />
          </div>
          <div className={styles.cardright}>
            <div className={styles.heading}>Yatra Clone</div>
            <div className={styles.text}> Group Project | Six Days </div>
            <div className={styles.smallicons}>
              <img alt="react" src="https://cdn.svgporn.com/logos/react.svg" />
              <img alt="redux" src={redux} />
              <img
                alt="css"
                src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"
              />
              <img
                alt="mongodb"
                src="https://banner2.cleanpng.com/20180403/hyq/kisspng-mongodb-node-js-npm-open-source-model-angularjs-leaf-5ac44d9ed28fc7.7809651415228143668625.jpg"
              />
              <img
                alt="nodejs"
                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              />
            </div>
            <div className={styles.details}>
              <div>Cloned the online bus booking platform, Yatra.</div>
              <div> with a team of Four developers.</div>
            </div>
            <div className={styles.extra}>
              <a
                href="https://github.com/kamalgupta97/yatra_clone"
                className={styles.github}
              >
                Github Repository
              </a>
              <a href="" className={styles.demo}>
                {" "}
                Demo Link{" "}
              </a>
            </div>
          </div>
        </div>

        {/* UrbanCompany Clone */}
        <div className={styles.line}></div>
        <div className={styles.card}>
          <div className={styles.cardleft}>
            <img
              className={styles.image}
              alt="UrbanCompany"
              src={UrbanCompany}
            />
          </div>
          <div className={styles.cardright}>
            <div className={styles.heading}>UrbanCompany Clone</div>
            <div className={styles.text}> Group Project | Ten days </div>
            <div className={styles.smallicons}>
              <img alt="react" src="https://cdn.svgporn.com/logos/react.svg" />
              <img alt="redux" src={redux} />
              <img
                alt="css"
                src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"
              />
              {/* <img
                alt="mongodb"
                src="https://banner2.cleanpng.com/20180403/hyq/kisspng-mongodb-node-js-npm-open-source-model-angularjs-leaf-5ac44d9ed28fc7.7809651415228143668625.jpg"
              />
              <img
                alt="nodejs"
                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              /> */}
            </div>
            <div className={styles.details}>
              <div>
                Cloned On Demand service providing platform, UrbanCompany.
              </div>
              <div> with a team of Three developers.</div>
            </div>
            <div className={styles.extra}>
              <a
                href="https://github.com/AleemAlam/Urban-Company"
                className={styles.github}
              >
                Github Repository
              </a>
              <a
                href="https://urban-company-clone.netlify.app/"
                className={styles.demo}
              >
                {" "}
                Demo Link{" "}
              </a>
            </div>
          </div>
        </div>

        {/* Premier League Clone */}
        <div className={styles.line}></div>
        <div className={styles.card}>
          <div className={styles.cardleft}>
            <img
              className={styles.image}
              alt="premierLeague"
              src={PremierLeague_clone}
            />
          </div>
          <div className={styles.cardright}>
            <div className={styles.heading}>Premier League Clone</div>
            <div className={styles.text}> Group Project | Five days </div>
            <div className={styles.smallicons}>
              <img
                alt="javascript"
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
              />
              <img
                alt="html"
                src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png"
              />
              <img
                alt="css"
                src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"
              />
            </div>
            <div className={styles.details}>
              <div>Cloned famous sport website, premierLeague.</div>
              <div>with a team of Five developers.</div>
            </div>
            <div className={styles.extra}>
              <a
                href="https://github.com/Mangeshbk/Premier-League-clone"
                className={styles.github}
              >
                Github Repository
              </a>
              <a
                href="https://cloning-premierleague.netlify.app/"
                className={styles.demo}
              >
                {" "}
                Demo Link{" "}
              </a>
            </div>
          </div>
        </div>

        {/* Lumen5 */}
        <div className={styles.line}></div>
        <div className={styles.card}>
          <div className={styles.cardleft}>
            <img
              className={styles.image}
              alt="Lumen5_clone"
              src={Lumen5_clone}
            />
          </div>
          <div className={styles.cardright}>
            <div className={styles.heading}>Lumen5 Clone</div>
            <div className={styles.text}> Group Project | Four days </div>
            <div className={styles.smallicons}>
              <img
                alt="javascript"
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
              />
              <img
                alt="html"
                src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png"
              />
              <img
                alt="css"
                src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"
              />
            </div>
            <div className={styles.details}>
              <div>Cloned video creation platform, Lumen5</div>
              <div>with a team of Four developers.</div>
            </div>
            <div className={styles.extra}>
              <a
                href="https://github.com/SumanChakraborty1998/Lumen5_clone"
                className={styles.github}
              >
                Github Repository
              </a>
              <a
                href="https://lumen5clone.netlify.app/"
                className={styles.demo}
              >
                {" "}
                Demo Link{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
