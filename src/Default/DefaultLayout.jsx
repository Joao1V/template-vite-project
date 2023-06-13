import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const DefaultLayout = ({children}) => {

    return (
        <div>
            <Header/>
            <main className={'h-100'}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default DefaultLayout;
