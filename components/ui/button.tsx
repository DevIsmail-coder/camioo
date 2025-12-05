import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onPress,}) => {

  return (
    <TouchableOpacity
    className="w-full"
      style={[
        styles.button,
        { backgroundColor: "#522598" },
      ]}
      onPress={onPress}
    >
      <Text style={{fontSize: 16, fontWeight: "600", color: "#FFFFFF", fontFamily: "Inter_700Bold,," }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 5,
  },
});

export default Button;
