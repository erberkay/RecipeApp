import React from "react";
import {
    TouchableOpacity,
    Text,
} from 'react-native'

import useAuth from "../utility/Auth";

const MenuScreen = () => {
    const { SignOut } = useAuth()
    
    return (
        <TouchableOpacity
            onPress={() => {
                SignOut()
            }}
        >
            <Text>Çıkış Yap</Text>
        </TouchableOpacity>
    )
}

export default MenuScreen