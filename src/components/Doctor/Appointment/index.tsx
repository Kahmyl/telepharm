import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import AppointmentTabs from "../../Appointment";
import { AppointmentContainer } from "../../Patient/Appointment/styles";
import { TabContainer, TabPartition, TabText } from "../../User/styles";
const DoctorAppointmentContent = () => {
  const [tab, setTab] = useState("active");
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
      <View style={{ backgroundColor: " #2192ff", height: "100%" }}>
        {tab === "active" ? (
          <AppointmentTabs status={tab} />
        ) : (
          <AppointmentTabs status={tab} />
        )}
      </View>
    </AppointmentContainer>
  );
};

export default DoctorAppointmentContent;
