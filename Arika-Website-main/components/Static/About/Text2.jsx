export default function Text2() {

    return(
        <div className="flex flex-col items-center justify-center w-full h-auto bg-dark-50 py-12 md:py-24">
            <div className="flex h-auto w-full flex-col justify-between rounded-lg bg-none p-6 md:flex-row md:bg-dark-50 md:p-12">
                <div className="mb-1 max-w-2xl text-center text-emerald-500 md:mb-0 md:text-left">
                <h1 className="mb-2 font-ginto text-4xl font-extrabold text-center">Haydi Hemen Şimdi, Topluluğuna Dahil Et!</h1>
                <a href="/davet" className="m-auto flex items-center justify-between rounded-lg border border-emerald-500 border-opacity-40 py-3 px-52 font-ginto text-xl font-semibold text-emerald-500 transition-all hover:border-opacity-90 hover:bg-emerald-500 hover:text-white md:m-5">Topluluguna Davet Et</a>
                </div>
            </div>
        </div>
    );
};