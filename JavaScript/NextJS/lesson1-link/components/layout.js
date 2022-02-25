import Footer from "./footer";
import Nav from "./nav";



const Layout =({children})=>{
    return(
        <div>
            <Nav/>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout
