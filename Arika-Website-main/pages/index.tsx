import Alert from '@mui/material/Alert';
import Hero from '../components/Static/About/Hero.jsx';
import Text from '../components/Static/About/Text.jsx';
import Head from 'next/head';
import Content from '../components/Static/Contents/Content.jsx';
import Text2 from '../components/Static/About/Text2.jsx';
import React from 'react';

export default function Index() {
    return (
        <>
        
        <div className="h-96 flex items-center justify-center">
            <div>
                <h1 className="font-bold text-white text-6xl text-center mb-5">Arika<span className="!font-bold bg-gradient-to-br from-indigo-500 to-cBlue text-transparent bg-clip-text">Bot</span></h1>
                <p className="uppercase text-gray-300 text-sm text-center mb-5">Sınırsız müzik keyfini arika ile yaşayın. Arika ile sunucunuzu canlandırın 7/24 müziğin keyfini çıkarın!</p>
                <a href="/panel" className="bg-blue-400 hover:bg-white shadow-blue-800/20 hover:shadow-white/20 shadow-xl py-3 px-6 mx-auto mt-5 w-36 flex items-center justify-center rounded-lg text-zinc-900 transition-all">
                    <i className="mr-1.5 fa-solid fa-right-to-bracket"/>Panel
                </a>
                <a target="_blank" href="https://discord.com/oauth2/authorize?client_id=786355954231803926&scope=bot&permissions=8" className="bg-green-400 hover:bg-white shadow-blue-800/20 hover:shadow-white/20 shadow-xl py-3 px-6 mx-auto mt-7 w-36 flex items-center justify-center rounded-lg text-zinc-900 transition-all">
                    <i className="mr-1.5 fab fa-discord" />Davet Et
                </a>
            </div>
        </div>
        <Hero />
        <Content />
        <Text2 />
       
        
        </>
    
    
    );
};

