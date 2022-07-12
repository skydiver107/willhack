import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Infinity = () => {
    const navigate = useNavigate();
    const { isMobile } = useResize();
    const { pathname } = useLocation();   
    
    return (
        <div className={styles.main}>
            <div className={styles.main_content}>
                <div className={styles.section_title}>
                    <div className={styles.first_title}>Desde o início ao infinito</div>
                    <div className={styles.second_title}>A gente entende seus desafios. É por isso que fazemos diferente: combinamos<br /> times de alta performance e metodologias ágeis para oferecer produtos de<br /> sucesso e resultados reais pra sua empresa.</div>
                </div>

                <div className={styles.section_content}>
                    <table style={{width: '100%'}}>
                        <thead>
                            <tr>
                                <th>CRITÉRIO</th>
                                <th style={{fontSize: '35px'}}>will.hack</th>
                                <th>CONTRATAÇÃO</th>
                                <th>CONSULTORIA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tempo para iniciar</td>
                                <td style={{backgroundColor: '#222222'}}>1 dia</td>
                                <td>+2 meses</td>
                                <td>+2 meses</td>
                            </tr>
                            <tr>
                                <td>Custo de Contratação</td>
                                <td style={{backgroundColor: '#222222'}}>R$ 0.00</td>
                                <td>+R$ 50K</td>
                                <td>R$ 0.00</td>
                            </tr>
                            <tr>
                                <td>Garantia de Qualidade</td>
                                <td style={{backgroundColor: '#222222'}}><CheckCircleIcon sx={{color: '#1fcc51'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                            </tr>
                            <tr>
                                <td>Flexibilidade</td>
                                <td style={{backgroundColor: '#222222'}}><CheckCircleIcon sx={{color: '#1fcc51'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                            </tr>
                            <tr>
                                <td>Curadoria de Talentos</td>
                                <td style={{backgroundColor: '#222222'}}><CheckCircleIcon sx={{color: '#1fcc51'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                            </tr>
                            <tr>
                                <td>Growth Hack</td>
                                <td style={{backgroundColor: '#222222'}}><CheckCircleIcon sx={{color: '#1fcc51'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                            </tr>
                            <tr>
                                <td>Marketing Digital</td>
                                <td style={{backgroundColor: '#222222'}}><CheckCircleIcon sx={{color: '#1fcc51'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                            </tr>
                            <tr>
                                <td>Consultoria Ativa</td>
                                <td style={{backgroundColor: '#222222'}}><CheckCircleIcon sx={{color: '#1fcc51'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                                <td><CancelIcon sx={{color: '#b22f29'}}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>           
        </div>
    )
}
export default Infinity;    