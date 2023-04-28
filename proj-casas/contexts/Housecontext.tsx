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
    handleClick: () => { },
});

const HouseContextProvider: React.FC<HouseProps> = ({ children }) => {
    const [houses, setHouses] = useState<HouseData[]>(housesData);
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
    }, []);
    useEffect(() => {
        const allProperties = houses.map((property) => { return property.type });
        const uniqueProperties = new Set(allProperties);
        setProperties(Array.from(uniqueProperties));
    }, []);
    const handleClick = () => {
        const isDefault = (str:string) => {
            return str.split(' ').includes('Selecione');
        }
        setLoading(!loading);
        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split(' ')[2]);
        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);
            if(house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice){
                return house;
            };
            if(isDefault(country) && isDefault(property) && isDefault(price)){
                return house
            };

            if(!isDefault(country) && isDefault(property) && isDefault(price)){
                return house.country == country;
            };
            if(isDefault(country) && !isDefault(property) && isDefault(price)){
                return house.type == property;
            };
            if(isDefault(country) && isDefault(property) && !isDefault(price)){
                if(housePrice >= minPrice && housePrice <= maxPrice){
                    return house;
                };
            };

            if(isDefault(country) && !isDefault(property) && !isDefault(price)){
                if(housePrice >= minPrice && housePrice <= maxPrice){
                    return house.type == property;
                };
            };
            if(!isDefault(country) && !isDefault(property) && isDefault(price)){
                return house.country == country && house.type == property
            };
            if(!isDefault(country) && isDefault(property) && !isDefault(price)){
                if(housePrice >= minPrice && housePrice <= maxPrice){
                    return house.country == country;
                };
            };
            if(!isDefault(country) && !isDefault(property) && !isDefault(price)){
                if(housePrice >= minPrice && housePrice <= maxPrice){
                    return house.type == property;
                };
            };
        });
        setTimeout(() => {
            return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses), setLoading(false);
        }, 1000);
    }
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
            handleClick,
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseContext;
export { HouseContextProvider }