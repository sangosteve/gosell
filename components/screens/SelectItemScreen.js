import React, { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from "../ItemCard";
import { SIZES } from "../../constants/theme";

const SelectItemScreen = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState({});
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "95%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const products = [
    {
      id: 1,
      name: "Jeans",
      desription: "mens skinny jeans",
      price: 10.0,
      qtyInStock: 2,
    },
    {
      id: 2,
      name: "Stockings",
      desription: "ankle cover stockings",
      price: 1.0,
      qtyInStock: 4,
    },
    {
      id: 3,
      name: "Bunny Hats",
      desription: "winter bunny hats",
      price: 5.0,
      qtyInStock: 2,
    },
  ];

  const renderItem = ({ item }) => (
    <ItemCard
      item_name={item.name}
      item_desc={item.desription}
      item_price={item.price}
      qtyInStock={item.qtyInStock}
      navigation={navigation}
      bottomSheetRef={bottomSheetRef}
      item={item}
      setSelectedItem={setSelectedItem}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchField} placeholder="Item name" />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ columnGap: 24 }}
        initialNumToRender={1}
        style={{ marginTop: 24 }}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{ display: "none" }}
      >
        <View style={styles.contentContainer}>
          <View style={styles.bottomSheetHeader}>
            <Pressable onPress={() => bottomSheetRef?.current?.close()}>
              <Text>Cancel</Text>
            </Pressable>
            <Pressable>
              <Text>Add</Text>
            </Pressable>
          </View>
          <View>
            <Text>{selectedItem?.name}</Text>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default SelectItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchField: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    fontSize: SIZES.medium,
  },
  //BOTTOM SHEET STYLES
  contentContainer: {
    flex: 1,
  },
  bottomSheetHeader: {
    width: "100%",
    padding: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
