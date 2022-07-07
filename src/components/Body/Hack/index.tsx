import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import onboard from './../../../assets/images/hack.png';
import arrow from './../../../assets/images/4_arrow.png';

const Hack = (props: any) => {
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
                    <div className={styles.first_title}>Go to Market</div>
                    <div className={styles.second_title}>and Hack...</div>
                </div>
                <div className={styles.section_content}>
                    <div className={styles.left_section}>
                        <div className={styles.left_para}>
                            Produto, branding, desenvolvimento, dados, vendas, performance e growth tudo em harmonia. É hora de Lançar no Mercado! Ajudamos na consolidação da sua presença de marca, aumentando exponencialmente as vendas de forma digital.
                        </div>
                        <div>
                            <img src={onboard} style={{width: '100%'}}></img>
                        </div>
                    </div>
                    <div className={styles.right_section}>
                        <div className={styles.right_para}>
                            Com metodologia própria em todas as etapas da jornada de compra, atraindo e convertendo clientes para seu negócio. Esta etapa final também é dividida em 3 fases.
                        </div>
                        <div className={styles.right_section1}>
                            <div className={styles.section1_title}>Digital Authority</div>
                            <div className={styles.section1_content}>
                                Nosso squad especializado em marketing digital com foco em vendas, o nosso negócio é perfomance. Toda nossa metodologia é baseada em Growth Hacking, por isso somos especialistas em estratégias, métricas de dados, vendas e marketing. Nosso trabalho é fazer empresas crescerem e venderem exponencialmente no digital.
                            </div>
                        </div>
                        <div className={styles.right_section1}>
                            <div className={styles.section1_title}>Growth Hacking & Performance</div>
                            <div className={styles.section1_content}>
                                O Growth Hacking é, resumidamente, um subcampo do marketing focado no rápido e exponencial crescimento de uma empresa. Seja ela de pequeno ou médio porte, o growth busca por estratégias de desenvolvimento acelerado.
                            </div>
                        </div>
                        <div className={styles.right_section1}>
                            <div className={styles.section1_title}>Grow Methodology</div>
                            <div className={styles.section1_content}>
                                Temos nossa própria metodologia para que qualquer empresa, de qualquer segmento, tenha a oportunidade de experimentar novas soluções e resultados ágeis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}
export default Hack;    