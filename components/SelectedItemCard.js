import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const SelectedItemCard = ({ item_name, item_desc, item_price, item_qty }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item_name}</Text>
        <Text style={styles.itemDesc}>{item_desc}</Text>
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
