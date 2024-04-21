import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BarChart } from "react-native-chart-kit";

const Reports = ({ navigation }) => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

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

  // Aggregate expenses by category
  const expensesByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] =
      (acc[expense.category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  // Aggregate income by category
  const incomeByCategory = income.reduce((acc, incomeItem) => {
    acc[incomeItem.category] =
      (acc[incomeItem.category] || 0) + parseFloat(incomeItem.amount);
    return acc;
  }, {});

  // Calculate total expenses
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + parseFloat(expense.amount),
    0
  );

  // Calculate total income
  const totalIncome = income.reduce(
    (acc, incomeItem) => acc + parseFloat(incomeItem.amount),
    0
  );

  const renderGraph = (title, data, color) => (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <BarChart
        data={{
          labels: Object.keys(data),
          datasets: [{ data: Object.values(data) }],
        }}
        width={300}
        height={200}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(${color}, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
    </View>
  );

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Login"); // Navigate to login screen after logout
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  return (
    <ImageBackground
      source={require("/Users/keerthivissamsetti/SpendingAnalyzerApp/assets/image_Reports.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <FlatList
          data={[
            {
              key: "expenses",
              title: "Expenses by Category",
              data: expensesByCategory,
              color: "255, 0, 0",
            },
            {
              key: "income",
              title: "Income by Category",
              data: incomeByCategory,
              color: "0, 255, 0",
            },
            {
              key: "total",
              title: "Total Expenses and Income",
              data: { Expenses: totalExpenses, Income: totalIncome },
              color: "0, 0, 255",
            },
          ]}
          renderItem={({ item }) =>
            renderGraph(item.title, item.data, item.color)
          }
          keyExtractor={(item) => item.key}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#fff", // White color for section titles
  },
  button: {
    backgroundColor: "#F08080", // Tomato color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Reports;
