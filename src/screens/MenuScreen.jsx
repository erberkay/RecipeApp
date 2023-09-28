import React from "react";
import {
    TouchableOpacity,
    Text,
} from 'react-native'
import { auth } from "../utility/firebase";
import useAuth from "../utility/Auth";

const MenuScreen = () => {
    const { SignOut } = useAuth()
    
    return (
        <TouchableOpacity
            onPress={() => {
                auth().signOut()
            }}
        >
            <Text>Çıkış Yap</Text>
        </TouchableOpacity>
    )
}

export default MenuScreen