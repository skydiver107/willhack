import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import building_1 from './../../../assets/images/building_1.png';
import building_2 from './../../../assets/images/building_2.png';
import building_3 from './../../../assets/images/building_3.png';
import arrow from './../../../assets/images/2_arrow.png';
import divider from './../../../assets/images/divider_2.png';

const StartBuilding = (props: any) => {
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
                    <div className={styles.first_title}>Branding</div>
                    <div className={styles.second_title}>start Building...</div>
                </div>
                <div className={styles.section_content}>
                    <div className={styles.left_section}>
                        <div className={styles.left_para}>
                        Hora de criar Brand Management é uma estratégia de gestão da sua marca que visa torná-la mais reconhecida pelo seu público e presença no mercado. <br/> Nossa estratégia busca a admiração e desejo pelos valores que sua marca cria em torno de si mesma.
                        </div>
                        <div>
                            <img src={building_1} style={{width: '100%'}}></img>
                        </div>
                        <div className={styles.left_section1}>
                            <div className={styles.section1_title}>Branding All-in-One</div>
                            <div className={styles.section1_content}>
                            Onde iremos usar todas nossas skills, para criar o conceito visual do seu projeto digital. 
                            <br/><br/>
                            O Branding de seu produto como identidade visual, cores, repositório de elementos, copywriting, guias de branding, biblioteca para rede sociais, entre outros. 
                            <br/><br/>
                            Para que seu projeto ganhe uma forma visual profissional e forte, onde vá se comunicar com seu público com eficácia.
                            </div>
                        </div>
                        <div>
                            <img src={building_3} style={{width: '100%', marginTop: '165px'}}></img>
                        </div>
                    </div>
                    <div className={styles.divider}>
                        <img src={divider} className={styles.divider_img}/>
                    </div>
                    <div className={styles.right_section}>
                        <div className={styles.right_para}>
                            Nosso objetivo principal é despertar sensações e criação de conexões fortes, que serão fatores relevantes para a escolha do cliente pela marca no momento de decisão de compra.
                        </div>
                        <div className={styles.right_section1}>
                            <div className={styles.section1_title}>Golden Circle</div>
                            <div className={styles.section1_content}>
                                Nesta fase iremos desenvolver o método de pensar, agir e comunicar de sua marca com o intuito de criar impacto no mundo. 
                                <br /><br />
                                Começando pelo Por quê? É o propósito do empreendimento, o objetivo de suas iniciativas, enfim a causa que move seus projetos e campanhas. 
                                <br /><br />
                                Siga com o Como? Como sua empresa busca atingir o seu objetivo? Quais estratégias está usando para realizar a sua missão?
                                <br /><br />
                                Acabe com o O quê? É o resultado de seu projeto, o seu produto final, a parte mais concreta do seu empreendimento. Aqui é onde se define o que você faz ou vende.
                            </div>
                        </div>
                        <div>
                            <img src={building_2} style={{marginTop: '66px'}}/>
                        </div>
                        <div className={styles.right_section1}>
                            <div className={styles.section1_title} style={{marginTop: '203px'}}>UI & UX Patterns</div>
                            <div className={styles.section1_content}>
                                Nesta fase iremos usar todas nossas skills necessárias identificadas na fase inicial para a criação do Protótipo de seu produto. UI Designer, UX Writter, UX Designer, tudo que for necessário para a realização do seu projeto.
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}
export default StartBuilding;    