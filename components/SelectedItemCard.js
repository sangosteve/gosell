import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import Icon from "react-native-vector-icons/Feather";
import { SelectedItemsContext } from "../context/SelectedItemsContext";

const SelectedItemCard = ({
  item_id,
  item_name,
  item_desc,
  item_price,
  item_qty,
}) => {
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);
  function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj._id === id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    setSelectedItems(arr);
    console.log(selectedItems);
  }
  return (
    <View style={styles.container}>
      <View style={styles.itemDetails}>
        <View>
          <Text style={styles.itemName}>{item_name}</Text>
          <Text style={styles.itemDesc}>{item_desc}</Text>
          <Text style={styles.itemDesc}>{item_id}</Text>
        </View>
        <TouchableOpacity
          onPress={() => removeObjectWithId(selectedItems, item_id)}
        >
          <Icon name="trash-2" size={SIZES.large} />
        </TouchableOpacity>
      </View>
      <View style={styles.itemPricing}>
        <Text style={{ color: COLORS.gray600 }}>
          {item_qty} X {item_price}
        </Text>
        <Text style={{ color: COLORS.gray600 }}>{item_qty * item_price}</Text>
      </View>
    </View>
  );
};

export default SelectedItemCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray300,
  },
  itemDetails: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 4,
  },
  itemName: {
    fontSize: SIZES.medium,
    color: COLORS.gray1000,
  },
  itemDesc: { fontSize: SIZES.small, color: COLORS.gray500 },
  itemPricing: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    color: COLORS.gray500,
  },
});
