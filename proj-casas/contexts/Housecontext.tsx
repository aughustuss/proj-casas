import React, { createContext, useEffect, useState } from "react";
import { HouseData, HouseContextType } from "@/typings";
import { housesData } from "@/utils/data";

interface HouseProps {
    children: React.ReactNode;
}

const HouseContext = createContext<HouseContextType>({
    country: '',
    setCountry: () => { },
    countries: [],
    property: '',
    setProperty: () => { },
    properties: [],
    price: '',
    setPrice: () => { },
    houses: [],
    loading: false,
});

const HouseContextProvider: React.FC<HouseProps> = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState<string>('Selecione a sua localidade');
    const [countries, setCountries] = useState<string[]>([]);
    const [property, setProperty] = useState<string>('Selecione o tipo de imóvel');
    const [properties, setProperties] = useState<string[]>([]);
    const [price, setPrice] = useState<string>('Selecione o preço');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const allCountries = houses.map((country) => { return country.country });
        const uniqueCountries = new Set(allCountries);
        setCountries(Array.from(uniqueCountries));
    }, [houses]);
    useEffect(() => {
        const allProperties = houses.map((property) => {return property.type});
        const uniqueProperties = new Set(allProperties);
        setProperties(Array.from(uniqueProperties));
    }, [houses])
    return (
        <HouseContext.Provider value={{
            country,
            setCountry,
            countries,
            property,
            setProperty,
            properties,
            price,
            setPrice,
            houses,
            loading,
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseContext;
export { HouseContextProvider }