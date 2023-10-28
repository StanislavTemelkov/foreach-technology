import React from "react";
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import linkdin from '../../assets/home/linkdin.png';
import insta from '../../assets/home/insta.png';

const Footer = () =>{
    return (
        <>
            <div style={{backgroundColor:'#2b2b2b', paddingTop:'89px', paddingBottom:'90px'}}>
                <div className="container" >
                    <div className="row">
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>FOREACH TECHNOLOGY</p>
                            <p className={styles.text}>Foreach Technology is a dynamic and innovative startup software company that's shaping the future of technology</p>
                            <p className={styles.text}>Our passion is to create software solutions that empower businesses and individuals to thrive in the digital age</p>
                            <div className={styles.social_logo}>
                                <img src={fb} alt="fb" className={styles.img}/>
                                <img src={linkdin} alt="in" className={styles.img}/>
                                <img src={insta} alt="insta" className={styles.img}/>
                            </div>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Services</p>
                            <p className={styles.text}>500 Veliko Tarnovo, Dimitar Naydenov 127</p>
                            <p className={styles.text}>stanislav.temelkov@hotmail.com</p>
                            <p className={styles.text}>(+359) 988 71 6362</p>

                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Head Office</p>
                            <p className={styles.text}>500 Veliko Tarnovo, Dimitar Naydenov 127</p>
                            <p className={styles.text}>stanislav.temelkov@hotmail.com</p>
                            <p className={styles.text}>(+359) 988 71 6362</p>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Opening Hour</p>
                            <p className={styles.text}>Mon - Fri : 8:00 - 17:00</p>
                            <p className={styles.text}>Sat - Sun : Closed</p>

                        </div>
                    </div>

                </div>
            </div>


            <div style={{backgroundColor: '#2b2b2b', borderTop: 'solid 1px #707070'}}>
                    <p className={styles.bottom}>Copyright © 2023 All right reserved. FOREACH TECHNOLOGY LTD.</p>
            </div>
        </>
    )
}
export default Footer;