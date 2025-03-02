import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ToggleViewButton from "../buttons/toggle-view-button";
import JobsCard from "../cards/jobs-card";

const JobGrid = ({ array }) => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <View>
      <ToggleViewButton
        title={"Jobs to do"}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
      />
      {showGrid && (
        <FlatList
          data={array}
          contentContainerStyle={styles.container}
          keyExtractor={(item) => item.job_id}
          renderItem={({ item }) => (
            <JobsCard title={item.job_title} content={item.job_description} />
          )}
        />
      )}
    </View>
  );
};

export default JobGrid;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingBottom: 40,
  },
});
