import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";

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
    rentable: boolean;
    data: ContactFormData | null;
};

export interface HeaderLink {
    id: string;
    href: string;
    offset: string;
    children: string;
};

export interface Accordion {
    id: number;
    icon: IconType;
    content: string;
    title: string;
    focused: boolean;
};

export interface Contact {
    id: string;
    icon: IconType;
    title: string;
    info: string | null;
    button: string;
}

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
    name: string;
    password: string;
    matchPassword: string;
};

export interface UserForm {
    email: string;
    name: string;
    password: string;
}

export interface LoginUserParams {
    email: string;
    password: string;
};

export interface ContactFormData {
    rentDays: string;
    name: string;
    tel: string;
    email: string;
    msg: string;
    notSendMessage: string;
    ownerAnswer: boolean;
}