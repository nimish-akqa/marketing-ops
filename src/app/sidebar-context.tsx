'use client';
import { createContext, useContext, useState } from 'react';

type SidebarContextValueType = {
    sidebarCollapsed: boolean;
    setSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};
const initialState: SidebarContextValueType = {
    sidebarCollapsed: false,
    setSidebarCollapsed: () => null
};

const SidebarContext = createContext<SidebarContextValueType>(initialState);

export default function SidebarContextProvider({
    children
}: {
    children: React.ReactNode;
}) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
    const value: SidebarContextValueType = {
        sidebarCollapsed,
        setSidebarCollapsed
    };

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
}
export const useSidebarContext = () => useContext(SidebarContext);
