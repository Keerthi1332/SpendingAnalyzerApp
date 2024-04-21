import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Income = ({ navigation }) => {
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const handleIncomeAdd = async () => {
    if (category && item && amount) {
      const newIncome = { category, item, amount: parseFloat(amount) };
      try {
        // Save income to AsyncStorage
        const savedIncome = await AsyncStorage.getItem("income");
        const income = savedIncome ? JSON.parse(savedIncome) : [];
        income.push(newIncome);
        await AsyncStorage.setItem("income", JSON.stringify(income));
        // Clear input fields
        setCategory("");
        setItem("");
        setAmount("");
        // Show alert for successful addition
        Alert.alert("Income Added", "Income has been added successfully!");
      } catch (error) {
        console.error("Error saving income:", error);
      }
    } else {
      Alert.alert("Missing Information", "Please fill in all fields.");
    }
  };

  const handleLogout = async () => {
    try {
      // Clear AsyncStorage
      await AsyncStorage.clear();
      Alert.alert("Success", "Logged out successfully!");
      navigation.navigate("Login"); // Navigate to the login screen after logout
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  return (
    <ImageBackground
      source={require("/Users/keerthivissamsetti/SpendingAnalyzerApp/assets/image_Income.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Income</Text>
        <TextInput
          style={styles.input}
          placeholder="Category"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Item"
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#DB7093" }]}
          onPress={handleIncomeAdd}
        >
          <Text style={styles.buttonText}>Add Income</Text>
        </TouchableOpacity>
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={[styles.smallButton, { backgroundColor: "#008080" }]}
            onPress={() => navigation.navigate("Expenses")}
          >
            <Text style={styles.buttonText}>Go to Expenses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.smallButton, { backgroundColor: "#008080" }]}
            onPress={() => navigation.navigate("Categories")}
          >
            <Text style={styles.buttonText}>Go to Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.smallButton, { backgroundColor: "#008080" }]}
            onPress={() => navigation.navigate("Reports")}
          >
            <Text style={styles.buttonText}>Go to Reports</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#F08080" }]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#778899",
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    width: "50%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  smallButton: {
    width: "80%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  navigationButtons: {
    width: "100%",
    alignItems: "center",
  },
});

export default Income;
