import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Testimony = () => {
    const navigate = useNavigate();
    const { isMobile } = useResize();
    const { pathname } = useLocation();   
    
    return (
        <div className={styles.main}>
            <div className={styles.main_content}>
                <div className={styles.section_title}>
                    <div className={styles.first_title}>Quem já passou pela <br/>Jornada Will.Hack</div>
                    <div className={styles.second_title}>A gente entende seus desafios. É por isso que fazemos diferente: combinamos<br/> times de alta performance e metodologias ágeis para oferecer produtos de<br/> sucesso e resultados reais pra sua empresa.</div>
                </div>

                <div className={styles.section_content}>
                    <div className={styles.section_data}>
                        <div className={styles.testimony}>
                            <div>‛‛</div>
                            <div>A WILLHACK é incrível. Conheço talentos de todo o país e aprendo muito. Tenho o privilégio de realizar meus projetos com rapidez e qualidade vejo a escalabilidade de minha receita.</div>
                            <div>
                                <div></div>
                                <div>
                                    <div> WIll Rulli </div>
                                    <div> willrulli@icloud.com </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}
export default Testimony;    