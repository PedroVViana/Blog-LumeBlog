"use client"
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

function ThemeProvider({ children }) {

    const {theme} = useContext(ThemeContext)
    const [mound,setmound] = useState(false)

    useEffect(() => {
        setmound(true);
    }, []);

    if (mound) {
        return (
          <div className={theme}>{children}</div>
        )
    }
}

export default ThemeProvider