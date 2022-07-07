import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import dream_1 from './../../../assets/images/dream_1.png';
import dream_2 from './../../../assets/images/dream_2.png';
import dream_3 from './../../../assets/images/dream_3.png';
import arrow from './../../../assets/images/3_arrow.png';
import divider from './../../../assets/images/divider_2.png';
import brands from './../../../assets/images/brands.png';

const Dream = (props: any) => {
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
                    <div className={styles.first_title}>Develop</div>
                    <div className={styles.second_title}>Your Dream</div>
                </div>
                <div className={styles.section_content}>
                    <div className={styles.left_section}>
                        <div className={styles.left_para}>
                        Desenvolver e otimizar performance de alta velocidade em seus sites, plataformas e aplicativos. Com a clareza dos processos que obtivemos no ONBOARDING, sabemos o caminho a seguir, com isso, um Squad focado 100% estará alocado no desenvolvimento.
                        </div>
                        <div>
                            <img src={dream_1} style={{width: '100%'}}></img>
                        </div>
                        <div>
                            <img src={dream_2} style={{width: '100%', marginTop: '238px'}}/>
                        </div>
                        <div>
                            <img src={dream_3} style={{width: '100%', marginTop: '210px'}}></img>
                        </div>
                    </div>
                    <div className={styles.divider}>
                        <img src={divider} className={styles.divider_img}/>
                    </div>
                    <div className={styles.right_section}>
                        <div className={styles.right_para}>
                            Essa etapa é literalmente a “mão na massa” iremos desenvolver tudo que imaginou! Essa etapa é dividida em 3 fases.
                        </div>
                        <div className={styles.right_section1}>
                            <div className={styles.section1_title}>MVP All-in-One</div>
                            <div className={styles.section1_content}>
                                Nesta fase iremos priorizar as funções essenciais de seu projeto, para que sejam aprimoradas com plena eficácia ao longo do desenvolvimento.
                            </div>
                        </div>
                        <div className={styles.right_section1}>
                            <div className={styles.section1_title} style={{marginTop: '385px'}}>Product Evolution</div>
                            <div className={styles.section1_content}>
                                Depois das funções essenciais 100% funcionais, nesta fase iremos mapear as funções adicionais e criar um calendário de atualizações para a evolução da sua aplicação.
                            </div>
                        </div>

                        <div className={styles.right_section1}>
                            <div className={styles.section1_title} style={{marginTop: '354px'}}>Application Testing</div>
                            <div className={styles.section1_content}>
                                Com tudo definido e funcional chegou a fase de testes e bug fix. Aqui é onde iremos rever todo o código, todas as funções e procurar e avaliar cirurgicamente todos os possíveis bugs e aprimorar ainda mais.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.section_bottom}>
                    <div className={styles.bottom_para}>+30 FRAMEWORKS E TECNOLOGIAS</div>
                    <div className={styles.bottom_img}>
                        <img src={brands} />
                    </div>
                </div>
            </div>           
        </div>
    )
}
export default Dream    