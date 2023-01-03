import Head from "next/head";
import { useToast } from '@chakra-ui/react'


export default function privacy() {
    return (

        <>
            <Head>
                <title>Gizlilik Politikamız | Arika</title>
            </Head>
            <h1 className="text-4xl text-white font-bold text-center mt-20">Gizlilik Politikamız</h1>
            <div className="flex justify-center w-full">
                <div className="flex flex-col mt-20 justify-center text-center w-full">
                    <div className="px-6 lg:px-36 max-w-4xl">
                        <center><p className="text-8xl text-transparent bg-clip-text bg-gradient-to-bl to-violet-500 from-green-600 font-semibold mt-10 mt-10">404</p></center>
                        <center><p className="mt-2 text-2xl text-transparent bg-clip-text bg-gradient-to-bl to-gray-200 from-gray-400 font-semibold ">Bu sayfa mevcut değil.</p></center>
                        <center><p className="mt-1 text-xl text-transparent bg-clip-text bg-gradient-to-bl to-gray-200 from-gray-400 font-semibold mt-10">Aradağın sayfayı bulamadın mı?</p></center>
                        </div>
                        </div>
                        </div>
        </>


    );
};