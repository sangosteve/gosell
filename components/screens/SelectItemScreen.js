import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
  useContext,
} from "react";
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
import Icon from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from "../ItemCard";
import { COLORS, FONT, SIZES } from "../../constants/theme";
import axios from "axios";
import { SelectedItemsContext } from "../../context/SelectedItemsContext";

const SelectItemScreen = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState({});
  const { setSelectedItems } = useContext(SelectedItemsContext);
  const [itemQty, setItemQty] = useState(1);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "95%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    //console.log("handleSheetChanges", index);
  }, []);

  const getItems = async () => {
    try {
      const response = await fetch("http:192.168.1.249:2023/items");
      const json = await response.json();
      setItems(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToSelectedItems = (addedItem) => {
    addedItem.qty = itemQty;
    addedItem.item_id = addedItem?._id;
    return setSelectedItems((selectedItems) => [...selectedItems, addedItem]);
    // console.log("addedItem", addedItem);
  };

  useEffect(() => {
    getItems();
  }, []);

  const renderItem = ({ item }) => (
    <ItemCard
      item_name={item?.name}
      item_desc={item?.description}
      item_price={item?.price}
      qtyInStock={item.qtyInStock}
      navigation={navigation}
      bottomSheetRef={bottomSheetRef}
      item={item}
      setSelectedItem={setSelectedItem}
    />
  );

  if (isLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchField} placeholder="Item name" />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
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
          {/* <View style={styles.bottomSheetHeader}>
            <Pressable
              onPress={() => {
                bottomSheetRef?.current?.close();
                navigation.goBack();
              }}
            >
              <Text>Cancel</Text>
            </Pressable>
            <Pressable>
              <Text>Add</Text>
            </Pressable>
          </View> */}
          {/* <View>
            <Text>{selectedItem?.name}</Text>
          </View> */}
          <View style={styles.itemDetailsWrapper}>
            <View style={styles.itemImage}>
              <Icon
                name="package"
                size={SIZES.xxxLarge}
                color={COLORS.gray400}
              />
            </View>

            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{selectedItem?.name}</Text>
              <Text style={styles.itemDesc}>{"ankle cover stockings..."}</Text>
              <View style={styles.itemPriceWrapper}>
                <Text style={styles.itemPrice}>${selectedItem?.price}</Text>
                <Text style={styles.qtyInStock}>Stock: 12</Text>
              </View>
            </View>
          </View>
          {/* QUANTITY */}
          <View style={styles.qtyWrapper}>
            <Text style={styles.qtyTitle}>Quantity</Text>
            <View style={styles.qtyActionBtns}>
              <TouchableOpacity style={styles.qtyBtn}>
                <Icon name="minus" size={SIZES.medium} />
              </TouchableOpacity>
              <View style={styles.qtyInputWrapper}>
                <TextInput
                  style={styles.qtyInput}
                  value={itemQty.toString()}
                  defaultValue={itemQty.toString()}
                  onChangeText={(e) => setItemQty(e)}
                />
              </View>

              <TouchableOpacity style={styles.qtyBtn}>
                <Icon name="plus" size={SIZES.medium} />
              </TouchableOpacity>
            </View>
          </View>
          {/* TOTAL */}
          <View style={styles.totalWrapper}>
            <Text style={styles.totalTitle}>Total</Text>
            <Text style={styles.totalAmnt}>
              ${itemQty * selectedItem?.price}
            </Text>
          </View>
          {/* ACTION BTNS */}
          <View style={styles.itemActionBtns}>
            <TouchableOpacity
              onPress={() => {
                bottomSheetRef?.current?.close();
                navigation.goBack();
              }}
              style={styles.itemCancelBtn}
            >
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemAddBtn}
              onPress={() => {
                addToSelectedItems(selectedItem);
                bottomSheetRef?.current?.close();
                navigation.goBack();
              }}
            >
              <Text style={styles.addBtnText}>Add Item</Text>
            </TouchableOpacity>
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
    paddingHorizontal: 32,
  },
  bottomSheetHeader: {
    width: "100%",
    padding: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemDetailsWrapper: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  itemImage: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.gray200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  itemName: {
    fontSize: SIZES.large,
    color: COLORS.gray900,
    fontWeight: FONT.bold,
  },
  itemDesc: {
    fontSize: SIZES.medium,
    color: COLORS.gray500,
    fontWeight: FONT.medium,
  },
  itemPriceWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  itemPrice: {
    fontSize: SIZES.medium,
    fontWeight: FONT.bold,
    color: COLORS.gray900,
  },
  qtyInStock: {
    fontSize: SIZES.medium,
    fontWeight: FONT.bold,
    color: COLORS.gray500,
  },
  qtyWrapper: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  qtyTitle: {
    fontSize: SIZES.large,
    fontWeight: FONT.bold,
    color: COLORS.gray500,
  },
  qtyActionBtns: {
    flexDirection: "row",
    gap: 8,
  },
  qtyBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.gray200,
  },
  qtyInputWrapper: {
    width: 48,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.gray400,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyInput: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: SIZES.large,
  },
  // TOTAL
  totalWrapper: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalTitle: {
    fontSize: SIZES.large,
    fontWeight: FONT.bold,
    color: COLORS.gray500,
  },
  totalAmnt: {
    fontSize: SIZES.large,
    fontWeight: FONT.bold,
    color: COLORS.gray500,
  },
  //ACTION BTNS
  itemActionBtns: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemCancelBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: COLORS.gray100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelBtnText: {
    fontSize: SIZES.medium,
    fontWeight: "800",
    color: "#D92D20",
  },
  itemAddBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary700,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addBtnText: {
    fontSize: SIZES.medium,
    fontWeight: "800",
    color: COLORS.gray000,
  },
});
