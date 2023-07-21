import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { COLORS, SIZES } from "../../constants/theme";
import SelectedItemCard from "../SelectedItemCard";
import { SelectedItemsContext } from "../../context/SelectedItemsContext";
import { SelectedClientContext } from "../../context/SelectedClientContext";
const CreateTransaction = ({ navigation }) => {
  const { selectedItems } = useContext(SelectedItemsContext);
  const { selectedClient, setSelectedClient } = useContext(
    SelectedClientContext
  );

  console.log("CART:", selectedItems);
  console.log(
    "total:",
    selectedItems.reduce((sum, currentItem) => {
      return sum + parseFloat(currentItem.price) * currentItem.qty;
    }, 0)
  );

  function calcSubTotal() {
    return selectedItems.reduce((sum, currentItem) => {
      return sum + parseFloat(currentItem.price) * currentItem.qty;
    }, 0);
  }
  const renderItem = ({ item }) => (
    <SelectedItemCard
      item_id={item._id}
      item_name={item.name}
      item_desc={item.description}
      item_price={item.price}
      item_qty={item.qty}
    />
  );

  useEffect(() => {}, [selectedItems]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="x" size={24} color={COLORS.primary700} />
        </Pressable>
      </View>

      {/* CLIENT SECTION */}
      <View style={styles.clientSection}>
        <View style={styles.clientHeader}>
          <Text>CLIENT</Text>
        </View>

        {selectedClient !== null ? (
          <View
            style={{
              width: "100%",
              paddingHorizontal: 32,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 4,
              }}
            >
              <Icon name="user" size={48} color={COLORS.gray500} />
              <Text style={{ fontSize: SIZES.medium, color: COLORS.gray900 }}>
                {selectedClient?.name}
              </Text>
            </View>

            <Pressable onPress={() => setSelectedClient(null)}>
              <Icon name="trash-2" size={SIZES.large} color="#D92D20" />
            </Pressable>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("SelectClientScreen")}
          >
            <Text style={{ fontSize: SIZES.medium, color: COLORS.primary700 }}>
              Add Client
            </Text>
            <Icon
              name="plus-circle"
              color={COLORS.primary700}
              size={SIZES.large}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.itemsSection}>
        <View style={styles.itemsHeader}>
          <Text>ITEMS</Text>
        </View>
        <FlatList
          scrollEnabled={true}
          data={selectedItems}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ columnGap: 24 }}
          initialNumToRender={1}
          style={{ marginTop: 24 }}
        />
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("SelectItemScreen")}
      >
        <Text style={{ fontSize: SIZES.medium, color: COLORS.primary700 }}>
          Add Item
        </Text>
        <Icon name="plus-circle" color={COLORS.primary700} size={SIZES.large} />
      </TouchableOpacity>

      <View style={styles.totalsSection}>
        <View style={styles.subTotalWrapper}>
          <Text style={styles.subTotalTitle}>Subtotal</Text>
          <Text style={styles.subTotalAmnt}>{calcSubTotal()}</Text>
        </View>
        <View style={styles.totalWrapper}>
          <Text style={styles.totalTitle}>Total</Text>
          <Text style={styles.totalAmnt}>40.00</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateTransaction;

const styles = StyleSheet.create({
  container: {},
  header: {
    paddingLeft: 32,
    paddingRight: 32,
    width: "100%",
  },
  clientSection: {
    width: "100%",
    marginTop: 32,
  },
  clientHeader: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: COLORS.gray300,
    width: "100%",
  },
  itemsSection: {
    width: "100%",
    marginTop: 32,
  },
  itemsHeader: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: COLORS.gray300,
    width: "100%",
  },
  addButton: {
    paddingLeft: 32,
    paddingRight: 32,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
  },
  totalsSection: {
    width: "100%",
    marginTop: 40,
  },
  subTotalWrapper: {
    paddingLeft: 32,
    paddingRight: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTotalTitle: {
    color: COLORS.gray800,
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
  subTotalAmnt: {
    fontSize: SIZES.medium,
    color: COLORS.gray500,
    fontWeight: "600",
  },
  totalWrapper: {
    marginTop: 24,
    paddingLeft: 32,
    paddingRight: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalTitle: {
    color: COLORS.gray800,
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
  totalAmnt: {
    fontSize: SIZES.medium,
    color: COLORS.gray500,
    fontWeight: "600",
  },
});
