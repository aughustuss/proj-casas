import Image from 'next/image'
import React, {useState} from 'react'
import Team from '../public/images/our-team.jpg'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
import { TbTargetArrow } from 'react-icons/tb'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdOutlineWorkHistory } from 'react-icons/md'
const History = () => {
    const [isExpand, setExpand] = useState<string>('');
    console.log(isExpand);
    return (
        <>
            <section id='history' className='w-full flex flex-col py-16 h-auto gap-y-4 text-gray'>
                <div className='w-full flex flex-col md:flex-row h-full'>
                    <div className='flex-1 flex justify-center md:justify-start'>
                        <Image alt="Nosso time" src={Team} className='max-h-[400px] lg:max-h-[600px] h-full w-5/6 rounded-md self-start' />
                    </div>
                    <div className='flex-1 flex flex-col gap-y-8'>
                        <div className='w-full flex flex-col items-center lg:items-start gap-y-2 font-oswald max-w-md'>
                            <p className='text-secondary text-2xl'>O nosso time</p>
                            <p className=' text-primary text-5xl font-semibold text-center'>Saiba o que fazemos</p>
                            <p className='font-roboto text-sm mt-5'>Buscando inovação e conforto, nós surgimos com a intenção de inovar o mercado imobiliário. Trazendo as melhores oportunidades para quem almeja mudar de vida.</p>
                        </div>
                        <div>
                            <Accordion className='text-sm flex flex-col gap-y-2' allowMultipleExpanded={false} preExpanded={[0]}>
                                <AccordionItem id="weAre" className='flex flex-col gap-y-4 border-slate-200 p-4 border' itemRef='weAre' onClick={(e) => setExpand(e.currentTarget.id)}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='text-primary font-oswald text-xl font-semibold flex flex-row justify-between'>
                                            <div className='bg-quartiary p-3 rounded-md'>
                                                <TbTargetArrow className='bg-quartiary' size={18} />
                                            </div>
                                            <p>Nossa Missão</p>
                                            <div className='bg-quartiary p-3 rounded-md'>
                                                <IoMdArrowDropdown/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod vero tempore porro quae. Quibusdam molestiae mollitia doloribus quae aliquam? Maxime assumenda voluptates facere beatae error non veritatis pariatur aperiam rerum!
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem id="weAre" className='flex flex-col gap-y-4 border-slate-200 p-4 border' itemRef='weAre' onClick={(e) => setExpand(e.currentTarget.id)}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='text-primary font-oswald text-xl font-semibold flex flex-row justify-between'>
                                            <div className='bg-quartiary p-3 rounded-md'>
                                                <MdOutlineWorkHistory className='bg-quartiary' size={18} />
                                            </div>
                                            <p>A Nossa História</p>
                                            <div className='bg-quartiary p-3 rounded-md'>
                                                <IoMdArrowDropdown/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod vero tempore porro quae. Quibusdam molestiae mollitia doloribus quae aliquam? Maxime assumenda voluptates facere beatae error non veritatis pariatur aperiam rerum!
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default History