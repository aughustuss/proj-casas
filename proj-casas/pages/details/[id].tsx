import Header from '@/components/Header';
import { HouseData } from '@/typings'
import { housesData } from '@/utils/data';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import { BiBed, BiBath, BiMoney, BiArea } from 'react-icons/bi'

interface HouseProps {
    house: HouseData;
}

const HouseDetails = ({ house }: HouseProps) => {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Carregando...</div>
    };
    return (
        <>
            <Header />
            <section className='w-5/6 mx-auto py-24 min-h-screen h-auto flex justify-center items-center'>
                <div className='w-full h-full flex flex-col'>
                    
                    <div className='flex flex-col py-2 md:gap-y-0 md:flex-row items-center w-full md:justify-between'>
                        <p className='font-semibold text-xl w-full md:w-auto'>{house.address}</p>
                        <div className='flex flex-row items-center justify-start w-full md:w-auto text-white gap-x-2'>
                            <p className='bg-primaryGreen w-fit rounded-full px-2 md:text-center'>{house.country}</p>
                            <p className='bg-primaryPurple w-fit rounded-full px-2 text-left md:text-center'>{house.type}</p>
                        </div>
                        <p className='text-primaryPurple font-semibold w-full md:w-auto text-xl flex flex-row gap-x-1 items-center'><BiMoney />{house.price}</p>
                    </div>

                    <div className='w-full flex flex-col md:flex-row md:gap-x-4'>
                        <div className='flex flex-col gap-y-2'>

                            <div className='max-w-3xl'>
                                <Image alt='Imagem da casa' src={house.imageLg} className='bg-cover' />
                            </div>

                            <div className='flex flex-row items-center gap-x-2 text-md font-semibold text-primaryPurple'>
                                <p className='flex flex-row items-center gap-x-1'><BiBed />{house.bedrooms}</p>
                                <p className='flex flex-row items-center gap-x-1'><BiBath />{house.bathrooms}</p>
                                <p className='flex flex-row items-center gap-x-1'><BiArea />{house.surface}</p>
                            </div>

                            <div className='max-w-3xl'>
                                {house.description}
                            </div>
                        </div>
                        <div className='flex-1 w-full border rounded-lg'>
                            <div className='flex flex-row items-center gap-x-4 w-full p-8 border'>
                                <Image width={90} height={90} alt='Locador' src={house.agent.image} className='object-cover border border-neutral-300 rounded-full p-1' />
                                <p className='text-center font-semibold text-lg'>{house.agent.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HouseDetails;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = housesData.map((house) => ({
        params: {
            id: house.id.toString(),
        },
    }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;
    const house = housesData.find((house) => house.id == Number(id));
    if (!house) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            house,
        }
    }
}