import Hero from '../components/Static/About/Hero.jsx';
import Text from '../components/Static/About/Text.jsx';
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>Hakkımızda | Arika</title>
            </Head>
            <div className="w-full my-5">
                <Hero />
                <Text />
            </div>
        </>
    );
};