import React from "react";

export default function Home() {
    return (
        <div className="bg-gradient-to-b dark:from-body-darkMidOne dark:via-body-darkMidTwo dark:to-body-darkMidOne from-slate-400 via-white to-slate-400 min-h-screen w-full flex flex-col items-center justify-center">
            <div id="container" className="fixed flex flex-col h-full w-full items-center justify-center">
                <div className="fixed flex w-full h-48 justify-center items-center top-0 mt-10">
                    <div className="flex items-center justify-center">
                        {/* TODO: Definir src da imagem dinamicamente se necessário */}
                        <img id="ponto-image" src="" width="300px" alt="Ponto" />
                    </div>
                </div>
                <div id="optionsHome" className="flex w-full h-auto flex-col items-center justify-center gap-6">
                    <div id="line-one" className="flex flex-row gap-7">
                        {/* Game Buttons - migrar depois */}
                    </div>
                    <div id="line-two" className="flex flex-row gap-7">
                        {/* Game Buttons - migrar depois */}
                    </div>
                    <div className="flex items-center justify-center flex-row p-3 mt-3">
                        <button id="jogar" disabled className="flex flex-row items-center justify-center gap-2 px-4 h-12 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-default" style={{background: "linear-gradient(90deg, #F59E0B, #D97706)"}}>
                            <img src="../../public/icons/play.svg" width="20px" alt="Jogar" />
                            <h2 className="text-xl text-black opacity-75 font-bold">Jogar</h2>
                        </button>
                    </div>
                </div>
                <div id="credits" className="fixed bottom-0 flex p-2 w-full flex-col justify-end text-end">
                    <h2 className="text-sm text-gray-400">Ponto - Beta v1.0</h2>
                    <h2 className="text-sm text-gray-400">© Copyright Pondetos</h2>
                </div>
            </div>
        </div>
    )
}