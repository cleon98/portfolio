import React from "react";
import style from "./styles.module.css";

const Contact = () => {
  return (
    <div className={style.main__cont}>
      <div className={style.main__title}>
        <p>CONTACT</p>
      </div>
      <div className={style.form__cont}>
      <form action="https://formsubmit.co/c.l3on98@gmail.com" id="form" method="post" className={style.form}>
      <input type="hidden" name="_next" value="https://portfolio-cristian.netlify.app"/>
      <input type="hidden" name="_captcha" value="false"/>
      <input type="hidden" name="_template" value="table"/>
        <h2>Contact </h2>
        <p type="Name:">
          <input placeholder="Name..."></input>
        </p>
        <p type="Email:">
          <input type='email' placeholder="Email..."></input>
        </p>
        <p type="Message:">
          <textarea placeholder="Message..."></textarea>
        </p>
        <div className={style.sendBtn} >
        <button>SEND</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Contact;
