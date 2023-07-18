import { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const ItemCard = ({
  item,
  item_name,
  item_desc,
  item_price,
  qtyInStock,
  navigation,
  bottomSheetRef,
  setSelectedItem,
}) => {
  const sheetRef = useRef(bottomSheetRef);
  return (
    // <TouchableOpacity onPress={() => navigation.goBack()}>
    <TouchableOpacity
      onPress={() => {
        setSelectedItem(item);
        bottomSheetRef.current?.snapToIndex(1);
      }}
    >
      <View style={styles.container}>
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item_name}</Text>
          <Text style={styles.itemDesc}>{item_desc}</Text>
        </View>
        <View style={styles.itemPricing}>
          <Text style={{ color: COLORS.gray600 }}>In stock: {qtyInStock}</Text>
          <Text style={{ color: COLORS.gray600 }}>${item_price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

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
