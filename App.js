import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./components/navigators/tabs/BottomTab";
export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
