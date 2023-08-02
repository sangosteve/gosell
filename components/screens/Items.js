import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants/theme";
import Loader from "../../components/Loader";
import ItemCard from "../ItemCard";
import ProductCard from "../ProductCard";
import Icon from "react-native-vector-icons/Feather";
import { useState } from "react";
const Items = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getItems = async () => {
    try {
      const response = await fetch("http:192.168.1.249:2023/items");
      const json = await response.json();
      setItems(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const renderItem = ({ item }) => (
    <ProductCard
      item_name={item?.name}
      item_desc={item?.description}
      item_price={item?.price}
      qtyInStock={item.qtyInStock}
      navigation={navigation}
      item={item}
    />
  );
  if (isLoading) return <Loader />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Items</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("CreateItemScreen")}
        >
          <Icon
            name="plus-circle"
            color={COLORS.primary700}
            size={SIZES.large}
          />
          <Text style={{ fontSize: SIZES.medium, color: COLORS.primary700 }}>
            New Item
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: 24 }}
        initialNumToRender={1}
        style={{ marginTop: 24 }}
      />
    </SafeAreaView>
  );
};

export default Items;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    marginTop: 32,
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
  addButton: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
});
