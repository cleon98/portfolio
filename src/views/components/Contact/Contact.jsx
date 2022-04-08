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
        <h2>Contact </h2>
      <input type="hidden" name="_next" value="https://portfolio-cristian.netlify.app"/>
      <input type="hidden" name="_captcha" value="false"/>
      <input type="hidden" name="_template" value="table"/>
        

          <input type="text" name="name" id="name" placeholder="Name..."></input>
      
          <input type="email" name="email" id="email"  placeholder="Email..."></input>

          <textarea name="message" id="message" placeholder="Message..."></textarea>

        <div className={style.sendBtn} >
        <button type="submit" value="Submit">SEND</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Contact;
