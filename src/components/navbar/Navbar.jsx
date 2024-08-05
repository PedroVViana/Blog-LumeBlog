import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/zap.png" width={24} height={24}/>
            <Image src="/instagram.png" width={24} height={24}/>
            <Image src="/tiktok.png" width={24} height={24}/>
            <Image src="/youtube.png" width={24} height={24}/>
        </div>
        <div className={styles.logo}>LumeBlog</div>
        <div className={styles.links}>
            <ThemeToggle/>
            <Link className={styles.linkNav} href='/'>HomePage</Link>
            <Link className={styles.linkNav} href='/'>Contact</Link>
            <Link className={styles.linkNav} href='/'>About</Link>
            <AuthLinks/>
        </div>
    </div>
  )
}

export default Navbar