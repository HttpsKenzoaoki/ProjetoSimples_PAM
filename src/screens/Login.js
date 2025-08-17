import { useState, useEffect } from "react";
import {View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox"
//const windowWidth = Dimensions.get("window").width;

export default function Login() {
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    const [isChecked, setIsChecked] = useState(false)

    return(
        <View >
            <Text > Acesse </Text>

            <View >
                <Text> Email </Text>
                <TextInput 
                placeholder="Digite seu Email"
                keyboardType="email-address"
                value = {Email}
                onChangeText={setEmail}
                />

                <Text> Senha </Text>
                <TextInput 
                placeholder="Digite sua Senha"
                keyboardType="visible-password"
                value = {Senha}
                onChangeText={setSenha}
                />
            </View>
             <BouncyCheckbox
        size={20}
        fillColor="#007AFF"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#007AFF" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked)}
      />
            <Text>Guardar Login</Text>

            <Text>Esqueceu a senha?</Text>
        
        <TouchableOpacity> botão </TouchableOpacity>
        <TouchableOpacity> botão 2 </TouchableOpacity>

         <TouchableOpacity></TouchableOpacity>
         <TouchableOpacity></TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {

    },
    input: {

    },
    text: {

    },
    miniText: {

    },
    button_container: {
        
    }
});