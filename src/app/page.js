import styles from './page.module.css'
import NavBar from './components/navBar'
export default function Home() {
  return (
    <main className={styles.main}>
     <NavBar/>
    </main>
  )
}
