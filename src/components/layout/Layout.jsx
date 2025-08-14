
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

/**
 * @param {{ children: React.ReactNode }} props
 */
const Layout = ({ children }) => {
  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen flex flex-col" role="document">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
