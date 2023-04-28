import { HouseData } from '@/typings'
import { housesData } from '@/utils/data';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react'

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
            <div>
                {house && house.address && (
                    <div>{house.address}</div>
                )}
            </div>
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

export const getStaticProps: GetStaticProps = async({ params }) => {
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