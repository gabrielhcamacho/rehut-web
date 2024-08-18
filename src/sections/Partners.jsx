import React from 'react'
import { AiOutlineGoogle, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

export default function Partners() {
    return (
        <>
            <div className='w-100 flex flex-col items-center'>
                <p className="uppercase text-primary text-xs lg:text-sm font-medium">parcerias</p>
                <h3 className="text-dark-blue lg:text-4xl px-8 mt-2">Nossos Parceiros</h3>
            </div>
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">

                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                    <div className="flex-shrink-0">
                        <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-primary text-white">
                            <AiOutlineGoogle size={30} />
                        </div>
                    </div>
                    <h3 className="text-2xl sm:text-xl text font-semibold py-4">
                        Google
                    </h3>
                    <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                        Tecnologia de dados do Google integrada para poder fornecer dados acurados e confiaveis para criação de análises e anúncios
                    </p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                    <div className="flex-shrink-0">
                        <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-primary text-white">
                            <FaFacebookF size={30} />
                        </div>
                    </div>
                    <h3 className="text-2xl sm:text-xl text font-semibold py-4">
                        Facebook
                    </h3>
                    <p className="text-md text-gray-500 dark:text-gray-300 py-4">
                       Facebook é integrado a nossa plataforma para poder perfomar anúncios e fornecer dados de público
                    </p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                    <div className="flex-shrink-0">
                        <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-primary text-white">
                            <AiOutlineInstagram size={30} />
                        </div>
                    </div>
                    <h3 className="text-2xl sm:text-xl text font-semibold py-4">
                        Instagram
                    </h3>
                    <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                       Tecnologia acoplada a nossa plataforma para criação de anúncios e captar dados confiaveis de engajamento de público
                    </p>
                </div>
            </div>
        </>

    )
}
