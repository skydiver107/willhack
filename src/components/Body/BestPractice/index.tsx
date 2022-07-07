import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import practice from './../../../assets/images/practice.png';

const BestPractice = () => {
    const navigate = useNavigate();
    const { isMobile } = useResize();
    const { pathname } = useLocation();   
    
    return (
        <div className={styles.main}>
            <div className={styles.main_content}>
                <div className={styles.section_title}>
                    <div className={styles.first_title}>As melhores práticas <br />do mercado</div>
                    <div className={styles.second_title}>Com metodologia própria em todas as etapas da jornada <br />para alavancar seus projetos e escalar sua receita.</div>
                </div>

                <div className={styles.section_content}>
                    <div className={styles.practice_content}>
                        <img src={practice} />
                    </div>
                </div>
            </div>           
        </div>
    )
}
export default BestPractice;    