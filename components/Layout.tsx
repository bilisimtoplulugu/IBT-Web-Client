import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

function Layout({ children }) {
    return (

        <div>

            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;