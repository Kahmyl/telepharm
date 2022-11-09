import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "@rneui/themed";
import { useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import BookButton from "../../../shared/book-button";
import { horizontalScale, verticalScale } from "../../../shared/responsive";
import { StackNavigationType } from "../../../types";
import Header from "../../header";
import Picker from "../../Picker";
import { CheckContainer } from "../../User/styles";
import {
  AddRecordContainer,
  PickerTitle,
  QuestionText,
  QuestionWrapper,
} from "./styles";

export const Categories = [
  {
    name: "Arts & Literature",
    key: "arts_and_literature",
  },
  {
    name: "Film & TV",
    key: "film_and_tv",
  },
  {
    name: "Food & Drink",
    key: "food_and_drink",
  },
  {
    name: "General Knowledge",
    key: "general_knowledge",
  },
  {
    name: "Geography",
    key: "geography",
  },
  {
    name: "History",
    key: "history",
  },
];

const { width, height } = Dimensions.get("window");

const AddRecordContent = ({ navigation, route }: StackNavigationType) => {
  const [categoryValue, setCategoryValue] = useState("");
  const [checked, setChecked] = useState("yes");
  const nav = useNavigation();
  const handleBack = () => {
    nav.goBack();
  };
  const { type, specialist } = route.params;

  return (
    <AddRecordContainer>
      <Header title="Medical Records" handleBack={handleBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <PickerTitle>Symptoms</PickerTitle>
          <Picker
            data={Categories}
            value={categoryValue}
            setValue={setCategoryValue}
            defaultValue={"Select"}
          />
        </View>
        <View>
          <PickerTitle>How Long?</PickerTitle>
          <Picker
            data={Categories}
            value={categoryValue}
            setValue={setCategoryValue}
            defaultValue={"Select"}
          />
        </View>
        <QuestionWrapper
          style={{
            borderBottomColor: "#ffffff",
            borderBottomWidth: 1,
          }}
        >
          <QuestionText>Are you on any medication?</QuestionText>
          <CheckContainer>
            <CheckBox
              checked={checked === "yes"}
              checkedColor="#FFFFFF"
              containerStyle={{
                margin: 0,
                backgroundColor: "none",
                padding: 0,
                // marginLeft: -10,
                paddingHorizontal: -10,
                marginHorizontal: -10,
              }}
              onIconPress={() =>
                checked === "yes" ? setChecked("") : setChecked("yes")
              }
              onPress={() =>
                checked === "yes" ? setChecked("") : setChecked("yes")
              }
              size={verticalScale(30, height)}
              textStyle={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: horizontalScale(18, width),
                lineHeight: verticalScale(22, height),
                color: "#FFFFFF",
                marginLeft: horizontalScale(2, width),
              }}
              title="Yes"
              titleProps={{}}
              uncheckedColor="#FFFFFF"
            />
            <CheckBox
              checked={checked === "no"}
              checkedColor="#FFFFFF"
              containerStyle={{
                margin: 0,
                backgroundColor: "none",
                padding: 0,
                marginLeft: 20,
              }}
              onIconPress={() =>
                checked === "no" ? setChecked("") : setChecked("no")
              }
              onPress={() =>
                checked === "no" ? setChecked("") : setChecked("no")
              }
              size={verticalScale(30, height)}
              textStyle={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: horizontalScale(18, width),
                lineHeight: verticalScale(22, height),
                color: "#FFFFFF",
                margin: 0,
                padding: 0,
                marginLeft: verticalScale(2, height),
              }}
              title="No"
              titleProps={{}}
              uncheckedColor="#FFFFFF"
            />
          </CheckContainer>
          <QuestionText>Specify if yes</QuestionText>
        </QuestionWrapper>
        <QuestionWrapper
          style={{
            borderBottomColor: "#ffffff",
            borderBottomWidth: 1,
          }}
        >
          <QuestionText>Do you have any drug allergy?</QuestionText>
          <CheckContainer>
            <CheckBox
              checked={checked === "yes"}
              checkedColor="#FFFFFF"
              containerStyle={{
                margin: 0,
                backgroundColor: "none",
                padding: 0,
                // marginLeft: -10,
                paddingHorizontal: -10,
                marginHorizontal: -10,
              }}
              onIconPress={() =>
                checked === "yes" ? setChecked("") : setChecked("yes")
              }
              onPress={() =>
                checked === "yes" ? setChecked("") : setChecked("yes")
              }
              size={verticalScale(30, height)}
              textStyle={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: horizontalScale(18, width),
                lineHeight: verticalScale(22, height),
                color: "#FFFFFF",
                marginLeft: horizontalScale(2, width),
              }}
              title="Yes"
              titleProps={{}}
              uncheckedColor="#FFFFFF"
            />
            <CheckBox
              checked={checked === "no"}
              checkedColor="#FFFFFF"
              containerStyle={{
                margin: 0,
                backgroundColor: "none",
                padding: 0,
                marginLeft: 20,
              }}
              onIconPress={() =>
                checked === "no" ? setChecked("") : setChecked("no")
              }
              onPress={() =>
                checked === "no" ? setChecked("") : setChecked("no")
              }
              size={verticalScale(30, height)}
              textStyle={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: horizontalScale(18, width),
                lineHeight: verticalScale(22, height),
                color: "#FFFFFF",
                margin: 0,
                padding: 0,
                marginLeft: verticalScale(2, height),
              }}
              title="No"
              titleProps={{}}
              uncheckedColor="#FFFFFF"
            />
          </CheckContainer>
          <QuestionText>Specify if yes</QuestionText>
        </QuestionWrapper>
        <QuestionWrapper
          style={{
            borderBottomColor: "#ffffff",
            borderBottomWidth: 1,
          }}
        >
          <QuestionText>
            Do you have any previous medical condition?
          </QuestionText>
          <CheckContainer>
            <CheckBox
              checked={checked === "yes"}
              checkedColor="#FFFFFF"
              containerStyle={{
                margin: 0,
                backgroundColor: "none",
                padding: 0,
                // marginLeft: -10,
                paddingHorizontal: -10,
                marginHorizontal: -10,
              }}
              onIconPress={() =>
                checked === "yes" ? setChecked("") : setChecked("yes")
              }
              onPress={() =>
                checked === "yes" ? setChecked("") : setChecked("yes")
              }
              size={verticalScale(30, height)}
              textStyle={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: horizontalScale(18, width),
                lineHeight: verticalScale(22, height),
                color: "#FFFFFF",
                marginLeft: horizontalScale(2, width),
              }}
              title="Yes"
              titleProps={{}}
              uncheckedColor="#FFFFFF"
            />
            <CheckBox
              checked={checked === "no"}
              checkedColor="#FFFFFF"
              containerStyle={{
                margin: 0,
                backgroundColor: "none",
                padding: 0,
                marginLeft: 20,
              }}
              onIconPress={() =>
                checked === "no" ? setChecked("") : setChecked("no")
              }
              onPress={() =>
                checked === "no" ? setChecked("") : setChecked("no")
              }
              size={verticalScale(30, height)}
              textStyle={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: horizontalScale(18, width),
                lineHeight: verticalScale(22, height),
                color: "#FFFFFF",
                margin: 0,
                padding: 0,
                marginLeft: verticalScale(2, height),
              }}
              title="No"
              titleProps={{}}
              uncheckedColor="#FFFFFF"
            />
          </CheckContainer>
          <QuestionText>Specify if yes</QuestionText>
        </QuestionWrapper>
        <BookButton
          text="Book Appointment"
          onPress={() => navigation.navigate("Banner", { type })}
        />
      </ScrollView>
    </AddRecordContainer>
  );
};

export default AddRecordContent;
