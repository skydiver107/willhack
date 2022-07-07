import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import Navbar from './../../Header/Navbar';

import ScrollIntoView from 'react-scroll-into-view'

const MainSection = (props: any) => {
    const navigate = useNavigate();
    const { isMobile } = useResize();
    const { pathname } = useLocation();   
    
    return (
        <div className={styles.main}>
            <div className={styles.main_content}>
                <div className={styles.main_title}>
                    <div>If there's a <span style={{color: '#0b71ef'}}>Will</span>,<br/> start <span style={{color:'#1fcc51'}}>Building</span> your <span style={{color:'#df1b8c'}}>Dream</span> <br/>and <span style={{color:'#ff5c4e'}}>Hack</span> your <span style={{color:'#f9c529'}}>Way</span>.</div>
                </div>
                <div className={styles.button_group}>
                    <div className={styles.start_btn}>COMEÇAR AGORA</div>
                    <div className={styles.consult_btn}>FALAR COM UM ESPECIALISTA</div>
                </div>
                <div className={styles.bottom_para}>
                    Tenha um squad alta performance trabalhando para você <br/> descobrir, desenvolver e lançar seu negócio digital.
                </div>
                <div className={styles.explore_btn}>
                    EXPLORE A JORNADA WILL.HACK
                </div>
            </div>           
        </div>
    )
}
export default MainSection;    