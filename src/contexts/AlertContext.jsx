import { createContext, useContext, useState } from "react"

const AlertContext = createContext();

function AlertProvider({ children }) {

    const [alert, setAlert] = useState({
        type: '',
        title: '',
        status: '',
        message: ''
    })



    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    )
}

function useAlertContext() {
    const context = useContext(AlertContext);
    return context
}

export { AlertProvider, useAlertContext }