import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./components/navigators/tabs/BottomTab";
import { SelectedItemsProvider } from "./context/SelectedItemsContext";
export default function App() {
  return (
    <SelectedItemsProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SelectedItemsProvider>
  );
}
