import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from "../FloatingButton";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Home = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton navigation={navigation} />
      <Text>{userToken}</Text>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
