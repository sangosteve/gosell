import { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { COLORS, SIZES } from "../constants/theme";

const ProductCard = ({
  item,
  item_name,
  item_desc,
  item_price,
  qtyInStock,
  navigation,
}) => {
  return (
    // <TouchableOpacity onPress={() => navigation.goBack()}>

    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Icon name="package" size={40} color={COLORS.gray500} />
          <View style={{ gap: 4 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: COLORS.gray1000,
              }}
            >
              {item_name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: COLORS.gray500,
              }}
            >
              {item_desc}
            </Text>
          </View>
        </View>
        <View style={{ gap: 8, alignItems: "flex-end" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: COLORS.gray1000,
            }}
          >
            $ {item_price}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: COLORS.gray500,
            }}
          >
            4
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray300,
  },
});
