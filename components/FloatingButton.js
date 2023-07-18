import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { COLORS } from "../constants/theme";
const FloatingButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("CreateTransactionScreen")}
    >
      <Icon color={"#FFF"} size={32} name="plus" />
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 28,
    position: "absolute",
    bottom: 32,
    right: 32,
    backgroundColor: COLORS.primary900,
  },
});
