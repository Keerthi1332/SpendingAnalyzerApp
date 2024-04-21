// screens/SignUpScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import the background image
import backgroundImage from "/Users/keerthivissamsetti/SpendingAnalyzerApp/assets/image_LoginSignUp.png"; // Update the path as necessary

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userData = await AsyncStorage.getItem("userData");
      const users = userData ? JSON.parse(userData) : [];

      // Check if email already exists
      if (users.some((user) => user.email === email)) {
        Alert.alert(
          "Error",
          "Email already exists. Please choose a different one."
        );
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Alert.alert(
          "Error",
          "Invalid email format. Please enter a valid email address."
        );
        return;
      }

      // Dummy validation for password length
      if (password.length < 6) {
        Alert.alert("Error", "Password must be at least 6 characters long.");
        return;
      }

      // Add the new user
      users.push({ email, password });
      await AsyncStorage.setItem("userData", JSON.stringify(users));
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const handleLogout = async () => {
    try {
      // Clear AsyncStorage
      await AsyncStorage.clear();
      Alert.alert("Success", "Logged out successfully!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address" // Set keyboard type to email address
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <Button
              title="Sign Up"
              onPress={handleSignup}
              color="#fff" // White text color
            />
          </View>
          <View style={styles.buttonBox}>
            <Button
              title="Logout"
              onPress={handleLogout}
              color="#fff" // White text color
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#DB7093", // Text color
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: 300,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff", // Input background color
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonBox: {
    backgroundColor: "#DB7093", // Dark blue background color
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
  },
});
