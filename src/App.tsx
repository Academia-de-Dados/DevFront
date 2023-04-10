import React from "react";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter, Route } from "react-router-dom";
import AppRoutes from "./Routes";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>           
        </AuthProvider>
    ) 
}

export default App;
