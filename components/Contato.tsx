import { contacts } from '@/utils/data'
import React from 'react'

const Contato = () => {
    return (
        <>
            <section className='w-full flex flex-col h-auto gap-y-4' id="contato">
                <div className='flex flex-col w-full gap-y-2 lg:items-start items-center font-oswald'>
                    <p className='text-lg lg:text-2xl text-secondary'>Entre em contato</p>
                    <p className='text-primary text-3xl lg:text-5xl font-semibold text-center lg:text-start' >Nos encontre de uma das formas abaixo</p>
                </div>
                <div className='flex flex-col lg:flex-row w-full font-poppins'>
                    <div className='flex flex-1 h-fit'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 lg:w-5/6 gap-2 place-items-center w-full '>
                            {contacts && contacts.map((contact) => {
                                return (
                                    <div key={contact.id} id={contact.id} className='border border-slate-200 min-h-[140px] p-2 rounded-md flex flex-col justify-between w-full hover:scale-105 transition duration-200'>
                                        <div className='flex flex-row w-full gap-x-8'>
                                            <div className='p-4 bg-quartiary rounded-md text-quinary'>
                                                <contact.icon/>
                                            </div>
                                            <div className='w-full flex flex-col items-start'>
                                                <p className='text-base lg:text-lg text-primary font-semibold font-oswald'>{contact.title}</p> 
                                                <p className='text-xs text-gray'>{contact.info}</p>
                                            </div>
                                        </div>
                                        <button className='bg-quartiary text-quinary text-sm font-semibold w-full text-center p-3 rounded-md hover:scale-105 hover:bg-quinary hover:text-white transition duration-200'>
                                            {contact.button}
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex flex-1 w-full p-2 justify-center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2690121.1724087475!2d-44.665861316559834!3d-21.380449379569495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1685107328376!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contato