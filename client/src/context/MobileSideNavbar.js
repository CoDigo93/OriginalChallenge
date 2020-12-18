import React,{createContext,useContext,useState} from 'react'

const MobileSideNavbarContext = createContext();

const MobileSideNavbar = ({children}) => {
    const [showSideNavigation , setShowSideNavigation] = useState(false);

    return (
        <MobileSideNavbarContext.Provider value={{showSideNavigation, setShowSideNavigation}}>
            {children}
        
        </MobileSideNavbarContext.Provider>
    );
}

export default MobileSideNavbar;

export function useSideNavbar(){
    const context = useContext(MobileSideNavbarContext)
    if(!context) throw new Error('useSideNavbar must be used within MobileSideNavbarContext Provider')
    const {showSideNavigation,setShowSideNavigation} = context;
    return  {showSideNavigation,setShowSideNavigation};
} 