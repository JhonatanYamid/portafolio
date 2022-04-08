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
                <link rel="icon" href="/images/firma-white.png" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <Navbar />
            <main className=' bg-slate-100'>
                {props.children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;