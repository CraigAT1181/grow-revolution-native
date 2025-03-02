import React from "react";
import { View, Text } from "react-native";

const JobDetails = ({ route }) => {
  const { job } = route.params;
  console.log(job);

  return (
    <View>
      <Text>{job.job_description}</Text>
    </View>
  );
};

export default JobDetails;
