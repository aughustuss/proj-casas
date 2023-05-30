import Image from 'next/image'
import React, { useState } from 'react'
import Team from '../public/images/our-team.jpg'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { accordions } from '@/utils/data'
const History = () => {
    const [isExpand, setExpand] = useState<number | null>(null);
    const handleExpandedAccordion = (accordionId: number) => {
        setExpand(accordionId);
    };
    return (
        <>
            <section id='history' className='w-full flex flex-col py-16 h-auto gap-y-4 text-gray'>
                <div className='w-full flex flex-col md:flex-row items-center h-full gap-x-8'>
                    <div className='flex-1 flex justify-center md:justify-start w-full lg:p-2'>
                        <Image alt="Nosso time" src={Team} className='w-full object-cover h-full rounded-md max-h-[400px] lg:max-h-[650px] self-start' />
                    </div>
                    <div className='flex-1 flex flex-col gap-y-8'>
                        <div className='w-full flex flex-col items-center lg:items-start gap-y-2 font-oswald max-w-md'>
                            <p className='text-secondary text-lg :text-2xl'>O nosso time</p>
                            <p className=' text-primary text-3xl lg:text-5xl font-semibold text-center'>Saiba o que fazemos</p>
                            <p className='font-roboto text-sm mt-5'>Buscando inovação e conforto, nós surgimos com a intenção de inovar o mercado imobiliário. Trazendo as melhores oportunidades para quem almeja mudar de vida.</p>
                        </div>
                        <div>
                            <Accordion className='text-sm flex flex-col gap-y-2' allowMultipleExpanded={false} preExpanded={[0]}>
                                {accordions && accordions.map((accordion) => {
                                    return (
                                        <AccordionItem key={accordion.id} onClick={() => handleExpandedAccordion(accordion.id)} className={`${accordion.id === isExpand ? 'shadow-lg shadow-quartiary' : ''} flex flex-col gap-y-4 border-slate-200 p-2 border`} uuid={accordion.id}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton className='text-primary font-oswald text-xl font-semibold flex flex-row justify-between items-center'>
                                                    <div className='bg-quartiary text-quinary p-3 rounded-md'>
                                                        <accordion.icon />
                                                    </div>
                                                    <div className='lg:text-lg text-base'>
                                                        {accordion.title}
                                                    </div>
                                                    <div className='bg-quartiary text-quinary p-3 rounded-md'>
                                                        {accordion.id === isExpand ?<IoMdArrowDropup/>  : <IoMdArrowDropdown /> }
                                                    </div>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                {accordion.content}
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default History