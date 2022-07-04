import Footer from "../components/footer"
import Nav from "../components/nav"

const Error = () => {
    return (
        <div >
            <Nav />
            <div style={{height: "100vh"}}>
            <h1>Error: Page not found</h1>
            </div>
            <Footer/>
        </div>
    )
}
export default Error;