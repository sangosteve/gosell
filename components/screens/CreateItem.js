import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/theme";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(0.0);
  const [price, setPrice] = useState(0.0);

  const saveItem = async () => {
    const data = JSON.stringify({
      name,
      description,
      cost,
      price,
    });

    // console.log(JSON.stringify(selectedItems));
    const response = await fetch("http:192.168.1.249:2023/items/", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json().then(() => {
      setName("");
      setDescription("");
      setCost("");
      setPrice("");
    });

    console.log(json);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>New Item</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.labelText}>Name</Text>
        <TextInput
          onChangeText={(val) => setName(val)}
          style={styles.input}
          placeholder="Name"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.labelText}>Description</Text>
        <TextInput
          onChangeText={(val) => setDescription(val)}
          multiline={true}
          numberOfLines={8}
          style={styles.textarea}
          placeholder="Description"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.labelText}>Cost Price</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(val) => setCost(val)}
          style={styles.input}
          placeholder="Cost Price"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.labelText}>Selling Price</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(val) => setPrice(val)}
          style={styles.input}
          placeholder="Selling Price"
        />
      </View>
      <TouchableOpacity onPress={saveItem} style={styles.ctaButton}>
        <Text style={styles.btnText}>Save Item</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateItem;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    marginTop: 24,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
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
  textarea: {
    width: "100%",
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: COLORS.gray500,
    borderRadius: 8,
    marginTop: 8,
    height: 80,
    textAlignVertical: "top",
  },
  ctaButton: {
    marginTop: 40,
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
