export default function Footer() {
    return (
       <>
        <div className="bg-dark-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 mt-20">
				<div className="p-5 ">
					<ul>
						<p className="text-white font-bold text-3xl pb-6">
							Arika<span className="text-blue-600">Bot</span>
						</p>
						<img src="https://i.hizliresim.com/7x1004u.png" alt="logo" className="h-20 w-20" />
						<div className="flex gap-6 pb-5">
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white/75 font-bold text-2xl pb-4">Önemli Linkler</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<a href="/"><i className="mr-1.5 fa-solid fa-house"/>Anasayfa</a>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <a href="/panel"><i className="mr-1.5 fa-solid fa-arrow-right-to-bracket"></i>Kontrol Paneli</a>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <a href="/status"><i className="mr-1.5 fa-solid fa-circle-exclamation"></i>Servis Durumları</a>
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white/75 font-bold text-2xl pb-4">Oylama</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <a href="https://top.gg"><i className="mr-1.5 fa-solid fa-face-smile-hearts"></i>Top.GG</a>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <a href="https://discords.com"><i className="mr-1.5 fa-solid fa-face-smile-hearts"></i>Discords.com</a>
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white/75 font-bold text-2xl pb-4">Topluluk</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <a href="https://discord.com"><i className="mr-1.5 fa-brands fa-discord"/>Destek Sunucusu</a>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <a href="https://discord.com"><i className="mr-1.5 fa-brands fa-twitter"/>Twitter</a>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <a href="https://discord.com"><i className="mr-1.5 fa-brands fa-instagram"/>Instagram</a>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <a href="https://discord.com"><i className="mr-1.5 fa-brands fa-github"/>Github</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-dark-50">
				<h1 className=" text-white font-semibold">
					© 2023 Tüm hakları saklıdır. | Tasarım  <p className="text-red-500">❤</p> by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						<a href="https://batuhangurkan.xyz">Scréw</a>{" "}
					</span>
				</h1>
			</div>
        </> 
    );
};
