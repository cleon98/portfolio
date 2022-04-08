import React from 'react'
import style from './styles.module.css'
import { RiGhostSmileLine } from "react-icons/ri";


const Home = () => {
  return (
    <main className={style.home__container}>
        <section className={style.home__info}>
            <div className={style.home__person}>
            <p>Cristian León</p>
            <p className={style.home__job}>Full-stack developer</p> 
            </div>
            <div className={style.home__menu}>
            <RiGhostSmileLine/>
            </div>
            </section>
            <section className={style.home__body}>
                <div>
                <h3>Hello World!</h3>
                <h3>Hello World!</h3>
                <h3>Hello World!</h3>
                <h3>Hello World!</h3>
                </div>
                <div className={style.home__img}>
                <img src="https://i.imgur.com/CzAVEFz.png" alt="Cristian the web developer" />
                </div>
            </section>
        
    </main>
  )
}

export default Home