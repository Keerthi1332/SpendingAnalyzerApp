import React, { useState, useEffect } from "react";
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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Clear AsyncStorage when the component unmounts (session ends)
    return () => {
      clearAsyncStorage();
    };
  }, []);

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem("userData");
      if (userData) {
        const users = JSON.parse(userData);
        const user = users.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          // Successful login
          navigation.navigate("MenuScreen");
        } else {
          Alert.alert("Error", "Invalid email or password.");
        }
      } else {
        Alert.alert("Error", "No user registered yet. Please sign up.");
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  };

  const clearAsyncStorage = async () => {
    try {
      // Clear AsyncStorage
      await AsyncStorage.clear();
      console.log("AsyncStorage cleared successfully.");
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.buttonBox}>
          <Button title="Login" onPress={handleLogin} color="#fff" />
        </View>
      </View>
    </ImageBackground>
  );
};

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
  input: {
    borderWidth: 1,
    width: 300,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff", // Input background color
  },
  buttonBox: {
    marginTop: 10,
    width: 200,
    backgroundColor: "#DB7093", // Button box color
    borderRadius: 5,
  },
});

export default LoginScreen;
