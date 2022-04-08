import React from "react";
import style from "./styles.module.css";

const Portfolio = () => {
  return (
    <main className={style.main__portfolio}>
      <section>
        <div className={style.main__title}>
          <p className={style.titleport}>PORTFOLIO</p>
        </div>
<div className={style.cards}>
  <div className={style.card}>
  <h2 className={style.cardtitle}>TO DO</h2>
    <img src="https://i.imgur.com/nNyYeX4.png" alt="App preview"/>
    <p className={style.carddesc}> Application developed to Flowers el Tambo. Some of the feature are: adding, checking, editing and deleting tasks. Those task are stored in MongoDB<br/><br/><a target="_blank" href="https://todoflorestambo.netlify.app/">PREVIEW</a></p>
    
  </div>
  <div className={style.card}>
    <h2 className={style.cardtitle}>EVREN STORE</h2>
    <img src="https://i.imgur.com/DSXRyV1.png" alt="Evren logo"/>
    <p className={style.carddesc}>Evren is a local clothing shop who works directly throught social media without a personal website. This application includes all the basic features of a functional store. <br/><br/><a target="_blank" href="https://evren.netlify.app/">PREVIEW</a></p>
  </div>
</div>
      </section>
    </main>
  );
};

export default Portfolio;
