import { FC } from 'react'
import Navbar from '../Components/Ui/Navbar'
import Footer from '../Components/Ui/Footer'
interface AuxProps {
  children: JSX.Element
}
const MainLayout: FC<AuxProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout