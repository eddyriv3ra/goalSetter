import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { emailRegex } from "../../utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/header";

const Home = () => {
  const [values, setValues] = useState<{
    firstName: {
      value: string;
    };
    lastName: {
      value: string;
    };
    email: {
      value: string;
      error: boolean;
    };
    password: {
      value: string;
      error: boolean;
    };
  }>({
    firstName: {
      value: "",
    },
    lastName: {
      value: "",
    },
    email: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
  });

  const handleInput = (value: string, key: string) => {
    setValues({ ...values, [key]: { value } });
  };

  const emailValidator = () => {
    if (!emailRegex.test(values.email.value)) {
      setValues({
        ...values,
        email: { error: true, value: values.email.value },
      });
    } else {
      setValues({
        ...values,
        email: { error: false, value: values.email.value },
      });
    }
  };

  const passwordValidator = () => {
    if (values.password.value.length <= 4) {
      setValues({
        ...values,
        password: { error: true, value: values.password.value },
      });
    } else {
      setValues({
        ...values,
        password: { error: false, value: values.password.value },
      });
    }
  };

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <Header
        title="Create Your Account"
        subtitle="  You can be a parent, godparent, grandparent or even a favorite aunt.
          We’ll add the kids after!"
        colors={["#00DCEC", "#00B7D5"]}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.inputContainer}>
          <Input
            value={values.firstName.value}
            placeholder="First Name"
            imgSource={require("../../assets/person.png")}
            onChangeText={(value) => handleInput(value, "firstName")}
            placeholderTextColor="#D8D8D8"
          />
          <Input
            value={values.lastName.value}
            placeholder="Last Name"
            imgSource={require("../../assets/person.png")}
            onChangeText={(value) => handleInput(value, "lastName")}
            placeholderTextColor="#D8D8D8"
          />
          <Input
            value={values.email.value}
            placeholder="Email Address"
            imgSource={require("../../assets/emailIcon.png")}
            onChangeText={(value) => handleInput(value, "email")}
            placeholderTextColor="#D8D8D8"
            keyboardType="email-address"
            autoCapitalize="none"
            onBlur={emailValidator}
            error={values.email.error}
          />
          <Input
            value={values.password.value}
            placeholder="Password"
            imgSource={require("../../assets/passwordIcon.png")}
            onChangeText={(value) => handleInput(value, "password")}
            secureTextEntry={true}
            placeholderTextColor="#D8D8D8"
            onBlur={passwordValidator}
            error={values.password.error}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            By creating this account, I agree that I am a U.S. resident, 18
            years or older with a valid bank account. I agree to Goalsetter’s .
            <Text
              onPress={() => {
                alert("but this is");
              }}
              style={styles.textLinkColor}
            >
              Terms of Service
            </Text>
          </Text>
          <Button
            title="CREATE FREE ACCOUNT"
            onPress={() => console.log("sarasa")}
            disabled={
              !values.firstName.value ||
              !values.lastName.value ||
              values.email.error ||
              values.password.error
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { height: 200 },
  scrollContainer: {
    alignItems: "center",
    flex: 1,
  },
  inputContainer: {
    marginTop: 50,
    justifyContent: "center",
  },
  footerContainer: { position: "absolute", bottom: 30 },
  footerText: {
    textAlign: "center",
    color: "#000000",
    opacity: 0.6,
    marginBottom: 20,
  },
  textLinkColor: { color: "#17BFDD", fontWeight: "700" },
});
