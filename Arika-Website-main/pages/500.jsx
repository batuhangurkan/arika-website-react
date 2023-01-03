import Head from 'next/head';

export default function NotFound() {
    return (
        <>
            <Head>
                <title>500 | Arika</title>
            </Head>
            <h1 className="text-5xl text-white font-bold text-center mt-20">Opps! 500</h1>
            <p className="text-gray-400 text-center mb-20 text-lg mt-5">Galiba bir sunucu hatası bulunuyor. Servis durumlarını kontrol etmeyi unutma! En yakın zamanda düzeltmeye çalışacağız</p>
            <a href="/" className="bg-green-400 hover:bg-white shadow-blue-800/20 hover:shadow-white/20 shadow-xl py-3 px-6 mx-auto mt-7 w-36 flex items-center justify-center rounded-lg text-zinc-900 transition-all">
                    <i className="mr-1.5 fas fa-home" />Anasayfa
                </a>
        </>
    );
};