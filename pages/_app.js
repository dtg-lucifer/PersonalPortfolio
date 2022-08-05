import Header from '../components/Header/Header';
import SideBar from '../components/Sidebar/SideBar';
import '../styles/scss/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <SideBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
