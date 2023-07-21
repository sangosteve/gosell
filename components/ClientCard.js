import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SelectedClientContext } from "../context/SelectedClientContext";

const ClientCard = ({ item, navigation }) => {
  const { setSelectedClient } = useContext(SelectedClientContext);
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedClient(item);
        navigation.goBack();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.clientName}>{item.name}</Text>
        <Text style={styles.clientComments}>{item.comments}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClientCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray300,
  },
  clientName: {
    fontSize: SIZES.medium,
    fontWeight: "700",
  },
  clientComments: {
    fontSize: SIZES.small,
    color: COLORS.gray400,
  },
});
