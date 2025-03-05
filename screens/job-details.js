import React from "react";
import { View, Text } from "react-native";

const JobDetails = ({ route }) => {
  const { job } = route.params;

  return (
    <View>
      <Text>{job.job_description}</Text>
    </View>
  );
};

export default JobDetails;
