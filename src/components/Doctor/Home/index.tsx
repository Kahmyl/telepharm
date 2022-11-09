import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import MaterialIcon from "../../../shared/Icons/MaterialIcon";
import { verticalScale } from "../../../shared/responsive";
import { getAppointments } from "../../../store/actions/appointment";
import {
  BaseContainer,
  BaseText,
  Centered,
  DoctorFlex,
  DoctorImage,
  DoctorText,
  DoctorTitle,
  HomeContainer,
  Logo,
  LogoText,
  TopContainer,
} from "./styles";
import { Button } from "@rneui/themed";
import { Seperator } from "../../Patient/Specialist/styles";
import Card from "../../Card";

const doctorImage = require("../../../../assets/images/dr-jay.png");

const { width, height } = Dimensions.get("window");

const HomeContent = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");
  const { appointments, total } = useAppSelector((store) => store.appointments);
  const dispatch = useAppDispatch();
  const handleAppointments = useCallback(async () => {
    setError("");
    setIsRefreshing(true);
    try {
      await dispatch(getAppointments("active"));
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    handleAppointments().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, handleAppointments]);

  function renderElement() {
    if (error) {
      return (
        <Centered>
          <BaseText>An error occured.</BaseText>
          <Button
            color="secondary"
            title="Try again"
            onPress={handleAppointments}
          />
        </Centered>
      );
    } else if (isLoading) {
      return (
        <Centered>
          <ActivityIndicator size="large" color="grey" />
        </Centered>
      );
    } else if (
      !isLoading &&
      !error &&
      appointments &&
      appointments.length === 0
    ) {
      return (
        <Centered>
          <BaseText>No upcoming appointment</BaseText>
        </Centered>
      );
    } else {
      <FlatList
        onRefresh={handleAppointments}
        refreshing={isRefreshing}
        data={appointments}
        keyExtractor={(item: any) => item._id}
        ItemSeparatorComponent={() => {
          return <Seperator />;
        }}
        renderItem={({ item }: any) => {
          return <Card data={item} navigation={navigation} />;
        }}
      />;
    }
  }

  return (
    <HomeContainer>
      <TopContainer>
        <Logo>
          <LogoText>DR TELE</LogoText>
          <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
            <MaterialIcon
              size={verticalScale(28, height)}
              name="notifications-none"
              color={"#ffffff"}
            />
          </TouchableOpacity>
        </Logo>
        <DoctorFlex>
          <DoctorImage source={doctorImage} />
          <View>
            <DoctorText>Welcome,</DoctorText>
            <DoctorTitle>DR JAY</DoctorTitle>
          </View>
        </DoctorFlex>
      </TopContainer>
      <BaseContainer>{renderElement()}</BaseContainer>
    </HomeContainer>
  );
};

export default HomeContent;
