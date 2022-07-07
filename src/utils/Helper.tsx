import { useState, useEffect } from 'react'

// export const getImg = (img: string) => {
//     if (img === undefined)
//         return  null;
//     return require(`../assets/${img}`).default
// }

export const useResize = () => {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
        isMobile: false,
        isResponsive: false
    })

    const updateSize = () => {
        setScreenSize({
            width: window.outerWidth,
            height: window.innerHeight,
            isMobile: window.outerWidth < 768,
            isResponsive: window.outerWidth < 1024
        })
    }

    useEffect(() => {
        window.addEventListener("resize", updateSize)
        updateSize()
        
        return () => {
            window.removeEventListener("resize", updateSize)
        }
    }, [])

    return screenSize;
}

