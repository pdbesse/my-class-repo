import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";

// Create a stack to maintain history
const Stack = createStackNavigator();

function App() {
  return (
    <>
    {/* Add navigation code here */}
    {/* One stack screen to display home*/}
    {/* Another stack screen to display Profile */}
    </>
  );
}

export default App;