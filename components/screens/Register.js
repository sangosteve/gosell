import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { COLORS } from "../../constants/theme";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Register</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.labelText}>Username</Text>
        <TextInput
          onChangeText={(val) => setUsername(val)}
          style={styles.input}
          placeholder="Enter your username"
        />
      </View>
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
      <View style={styles.inputGroup}>
        <Text style={styles.labelText}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" />
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
        <Text style={{ fontSize: 16 }}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.linkText}> Login</Text>
        </Pressable>
      </View>
      <TouchableOpacity
        onPress={() => {
          register(username, email, password);
        }}
        style={styles.ctaButton}
      >
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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

export default Register;
