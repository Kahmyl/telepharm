import { Button } from "@rneui/themed";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAppointments } from "../../store/actions/appointment";
import Card from "../Card";
import { Centered } from "../Doctor/Home/styles";
import { Seperator } from "../Doctor/Notification/styles";
import { AppointmentTabsContainer, BaseText } from "./styles";

type tabTypes = {
  status: string;
};

const AppointmentTabs = ({ status }: tabTypes) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");
  const { appointments, total } = useAppSelector((store) => store.appointments);
  const dispatch = useAppDispatch();
  
  const handleAppointments = useCallback(async () => {
    setError("");
    setIsRefreshing(true);
    try {
      await dispatch(getAppointments(status));
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
          return <Card data={item} />;
        }}
      />;
    }
  }
  return <AppointmentTabsContainer>{renderElement()}</AppointmentTabsContainer>;
};

export default AppointmentTabs;
