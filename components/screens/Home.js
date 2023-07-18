import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from "../FloatingButton";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton navigation={navigation} />
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
