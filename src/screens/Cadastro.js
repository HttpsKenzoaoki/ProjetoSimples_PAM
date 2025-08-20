import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";



const windowWidth = Dimensions.get("window").width;

export default function Login({ navigation }) {

  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [ConfirmarSenha, setConfirmarSenha] = useState("");

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Cadastra-se</Text>

      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Digite seu Email"
          keyboardType="email-address"
          value={Email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          placeholder="Digite sua Senha"
          secureTextEntry
          value={Senha}
          onChangeText={setSenha}
          style={styles.input}
        />

        <Text style={styles.label}> Confirmar Senha</Text>
        <TextInput
          placeholder="Digite sua Senha"
          secureTextEntry
          value={ConfirmarSenha}
          onChangeText={setConfirmarSenha}
          style={styles.input}
        />
      </View>


      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separatorRow}>
      <View style={styles.separatorLinha} />
      <Text style={styles.orText}> Ou entre via </Text>
      <View style={styles.separatorLinha} />
      </View>

    
      <View style={styles.redesocial}>
        <TouchableOpacity style={styles.redesocialButton}>
          <Image
            source={require("../../assets/imagens/Google.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.redesocialButton}>
          <Image
            source={require("../../assets/imagens/Facebook.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    padding: 25,
    backgroundColor: "#F3f3f3",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "#222",
  },
  label: {
    fontSize: 16,
    color: "#444",
    marginBottom: 5,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 15,
    padding: 10,
    fontSize: 15,
    backgroundColor: "#F9F9F9",
  },
  buttonRow: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: "#2cb859",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    color: "#444",
    fontSize: 20,
  },
  separatorLinha: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCC",
  },
  separatorRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  redesocial: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  redesocialButton: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    padding: 10,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: "#CCC",
  },
});