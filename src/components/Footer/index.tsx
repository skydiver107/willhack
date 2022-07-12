import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../utils/Helper';
import phoneCall from './../../assets/images/phone_img.png';
import polybus from './../../assets/images/polypus.png';
import willhack from './../../assets/images/WillHack.png';
import rulligans from './../../assets/images/Rulligans_Digital.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from './../../assets/images/WillHack.png';

import { styled } from '@mui/material/styles';

const Footer = () => {
    const navigate = useNavigate();
    const { isMobile } = useResize();
    const { pathname } = useLocation();
    
    return (
        <div className={styles.main}>
            <div className={styles.main_content}>
                
                <div className={styles.section_content}>
                    
                    <div className={styles.question_content}>
                        {/* <FontAwesomeIcon icon="fa-regular fa-coffee" /> */}
                        {/* <FontAwesomeIcon icon='fa-brands fa-font-awesome' /> */}
                    </div>

                    <div className={styles.bottom_content}>
                        <div className={styles.bottom_header}>DESENVOLVIDO COM 🤍 PARA VOCÊ POR</div>
                        <div className={styles.bottom_area}>
                            <img src={willhack} style={{margin: '0 50px'}}/>
                            <img src={rulligans} style={{margin: '0 50px'}}/>
                            <img src={polybus} style={{margin: '0 50px'}}/>
                        </div>
                    </div>
                    <div className={styles.footer_area}>
                        <div className={styles.footer_wrapper}>
                            <div className={styles.footer_content}>
                                <div className={styles.footer_list}>
                                    <div className={styles.list_header}>Empressa</div>
                                    <div className={styles.list_btn}>Início</div>
                                    <div className={styles.list_btn}>Blog</div>
                                    <div className={styles.list_btn}>Sobre</div>
                                    <div className={styles.list_btn}>Clientes</div>
                                    <div className={styles.list_btn}>Comunidade</div>
                                    <div className={styles.list_btn}>Contato</div>
                                </div>
                            </div>

                            <div className={styles.footer_content}>
                                <div className={styles.footer_list}>
                                    <div className={styles.list_header}>Serviços</div>
                                    <div className={styles.list_btn}>Product</div>
                                    <div className={styles.list_btn}>Brand</div>
                                    <div className={styles.list_btn}>Desenvolvimento</div>
                                    <div className={styles.list_btn}>Marketing Digital</div>
                                    <div className={styles.list_btn}>Growth Hacking</div>
                                    <div className={styles.list_btn}>Consultorias</div>
                                </div>
                            </div>

                            <div className={styles.footer_content}>
                                <div className={styles.footer_list}>
                                    <div className={styles.list_header}>Serviços Premium</div>
                                    <div className={styles.list_btn}>Will.Starter</div>
                                    <div className={styles.list_btn}>Will.All-in-One</div>
                                    <div className={styles.list_btn}>Will.Digital-Sales</div>
                                    <div className={styles.list_btn}>Will.Sale-Performance</div>
                                    <div className={styles.list_btn}>Will.Growth-Hacker</div>
                                </div>
                            </div>

                            <div className={styles.footer_content}>
                                <div className={styles.footer_list}>
                                    <div className={styles.list_header}>Legal</div>
                                    <div className={styles.list_btn}>Termos & Condições</div>
                                    <div className={styles.list_btn}>Política de privacidade</div>
                                    <div className={styles.list_btn}>Política de Cookies</div>
                                    <div className={styles.list_btn}>Configurações de Cookies</div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className={styles.footer_bottom}>
                        <div className={styles.bottom_wrapper}>
                            <div className={styles.footer_bottom_logo}>
                                <img src={logo} />
                                <div className={styles.bottom_para}>COPYRIGHT © 2022 WILL.HACK. TODOS OS DIREITOS RESERVADOS</div>
                            </div>
                            <div>
                                <div className={styles.theme_btn}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}
export default Footer;    