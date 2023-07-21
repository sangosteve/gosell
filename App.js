import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./components/navigators/tabs/BottomTab";
import { SelectedItemsProvider } from "./context/SelectedItemsContext";
import { SelectedClientProvider } from "./context/SelectedClientContext";
export default function App() {
  return (
    <SelectedItemsProvider>
      <SelectedClientProvider>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SelectedClientProvider>
    </SelectedItemsProvider>
  );
}
