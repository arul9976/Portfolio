import { useEffect, useState } from 'react'

const WindowWid = () => {
    const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
    console.log('its running...');
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [WindowWidth])

    return WindowWidth < 768;
}

export default WindowWid