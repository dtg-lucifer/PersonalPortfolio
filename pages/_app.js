import Header from '../components/Header/Header';
import SideBar from '../components/Sidebar/SideBar';
import '../styles/scss/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <div style={{ maxHeight: "100vh" }}>
            <Header />
            <div id="SBS__CONTAINER">
                <SideBar />
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
