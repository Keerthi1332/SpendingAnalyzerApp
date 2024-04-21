import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Categories = ({ navigation }) => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const savedExpenses = await AsyncStorage.getItem("expenses");
        if (savedExpenses) {
          setExpenses(JSON.parse(savedExpenses));
        }
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    const fetchIncome = async () => {
      try {
        const savedIncome = await AsyncStorage.getItem("income");
        if (savedIncome) {
          setIncome(JSON.parse(savedIncome));
        }
      } catch (error) {
        console.error("Error fetching income:", error);
      }
    };

    fetchExpenses();
    fetchIncome();
  }, []);

  useEffect(() => {
    // Calculate total expenses
    const totalExp = expenses.reduce(
      (acc, expense) => acc + parseFloat(expense.amount),
      0
    );
    setTotalExpenses(totalExp);

    // Calculate total income
    const totalInc = income.reduce(
      (acc, incomeItem) => acc + parseFloat(incomeItem.amount),
      0
    );
    setTotalIncome(totalInc);
  }, [expenses, income]);

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
      source={require("/Users/keerthivissamsetti/SpendingAnalyzerApp/assets/image.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Categories</Text>
        <View style={styles.section}>
          <Text style={styles.subHeader}>Expenses</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Category</Text>
            <Text style={styles.headerText}>Item</Text>
            <Text style={styles.headerText}>Amount</Text>
          </View>
          <FlatList
            data={expenses}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.category}</Text>
                <Text style={styles.cell}>{item.item}</Text>
                <Text style={styles.cell}>${item.amount}</Text>
              </View>
            )}
          />
          <Text style={styles.total}>Total Expenses: ${totalExpenses}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subHeader}>Income</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Category</Text>
            <Text style={styles.headerText}>Item</Text>
            <Text style={styles.headerText}>Amount</Text>
          </View>
          <FlatList
            data={income}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.category}</Text>
                <Text style={styles.cell}>{item.item}</Text>
                <Text style={styles.cell}>${item.amount}</Text>
              </View>
            )}
          />
          <Text style={styles.total}>Total Income: ${totalIncome}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Expenses")}
        >
          <Text style={styles.buttonText}>Go to Expenses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Income")}
        >
          <Text style={styles.buttonText}>Go to Income</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Reports")}
        >
          <Text style={styles.buttonText}>Go to Reports</Text>
        </TouchableOpacity>
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
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#A0522D",
    alignItems: "center",
  },
  section: {
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    color: "#006400",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  headerText: {
    fontWeight: "bold",
    color: "#00008B",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  cell: {
    flex: 1,
    color: "#00008B",
    textAlign: "center",
  },
  total: {
    marginTop: 5,
    fontWeight: "bold",
    color: "#8B008B",
    textAlign: "center",
  },
  button: {
    marginBottom: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#C71585", // Blue color
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Categories;
