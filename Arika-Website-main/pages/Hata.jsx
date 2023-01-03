import Head from 'next/head';

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 | Arika</title>
            </Head>
            <div className="flex justify-center w-full">
            <div className="flex flex-col mt-20 justify-center text-center w-full">
            <div className="px-6 lg:px-36 max-w-4xl">
            <center><p className="text-8xl text-transparent bg-clip-text bg-gradient-to-bl to-violet-500 from-green-600 font-semibold mt-10 mt-10">404</p></center>
            <center><p className="mt-2 text-2xl text-transparent bg-clip-text bg-gradient-to-bl to-gray-200 from-gray-400 font-semibold ">Bu sayfa mevcut değil.</p></center>
            <center><p className="mt-1 text-xl text-transparent bg-clip-text bg-gradient-to-bl to-gray-200 from-gray-400 font-semibold mt-10">Aradağın sayfayı bulamadın mı?</p></center>
            <div className="mt-10">
            <div className="w-full h-1 my-3 bg-zinc-500/0 rounded-xl mt-10">
                <div className="w-full hover:bg-zinc-500/5 px-4 my-2 hover:px-4 rounded-lg transition-all duration-200 cursor-pointer border border-white/5 py-5 flex justify-between items-center">
                <div className="flex gap-x-4">
                    <i className="flex items-center bg-violet-500/10 rounded-lg text-xl w-12 h-12 text-violet-600 px-3 py-2 fal fa-arrow-left"></i>
                    <div className="text-left mr-3">
                        <p className="text-lg text-violet-200"><a href="/">Geri dön</a></p>
                        <p className="text-sm text-white/50"><a href="/">Yönlendirilmeden önce geldiğiniz sayfaya geri dönün.</a></p>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
            </div>
        </>
    );
};