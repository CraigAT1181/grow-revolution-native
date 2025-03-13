import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { theme } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";

const PlantCard = ({ plant }) => {
  const navigation = useNavigation();
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: plant.image }} style={styles.image} />
      <Card.Content style={styles.content}>
        <Title style={styles.title}>{plant.name}</Title>
        <Paragraph style={styles.description}>{plant.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() =>
            navigation.navigate("SowDetails", {
              produce: plant.produce,
            })
          }
        >
          Details
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  image: {
    height: 150,
  },
  content: {
    paddingTop: 6,
  },
  title: {
    color: theme.colors.Secondary,
  },
  description: {
    color: theme.colors.Secondary,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    marginBottom: 3,
  },
});

export default PlantCard;
