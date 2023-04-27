import { StaticImageData } from "next/image";

export interface HouseData {
    id: number;
    type: string;
    name: string;
    description: string;
    image: string | StaticImageData;
    imageLg: string | StaticImageData;
    country: string;
    address: string;
    bedrooms: string;
    bathrooms: string;
    surface: string;
    year: string;
    price: string;
    agent: {
        image: string | StaticImageData;
        name: string;
        phone: string;
    };
}