import React from "react";
import { Button, View, Text } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>
        Welcome to the Home Screen!
      </Text>
      <Button
        title="Go to profile"
        onPress={() =>
          navigation.navigate('Profile')
        }
      />
    </View>
  );
}

export default HomeScreen;