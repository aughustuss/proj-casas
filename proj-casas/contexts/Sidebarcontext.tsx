import {createContext, useState} from 'react'
import { SideBarType } from '@/typings'

interface SideBarProps {
    children: React.ReactNode
};

export const SideBarContext = createContext<SideBarType>({
    isOpen: false,
    setIsOpen: () => {},
});

const SideBarProvider: React.FC<SideBarProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const changeSideBarState = (value: boolean) => {
        setIsOpen(prev => !prev);
    }
    const SideBar: SideBarType = {
        isOpen,
        setIsOpen: changeSideBarState,
    }
    return (
        <SideBarContext.Provider value={SideBar} >
            {children}
        </SideBarContext.Provider>
    )
};

export default SideBarContext
export {SideBarProvider}