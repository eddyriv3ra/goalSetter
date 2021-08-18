import React from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import Header from "../../components/header";

const textMessages = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "1. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.n.",
  "2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
];

const Terms = () => {
  return (
    <View style={styles.container}>
      <Header
        title="Terms of Services"
        colors={["#8D24C4", "#500F71"]}
        enableBackButton
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/illustrationMoney.png")}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/flyingMoney.png")}
            style={styles.flyingMoney}
            resizeMode="contain"
          />
        </View>
        <View style={styles.meessageContainer}>
          {textMessages.map((message, index) => {
            return (
              <Text style={styles.message} key={index}>
                {message}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContainer: {
    marginHorizontal: 20,
    flex: 1,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  flyingMoney: { position: "absolute", width: 60, height: 60 },
  meessageContainer: { alignItems: "center", marginTop: 50 },
  message: { marginVertical: 20 },
});
