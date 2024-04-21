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

const Expenses = ({ navigation }) => {
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const handleExpenseAdd = async () => {
    if (category && item && amount) {
      const newExpense = { category, item, amount: parseFloat(amount) };
      try {
        // Save expense to AsyncStorage
        const savedExpenses = await AsyncStorage.getItem("expenses");
        const expenses = savedExpenses ? JSON.parse(savedExpenses) : [];
        expenses.push(newExpense);
        await AsyncStorage.setItem("expenses", JSON.stringify(expenses));
        // Clear input fields
        setCategory("");
        setItem("");
        setAmount("");
        // Show alert for successful addition
        Alert.alert("Expense Added", "Expense has been added successfully!");
      } catch (error) {
        console.error("Error saving expense:", error);
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
      source={require("/Users/keerthivissamsetti/SpendingAnalyzerApp/assets/image_Expenses.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Expenses</Text>
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
          onPress={handleExpenseAdd}
        >
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={[styles.smallButton, { backgroundColor: "#A52A2A" }]}
            onPress={() => navigation.navigate("Income")}
          >
            <Text style={styles.buttonText}>Go to Income</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.smallButton, { backgroundColor: "#A52A2A" }]}
            onPress={() => navigation.navigate("Categories")}
          >
            <Text style={styles.buttonText}>Go to Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.smallButton, { backgroundColor: "#A52A2A" }]}
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

export default Expenses;
