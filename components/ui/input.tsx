import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import type { InputProps } from "../../types/input";



export default function Input({
  name,
  control,
  placeholder,
  rightIcon,
  secureTextEntry,
  rules,
  title,
}: InputProps) {

  const [show, setShow] = React.useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const showError = !!error && !value;
        return (
          <View className="mb-4 w-full flex gap-2">
            <Text 
            style={{ color: "#525454", fontFamily: " Inter_400Regular," }}
            >{title}</Text>
            <View
              className="flex-row items-center rounded-2sm"
              style={{
                borderWidth: 1,
                borderColor: "#D1D1D1",
                borderRadius: 8,

              }}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor={"#A4A5A6"}
                secureTextEntry={secureTextEntry && !show}
                style={{
                  flex: 1,
                  fontSize: 16,     
                  padding: 16,
                  outline: "none",
                 fontFamily: " Inter_400Regular,"
                }}
              />

              {rightIcon && (
                <TouchableOpacity
                  style={{ paddingLeft: 8 }}
                  onPress={() => setShow((prev) => !prev)}
                >
                  <Ionicons
                    name={show ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={showError ? "red" : "#A4A5A6"}  
                    style={{ marginRight: 10, outline: "none" }}           
                  />
                </TouchableOpacity>

              )}
            </View>

            {error && (
              <Text style={{ color: "red", marginTop: 4, fontSize: 13 }}>
                {error.message}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
}
