import Head from 'next/head'
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = props => {
    return (
        <>
            <Head>
                <title>Jhonatan Yamid</title>
                <meta name="jhonatan yamid" content="Portafolio de Jhonatan Yamid" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className=' bg-slate-100'>
                {props.children}
            </main>
            {/* <Footer /> */}
        </>
    );
}

export default Layout;