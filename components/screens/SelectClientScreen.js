import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import ClientCard from "../ClientCard";
import Icon from "react-native-vector-icons/Feather";

const SelectClientScreen = ({ navigation }) => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getClients = async () => {
    try {
      const response = await fetch("http:192.168.1.249:2023/clients");
      const json = await response.json();
      setClients(json);
      // console.log("clients", json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      console.log("clients", clients);
    }
  };
  useEffect(() => {
    getClients();
  }, []);

  const renderItem = ({ item }) => (
    <ClientCard
      name={item?.name}
      phone={item?.phone}
      email={item?.email}
      item={item}
      navigation={navigation}
    />
  );

  if (isLoading)
    return (
      <SafeAreaView>
        <Text>Loading..</Text>
      </SafeAreaView>
    );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Clients</Text>
        <TouchableOpacity>
          <Text style={styles.cancelBtnText}>New Item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchInputWrapper}>
        <Icon style={styles.searchIcon} name="search" />
        <TextInput placeholder="Who is this for?" style={styles.searchInput} />
      </View>
      <FlatList
        data={clients}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: 24 }}
        initialNumToRender={1}
        style={{ marginTop: 24 }}
      />
    </SafeAreaView>
  );
};

export default SelectClientScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
  header: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
  cancelBtn: {},
  cancelBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.primary700,
  },
  searchInputWrapper: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4,
  },
  searchInput: {
    flex: 1,
    height: "100%",
  },

  searchIcon: {
    fontSize: SIZES.medium,
    color: COLORS.gray500,
  },
});
