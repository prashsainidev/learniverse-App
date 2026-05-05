import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Learniverse - Unlock Your Potential</title>
                <meta name="description" content="Learniverse is an innovative e-learning platform that blends technology with creative learning experiences." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <link rel="icon" href="/globe.svg" type="image/svg+xml" />
            </Head>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
