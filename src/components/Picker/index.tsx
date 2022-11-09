import { Dimensions, StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { horizontalScale, verticalScale } from "../../shared/responsive";

const { width, height } = Dimensions.get("window");

type pickerTypes = {
  data: any;
  value: string;
  setValue: any;
  defaultValue: string;
};

const SelectPicker = ({ data, value, setValue, defaultValue }: pickerTypes) => {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker_style}
        itemStyle={styles.picker_style}
        selectedValue={value}
        dropdownIconColor="#000000"
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
      >
        <Picker.Item
          style={styles.picker_style}
          label={defaultValue}
          value=""
          fontFamily="Inter_500Medium"
        />
        {data.map((option: any, index: any) => (
          <Picker.Item
            style={styles.picker_style}
            key={index}
            label={option.name}
            value={option.key}
            fontFamily="Montserrat_400Regular"
          />
        ))}
      </Picker>
    </View>
  );
};

export default SelectPicker;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(8, width),
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: "70%",
  },
  picker_style: {
    color: "#0000000",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Inter_500Medium",
  },
});
