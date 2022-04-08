import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import style from './styles.module.css'

const Footer = () => {
  return (
    <main className={style.main__footer}>
      <div className={style.main__cont}>
      <div className={style.logos}>
    <a href="https://www.linkedin.com/in/cristian-david-leon-hernandez-582bb31a8/" target="_blank"><AiFillLinkedin className={style.logo} /></a>
    <a  href="https://github.com/cleon98" target="_blank"><AiOutlineGithub className={style.logo}/></a> 
    <a href="mailto:c.l3on98@gmail.com"> <AiOutlineMail className={style.logo}/></a>
    <a href='https://wa.me/573154580599 ' target="_blank"><AiOutlineWhatsApp className={style.logo}/></a>
    </div>
    <section className={style.footertext}>
      <p>Sitio diseñado y creado por:<span className={style.owner} > Cristian León</span></p>
      </section>
   </div> 
   </main>
    
  )
}

export default Footer