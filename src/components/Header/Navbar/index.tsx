import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import { Link } from "react-router-dom";
import { useResize } from "./../../../utils/Helper";
import { useNavigate } from "react-router-dom";
import ClickAwayListener from 'react-click-away-listener';
import logoImg from './../../../assets/images/logo_img.png'
import DownArrow from '@mui/icons-material/KeyboardArrowDown';

const Navbar = (props: any) => {
    const [isOpen, SetisOpen] = useState(false);
    const ToggleMenu = () => {
        SetisOpen(!isOpen);
    }

    const handleClickAway = () => {
        SetisOpen(false);
    }
    const navigate = useNavigate();
    const {isMobile, isResponsive} = useResize();

    return (
        <>
        {!isResponsive
        ?<div className={styles.navbar}>
            <div className={styles.logo_area}>
                <img src={logoImg} style={{width: '40px', height: '40px'}}/>
                <div className={styles.logo_content}>will.<span style={{fontWeight: '500'}}>hack</span></div>
            </div>
            <div className={styles.navlink_area}>                
                <a className={styles.navbarLink}>SOLUÇÕES<span><DownArrow sx={{fontSize: '10px'}}/></span></a>  
                <a className={styles.navbarLink}>ONBOARDING</a>  
                <a className={styles.navbarLink}>BRANDING</a>  
                <a className={styles.navbarLink}>DEVELOP</a>                
                <a className={styles.navbarLink}>GO TO MARKET</a>
                <a className={styles.navbarLink}>YOUR WAY</a>
                <a className={styles.navbarLink}>CONTACTO</a>
                <a className={styles.navbarLink} style={{marginRight: '60px'}}>SIGN IN</a>
                <a className={styles.navbarLink} 
                    style={{ backgroundColor: '#e6e6e6',
                            color: '#000000',
                            padding: '10px 20px',
                            borderRadius: '5px'}}>
                    SIGN UP
                </a>
            </div>
        </div>
        :
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={styles.navbar}>
                <div className={styles.navlink_area}>
                    <a onClick={ToggleMenu}>
                        <i className="fa fa-bars" style={{marginTop:'0px', fontSize: '30px'}}></i>
                    </a>
                        {isOpen? 
                        <div className={styles.navMenu}>
                            <a className={styles.navbarLink} onClick={() => {console.log("clicked");props.fullpageApi.moveTo(2, 0); handleClickAway();}}>COLLECTIONS</a>
                            <a className={styles.navbarLink} onClick={() => {props.fullpageApi.moveTo(3, 0); handleClickAway();}}>ROADMAP</a>
                            <a className={styles.navbarLink} onClick={() => {props.fullpageApi.moveTo(4, 0); handleClickAway();}}>UTILTIES</a>
                            <a className={styles.navbarLink} onClick={() => {props.fullpageApi.moveTo(5, 0); handleClickAway();}}>ADOPT</a>
                        </div>
                        :
                        <div></div>
                        }
                </div>
            </div>
        </ClickAwayListener>
        }
        </>
    )
}
export default Navbar;    




