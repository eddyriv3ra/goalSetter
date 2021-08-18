import React from "react";
import { StyleSheet, Text, Pressable, PressableProps } from "react-native";

interface ButtonProps extends PressableProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
}

const Button = ({
  onPress,
  title,
  disabled,
  ...pressableProps
}: ButtonProps) => {
  const handleOnPress = () => {
    !disabled && onPress();
  };

  return (
    <Pressable
      onPress={handleOnPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#a0d37c" : "#5FBA20",
        },
        styles.appButtonContainer,
        disabled && {
          backgroundColor: "rgba(143, 155, 179, 0.24)",
          color: "rgba(143, 155, 179, 0.48);",
        },
      ]}
      {...pressableProps}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
