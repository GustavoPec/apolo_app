import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {Routes} from "./stack/index"

export const Route = () =>{
    return(
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>
    )
}