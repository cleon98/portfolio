import React from "react";
import style from "./styles.module.css";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiReact, SiNodedotjs, SiMysql, SiMongodb, SiGit } from "react-icons/si";




const AboutMe = () => {
  return (
    <main className={style.main__about}>
      <section className={style.main__about2}>
        <div className={style.main__aboutme}>
          <p>ABOUT ME</p>
        </div>
        <div className={style.main__card}>
          <div className={style.flipcard}>
            <div className={style.flipcardinner}>
              <div className={style.flipcardfront}>
                <p className={style.flipme}>FLIP THE CARD</p>
                <div className={style.line1}></div>
                <div className={style.line2}></div>
                <img
                  className={style.flipimg}
                  src="https://i.imgur.com/Pc961w2.png"
                  alt="Avatar"
                />
              </div>
              <div className={style.flipcardback}>
                <div className={style.backtext}>
                  <p> Cristian León</p>
                  <p className={style.title}>Name</p>
                  <p>23</p>
                  <p className={style.title}>Age</p>
                  <p className={style.text}>
                    Undergraduate in International Relations who decided to
                    start in the programming world by joining a full-stack web
                    development bootcamp. After some months of hard work I
                    adquired some newskills and developed a passion for this
                    world where learning and practicing is a permanent
                    obligation to both improve and adquire new skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className={style.main__techtitle}>Tecnhnologies</h3>
        <div className={style.main__techs}>
        
          <TiHtml5 className={style.icons} />
          <DiCss3 className={style.icons} />
          <SiJavascript className={style.icons} />
          <SiReact className={style.icons} />
          <SiNodedotjs className={style.icons} />
          <SiMysql  className={style.icons} />
          <SiMongodb  className={style.icons} />
          <SiGit  className={style.icons} />
         
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
