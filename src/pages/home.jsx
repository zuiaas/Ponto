import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    return (
    <>

        <div className="w-full h-full bg-gray-950 items-center justify-center">
            <button className="bg-gray-900 flex p-3 rounded-2xl text-white cursor-pointer hover:bg-gray-800">Clique aqui</button>
        </div>

    </>
    )
}