import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/Button";
import Header from "../../components/header";

const LinkBank = () => {
  return (
    <View style={styles.container}>
      <Header title="Link your bank!" colors={["#00DCEC", "#00B7D5"]} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/bank.png")}
            resizeMode="contain"
          />
          <Text style={styles.title}>Family banking</Text>
          <Text style={styles.text}>
            Linking your bank lets you use all of Goalsetter’s amazing features.
            Every member of your family can save, gift, learn, earn, and spend
            money... smartly.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <Button title="LINK A BANK" onPress={() => console.log("sarasa")} />
        </View>
      </View>
    </View>
  );
};

export default LinkBank;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  contentContainer: {
    marginTop: 80,
    alignItems: "center",
  },
  scrollContainer: {
    marginHorizontal: 20,
    flex: 1,
  },
  footerContainer: {
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    width: "95%",
  },
  title: {
    color: "#3B2F71",
    fontSize: 30,
    fontWeight: "700",
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    textAlign: "center",
    color: "#000000",
    marginTop: 40,
  },
});
