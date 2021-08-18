import React from "react";
import { Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderProps {
  colors: string[];
  title: string;
  subtitle?: string;
}

const Header = ({ colors, title, subtitle }: HeaderProps) => {
  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={colors}>
      <SafeAreaView>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    paddingVertical: 10,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
  },
  subtitle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
    paddingHorizontal: 20,
  },
});
