import Image from 'next/image'
import styles from './page.module.css'
import Header from './containers/Header'
import Sidebar from './containers/Sidebar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Sidebar></Sidebar>
    </main>
  )
}
