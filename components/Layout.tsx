import Header from "./Header";
import Head from "next/head";

function Layout({children}){
    return (

        <div>
          
               <Header />
            <main>
            {children}
            </main>
        </div>
    )
}

export default Layout;