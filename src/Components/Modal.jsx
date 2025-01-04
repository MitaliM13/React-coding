import  { useState } from "react";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
       <div className="flex justify-center items-center h-screen">
            {isModalOpen ? (   
                <button 
                    onClick={closeModal}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >close</button>
            ) : (
                <button 
                    onClick={openModal}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >open</button>
            )}
            {isModalOpen && (
                <div className="w-60 h-60 bg-gray-400 z-50 fixed  flex flex-col justify-center items-center">
                    <h1 className="text-white font-bold p-7">Modal is open</h1>
                    <button 
                        onClick={closeModal}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >close</button>
                </div>
            )}
        </div>
    );
}

export default App;
