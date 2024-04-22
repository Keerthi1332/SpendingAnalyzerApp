# Spending Analyzer App

# Team Members

1. Venkata Keerthi Priya Vissamsetti - M15804108 

2. Yukta Ventrapragada - M15887062

# App Description and Code Explanation -

The Spending Analyzer app is designed to assist users in efficiently recording their income and expenditures, enabling them to effortlessly monitor and evaluate their budgets and 
spending patterns. The following is the explanation of the different .js files designed for our app along with the outputs:

**App.js** - 
This file serves as the entry point for our React Native application, defining the navigation stack using React Navigation. It includes screens for home, login, signup, menu, 
expenses, income, categories, and reports, facilitating seamless navigation throughout the app's features.

**HomeScreen.js** - 
The HomeScreen.js file defines the home screen of the Spending Analyzer app, presenting a background image with options to login or sign up. It utilizes React Native components 
and styling to create a visually appealing and functional user interface.


<img width="1440" alt="Screenshot 2024-04-21 at 7 11 08 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/ddda4017-4da0-44f2-8161-e4ccb3b933a9">



**SignUpScreen.js** - 
The SignUpScreen.js file defines the screen where users can sign up for a new account in the Spending Analyzer app, incorporating email and password input fields. It utilizes 
AsyncStorage for data storage and React Native components for user interface elements, maintaining a visually appealing and easy signup process.

<img width="1440" alt="Screenshot 2024-04-21 at 7 14 54 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/90699745-b422-4365-98ab-536d5243fe99">

<img width="1440" alt="Screenshot 2024-04-21 at 7 15 09 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/12490d36-61ba-4382-aed3-44c9390def51">



**LoginScreen.js** - 
The LoginScreen.js file defines the screen where users can log in to the Spending Analyzer app using their email and password. It utilizes AsyncStorage for storing user data and 
React Native components for creating a user-friendly login interface.


<img width="1440" alt="Screenshot 2024-04-21 at 7 20 04 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/6bfc3730-0627-4f4b-885e-b911dbbba3f1">


**MenuScreen.js** - 
The MenuScreen.js file presents users with options to navigate to different sections of the Spending Analyzer app, such as Expenses, Income, Categories, and Reports, utilizing 
TouchableOpacity for interactive buttons. It integrates a background image for visual appeal and maintains a clean and intuitive user interface design.


<img width="1440" alt="Screenshot 2024-04-21 at 7 20 41 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/cd74fa4b-aff6-495e-b8db-4d594aea2e9c">



**Expenses.js** - 
The Expenses.js file allows users to add expenses with category, item, and amount details, saving them to AsyncStorage. It features navigation buttons to other sections and a 
logout option, all within a user-friendly interface utilizing React Native components.


<img width="1440" alt="Screenshot 2024-04-21 at 7 22 35 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/5f68e5fc-9fc4-40e6-9637-38e438e6a1c7">

<img width="1440" alt="Screenshot 2024-04-21 at 7 23 05 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/9a4b834a-d12c-4647-8007-8f9b7186f603">


**Income.js** -

The Income.js file enables users to add income entries with category, item, and amount details, storing them in AsyncStorage. It also provides navigation buttons to other sections 
and a logout option within a visually appealing interface utilizing React Native components.


<img width="1440" alt="Screenshot 2024-04-21 at 8 14 12 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/ffe091a7-a606-4f68-a0f9-1725092ff0eb">


<img width="1440" alt="Screenshot 2024-04-21 at 8 15 14 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/ee0f5c92-4e99-40ec-98e9-7e7574f2afb1">


**Categories.js** - 

The Categories.js component presents categorized expenses and income entries obtained from AsyncStorage, showcasing their total amounts. It also provides navigation buttons to other 
sections and a logout option, utilizing React Native components for seamless user interaction.


<img width="1440" alt="Screenshot 2024-04-21 at 7 27 31 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/76bcd84c-a98e-4844-ab15-d3f6f7433bd9">


**Reports.js** - 
The Reports.js component fetches expenses and income data from AsyncStorage, aggregates them by category, and displays them using BarChart from react-native-chart-kit. It also calculates
total expenses and income, rendering them along with the category-wise data, and provides a logout button for user authentication.


<img width="1440" alt="Screenshot 2024-04-21 at 7 27 45 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/336797a9-cd62-4e0a-9cc0-d8dc1d1951d6">

<img width="1440" alt="Screenshot 2024-04-21 at 7 27 58 PM" src="https://github.com/Keerthi1332/SpendingAnalyzerApp/assets/156622724/be12586b-73c5-46a0-9f2e-be72edd4dd69">







**Video Explaining the output** - 


**Links to the Files** - 


[App.js](https://github.com/Keerthi1332/SpendingAnalyzerApp/blob/main/App.tsx)

[HomeScreen.js](https://github.com/Keerthi1332/SpendingAnalyzerApp/blob/main/screens/HomeScreen.js)

[SignUpScreen.js](https://github.com/Keerthi1332/SpendingAnalyzerApp/blob/main/screens/SignUpScreen.js)

[LoginScreen.js](https://github.com/Keerthi1332/SpendingAnalyzerApp/blob/main/screens/LoginScreen.js)

[MenuScreen.js](https://github.com/Keerthi1332/SpendingAnalyzerApp/blob/main/screens/MenuScreen.js)

[Expense.js](https://github.com/Keerthi1332/SpendingAnalyzerApp/blob/main/screens/Expenses.js)

[Income.js](https://github.com/Keerthi1332/SpendingAnalyzerApp/blob/main/screens/Income.js)

[Categories.js](https://github.com/Keerthi1332/SpendingAnalyzerApp/blob/main/screens/Categories.js)

[Reports.js](https://github.com/Keerthi1332/SpendingAnalyzerApp/blob/main/screens/Reports.js)














