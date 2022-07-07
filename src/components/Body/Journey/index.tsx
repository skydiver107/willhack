import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import background from './../../../assets/images/section_background.png';
import arrow from './../../../assets/images/5_arrow.png';
import bar from './../../../assets/images/bar.png';

const Journey = () => {
    const navigate = useNavigate();
    const { isMobile } = useResize();
    const { pathname } = useLocation();   
    
    return (
        <div className={styles.main}>
            <div className={styles.main_content}>
                <div className={styles.sectionArrow_area}>
                    <img src={arrow}></img>
                </div>  
                <div className={styles.section_title}>
                    <div className={styles.first_title}>Begin Your Journey</div>
                    <div className={styles.second_title}>your Way.</div>
                    <div className={styles.third_title}>
                        Tenha um squad alta performance trabalhando para você <br />descobrir, desenvolver e lançar seu negócio digital.
                    </div>
                </div>
                <div className={styles.section_content}>
                    <div className={styles.background}>
                        <img src={background} style={{width: '100%'}}></img>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.value_data}>
                            <div className={styles.value_section}>
                                <div className={styles.value_subtitle}>+20</div>
                                <div className={styles.value_content}>anos de xp</div>
                            </div>
                            <div className={styles.value_section} style={{marginTop: '10px', }}>
                                <div className={styles.value_subtitle}>+120</div>
                                <div className={styles.value_content}>clientes recorrentes</div>
                            </div>
                            <div className={styles.value_section} style={{marginTop: '10px'}}>
                                <div className={styles.value_subtitle}>+50</div>
                                <div className={styles.value_content}>especialistas</div>
                            </div>
                            <div className={styles.value_section}>
                                <div className={styles.value_subtitle}>+2M</div>
                                <div className={styles.value_content}>investidos</div>
                            </div>
                        </div>

                        <div className={styles.value_title}>
                            <span style={{color: '#0b71ef'}}>Will, </span>
                            <span style={{color:'#1fcc51'}}>Building, </span>
                            <span style={{color:'#df1b8c'}}>Dream </span> 
                            <span style={{color:'#FFFFFF', fontSize: '40px'}}>& </span> 
                            <span style={{color:'#ff5c4e'}}>Hack </span>
                            <span style={{color:'#FFFFFF', fontSize: '40px'}}>the </span>
                            <span style={{color:'#f9c529'}}>Way</span>
                        </div>

                        <div className={styles.button_group}>
                            <div className={styles.start_btn}>COMEÇAR AGORA</div>
                            <div className={styles.consult_btn}>FALAR COM UM ESPECIALISTA</div>
                        </div>

                        <div className={styles.img_area}>
                            <img src={bar} />
                        </div>

                        <div className={styles.reason_btn}>
                            POR QUE ESCOLHER A WILL.HACK?
                        </div>
                    </div>

                </div>
            </div>           
        </div>
    )
}
export default Journey;    