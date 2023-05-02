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
};

export interface HouseContextType {
    country: string;
    setCountry: (value: string) => void;
    countries: string[];
    property: string;
    setProperty: (value: string) => void;
    properties: string[];
    price: string;
    setPrice: (value: string) => void;
    houses: any;
    loading: boolean,
    handleClick: (value: any) => void;
};

export interface SideBarType {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void
};

export interface IUser {
    _id: string;
    email: string;
    username: string;
    password: string;
    matchPassword: string;
};

export interface UserForm {
    email: string;
    username: string;
    password: string;
}