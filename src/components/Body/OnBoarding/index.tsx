import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import onboard from './../../../assets/images/onboard_img.png';
import arrow from './../../../assets/images/1_arrow.png';

const OnBoarding = () => {
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
                    <div className={styles.first_title}>OnBoarding</div>
                    <div className={styles.second_title}>If there's a Will...</div>
                </div>
                <div className={styles.section_content}>
                    <div className={styles.left_section}>
                        <div className={styles.left_para}>
                            Primeiro, entendemos os desafios do seu negócio. Assim então  juntamos os melhores profissionais do mercado pra resolver. Simples assim.
                        </div>
                        <div>
                            <img src={onboard} style={{width: '100%'}}></img>
                        </div>
                    </div>
                    <div className={styles.right_section}>
                        <div className={styles.right_para}>
                            Acreditamos na clareza em todo o processo, com agilidade em cada decisão. Geramos valor através de sprints interativas, garantindo alta qualidade em cada entrega.
                        </div>
                        <div className={styles.right_section1}>
                            <div className={styles.section1_title}>Product Discovery</div>
                            <div className={styles.section1_content}>
                                Para validar e priorizar múltiplas hipóteses de produto, vendo todos os requisitos do projeto, conseguindo focar naquela com maior potencial de ROI. A gente joga junto pra você investir onde tem mais retorno. Tendo todos os dados seguimos para completar as 2 próximas fases simultaneamente.
                            </div>
                        </div>
                        <div className={styles.right_section1}>
                            <div className={styles.section1_title}>Product & Marketing Map</div>
                            <div className={styles.section1_content}>
                                Nesta fase iremos mapear todas as ações identificadas na fase anterior. Um mapeamento de todas as etapas do projeto e determinar todos os processos até o momento para ser lançando ao mercado.Funções, linguagem, sprints, público-alvo, estratégias… garantindo qualidade em cada etapa. 
                            </div>
                        </div>
                        <div className={styles.right_section1}>
                            <div className={styles.section1_title}>Wireframe & Documentation</div>
                            <div className={styles.section1_content}>
                                Com tudo mapeado, iremos desenvolver a documentação completa do seu projeto e o wireframe primário, projetando todas as telas da aplicação e também todos fluxos de user journey, fluxos de captação de users e muito mais. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}
export default OnBoarding;    