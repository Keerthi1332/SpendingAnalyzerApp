import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

// Import the background image
import backgroundImage from "/Users/keerthivissamsetti/SpendingAnalyzerApp/assets/image_MenuScreen.png"; // Update the path with the actual image path
import Expenses from "./Expenses";
import Income from "./Income";
import Categories from "./Categories";
import Reports from "./Reports";


export default function MenuScreen({ navigation }) {
  const navigateToSection = (section) => {
    // Navigate to different screens based on the selected section
    switch (section) {
      case "Expenses":
        navigation.navigate("Expenses");
        break;
      case "Income":
        navigation.navigate("Income");
        break;
      case "Categories":
        navigation.navigate("Categories");
        break;
      case "Reports":
        navigation.navigate("Reports");
        break;
      default:
        break;
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.sectionButton}
          onPress={() => navigateToSection("Expenses")}
        >
          <Text style={styles.sectionButtonText}>Expenses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectionButton}
          onPress={() => navigateToSection("Income")}
        >
          <Text style={styles.sectionButtonText}>Income</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectionButton}
          onPress={() => navigateToSection("Categories")}
        >
          <Text style={styles.sectionButtonText}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectionButton}
          onPress={() => navigateToSection("Reports")}
        >
          <Text style={styles.sectionButtonText}>Reports</Text>
        </TouchableOpacity>
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
  sectionButton: {
    backgroundColor: "#9370DB",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },
  sectionButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
