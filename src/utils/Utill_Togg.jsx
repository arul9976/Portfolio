import { createContext, useState } from "react";

export const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
    const [TogglePro, setTogglePro] = useState(null);

    const ToggleBtn = () => setTogglePro(!TogglePro);
    const value = { TogglePro, ToggleBtn };

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
}