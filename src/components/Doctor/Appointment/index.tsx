import { Button } from "@rneui/themed";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getAppointments } from "../../../store/actions/appointment";
import Card from "../../Card";
import { AppointmentContainer } from "../../Patient/Appointment/styles";
import { Seperator } from "../../Patient/Specialist/styles";
import { TabContainer, TabPartition, TabText } from "../../User/styles";
import { Centered } from "../Home/styles";
import { BaseText } from "./styles";
const DoctorAppointmentContent = () => {
  const [tab, setTab] = useState("active");
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");
  const { appointments, total } = useAppSelector((store) => store.appointments);
  const dispatch = useAppDispatch();

  const handleAppointments = useCallback(async () => {
    setError("");
    setIsRefreshing(true);
    try {
      await dispatch(getAppointments(tab));
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
  }, [dispatch, handleAppointments, tab]);

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
      return (
        <FlatList
          onRefresh={handleAppointments}
          refreshing={isRefreshing}
          data={appointments}
          keyExtractor={(item: any) => item._id}
          ItemSeparatorComponent={() => {
            return <Seperator />;
          }}
          renderItem={({ item }: any) => {
            return <Card data={item} />;
          }}
        />
      );
    }
  }
  return (
    <AppointmentContainer>
      <TabContainer>
        <TouchableOpacity onPress={() => setTab("active")}>
          <TabText active={tab === "active"}>Active</TabText>
        </TouchableOpacity>
        <TabPartition></TabPartition>
        <TouchableOpacity onPress={() => setTab("pending")}>
          <TabText active={tab === "pending"}>Pending</TabText>
        </TouchableOpacity>
      </TabContainer>
      <View style={{ position: "relative", height: "100%" }}>{renderElement()}</View>
    </AppointmentContainer>
  );
};

export default DoctorAppointmentContent;
