import { AuthProvider } from "./context/AuthContext";
import { SelectedItemsProvider } from "./context/SelectedItemsContext";
import { SelectedClientProvider } from "./context/SelectedClientContext";
import AppNav from "./components/navigators/AppNav";
export default function App() {
  return (
    <AuthProvider>
      <SelectedItemsProvider>
        <SelectedClientProvider>
          <AppNav />
        </SelectedClientProvider>
      </SelectedItemsProvider>
    </AuthProvider>
  );
}
