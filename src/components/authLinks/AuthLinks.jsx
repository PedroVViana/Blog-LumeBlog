import Link from 'next/link';
import styles from './authLinks.module.css'

function AuthLinks() {

  const status = "notauthenticated";

  return (
    <>
    {status === "notauthenticated" ? (
      <Link className={styles.btnLogin} href='/login'>Login</Link>
    ) : (
      <>
        <Link className={styles.linkNav} href="/write">Write</Link>
        <span className={styles.link}>Lougout</span>
      </>
    )}
    </>
  )
}

export default AuthLinks