// screens/HomeScreen.js

import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

// Import the background image
import backgroundImage from "/Users/keerthivissamsetti/SpendingAnalyzerApp/assets/image_HomeScreen.png"; // Update the path as necessary

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Spending Analyzer</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <Button
              title="Login"
              onPress={() => navigation.navigate("Login")}
              color="#fff"
            />
          </View>
          <View style={styles.buttonBox}>
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate("Signup")}
              color="#fff"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Cover the entire screen
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background overlay
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 80,
    color: "#CD5C5C", // Text color
  },
  buttonContainer: {
    marginTop: 200,
    alignItems: "center",
  },
  buttonBox: {
    backgroundColor: "#DEB887",
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
  },
});
