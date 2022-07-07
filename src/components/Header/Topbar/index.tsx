import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import { Link } from "react-router-dom";
import { useResize } from "./../../../utils/Helper";
import { useNavigate } from "react-router-dom";
import ClickAwayListener from 'react-click-away-listener';
import logoImg from './../../../assets/images/logo_img.png'
import Arrow from '@mui/icons-material/ArrowForward';

const Topbar = (props: any) => {
    const [isOpen, SetisOpen] = useState(false);
    const navigate = useNavigate();
    const {isMobile, isResponsive} = useResize();

    return (
        <div className={styles.navbar}>
            <div className={styles.navlink_area}>                
                <div className={styles.navbarLink}>
                    <>COMECE A JORNADA DE TRANSFORMAÇÃO DIGITAL DO SEU NEGÓCIO</>
                    <div style={{marginLeft: '15px'}}><Arrow sx={{fontSize: '15px'}}/></div>
                </div>  
             </div>
        </div>
    )
}
export default Topbar;    




