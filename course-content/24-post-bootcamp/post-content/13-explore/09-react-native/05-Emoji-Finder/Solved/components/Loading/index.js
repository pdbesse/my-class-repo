import React from "react";
import { ActivityIndicator, Colors } from 'react-native-paper';

function Loading() {
  return (
    <ActivityIndicator
      animating={true}
      color={Colors.red800}
    />
  );
}

export default Loading;