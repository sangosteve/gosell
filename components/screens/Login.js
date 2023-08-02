import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import { COLORS } from "../../constants/theme";
import { AuthContext } from "../../context/AuthContext";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Login</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.labelText}>Email</Text>
        <TextInput
          onChangeText={(val) => setEmail(val)}
          style={styles.input}
          placeholder="Enter your email"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.labelText}>Password</Text>
        <TextInput
          onChangeText={(val) => setPassword(val)}
          style={styles.input}
          placeholder="Enter your password"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-end",
          marginTop: 16,
          fontSize: 16,
        }}
      >
        <Text style={{ fontSize: 16 }}>Don’t have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.linkText}> Register</Text>
        </Pressable>
      </View>
      <TouchableOpacity
        onPress={() => {
          login(email, password);
        }}
        style={styles.ctaButton}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    marginTop: 32,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.gray1000,
  },
  inputGroup: {
    marginTop: 24,
    width: "100%",
    alignItems: "flex-start",
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.gray1000,
  },
  input: {
    width: "100%",
    height: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.gray500,
    borderRadius: 8,
    marginTop: 8,
  },

  linkText: {
    fontSize: 16,
    color: COLORS.primary700,
  },
  ctaButton: {
    marginTop: 24,
    width: "100%",
    height: 48,
    backgroundColor: COLORS.primary800,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowColor: COLORS.primary700,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnText: {
    color: COLORS.primary100,
    fontSize: 16,
    fontWeight: "800",
  },
});
