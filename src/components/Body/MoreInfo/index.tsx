import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import phoneCall from './../../../assets/images/phone_img.png';
import polybus from './../../../assets/images/polypus.png';
import willhack from './../../../assets/images/WillHack.png';
import rulligans from './../../../assets/images/Rulligans_Digital.png';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        backgroundColor: '#222222',
        border: `1px solid #737373`,
        // '&:not(:last-child)': {
        //     borderBottom: 0,
        // },
        '&:before': {
            display: 'none',
        },
        padding: '20px',
        margin: '10px 0',
        borderRadius: '5px'
}));
  
const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<AddOutlinedIcon sx={{ fontSize: '1rem', color: '#FFFFFF' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const MoreInfo = () => {
    const navigate = useNavigate();
    const { isMobile } = useResize();
    const { pathname } = useLocation();
    
    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };
    
    return (
        <div className={styles.main}>
            <div className={styles.main_content}>
                <div className={styles.section_title}>
                    <div className={styles.first_title}>Precisa de mais informações?</div>
                    <div className={styles.second_title}>Quer conversar com a gente? Nossa equipe de especialistas estão te plantão<br /> para esclarecer qualquer dúvida que você tenha sobre a jornada. </div>
                </div>

                <div className={styles.section_content}>
                    <div className={styles.phonecall_btn}>
                        <img src={phoneCall} />
                    </div>

                    <div className={styles.question_content}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className={styles.typography}>01.&nbsp;&nbsp;&nbsp;&nbsp;Os melhores squads para seu produto digital</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography className={styles.typography}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography className={styles.typography}>02.&nbsp;&nbsp;&nbsp;&nbsp;Gestão especializada para você ganhar tempo</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography className={styles.typography}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography className={styles.typography}>03.&nbsp;&nbsp;&nbsp;&nbsp;Cultura de Produto que potencializa as entregas</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography className={styles.typography}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography className={styles.typography}>04.&nbsp;&nbsp;&nbsp;&nbsp;Mais visibilidade e controle da sua iniciativa</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography className={styles.typography}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className={styles.bottom_content}>
                        <div className={styles.bottom_header}>DESENVOLVIDO COM 🤍 PARA VOCÊ POR</div>
                        <div className={styles.bottom_area}>
                            <img src={willhack} style={{margin: '0 50px'}}/>
                            <img src={rulligans} style={{margin: '0 50px'}}/>
                            <img src={polybus} style={{margin: '0 50px'}}/>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}
export default MoreInfo;    