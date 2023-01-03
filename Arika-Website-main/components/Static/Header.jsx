export default function Header() {
    return (
        <>
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <img src="https://i.hizliresim.com/7x1004u.png" alt="logo" className="h-10 w-10" />
                <h1 className="font-semibold text-2xl text-white"><a href="/">Arika Müzik</a></h1>
            </div>
            <div className="hidden lg:flex items-center gap-x-6">
                <div className="text-white/75 hover:text-white/100  cursor-pointer transition-all duration-200"><a href="/"><i className="mr-1.5 fa-solid fa-house"></i>Anasayfa</a></div>
                <div className="text-white/75 hover:text-white/100  cursor-pointer transition-all duration-200"><a href="/komutlar"><i className="mr-1.5 fa-solid fa-terminal"></i>Komutlar</a></div>
                <div className="text-white/75 hover:text-white/100  cursor-pointer transition-all duration-200"><a href="/"><i className="mr-1.5 fa-brands fa-discord"></i>Destek Sunucusu</a></div>
            </div>
            <div className="flex items-center space-x-4">
            <a href="/panel" className="m-auto flex items-center justify-between rounded-lg border border-emerald-500 border-opacity-50 py-2 px-8 font-ginto text-xl font-semibold text-emerald-500 transition-all hover:border-opacity-90 hover:bg-emerald-500 hover:text-white md:m-0">Giriş Yap</a>
            </div>
        </div>
        </>
    );
};