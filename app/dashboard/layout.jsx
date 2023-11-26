import styles from "@/app/ui/dashboard/dashboard.module.css"
import Sidebar from "@/app/ui/dashboard/sidebar/Sidebar"
import Navbar from "@/app/ui/dashboard/navbar/Navbar"
import Footer from "@/app/ui/dashboard/footer/Footer"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout