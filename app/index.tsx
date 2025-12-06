import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const Index = () => {
  const router = useRouter();


  // const topLeft = useRef(new Animated.ValueXY({ x: -200, y: -200 })).current;
  // const topRight = useRef(new Animated.ValueXY({ x: 200, y: -200 })).current;
  // const bottomLeft = useRef(new Animated.ValueXY({ x: -200, y: 200 })).current;
  // const bottomRight = useRef(new Animated.ValueXY({ x: 200, y: 200 })).current;

  // useEffect(() => {
  //   Animated.parallel([
  //     Animated.timing(topLeft, {
  //       toValue: { x: 0, y: 0 },
  //       duration: 800,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(topRight, {
  //       toValue: { x: 0, y: 0 },
  //       duration: 800,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(bottomLeft, {
  //       toValue: { x: 0, y: 0 },
  //       duration: 800,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(bottomRight, {
  //       toValue: { x: 0, y: 0 },
  //       duration: 800,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // }, []);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     router.replace("/(splash)");
  //   }, 2000);
  // }, []);

  return (
    <View className="w-full h-full bg-gradient-to-b from-[#471791] to-[#724DAB] flex items-center justify-center">
      <TouchableOpacity className="w-40 flex items-center gap-0.5" 
       onPress={() => router.replace("/(splash)")}
      >

        {/* Top row */}
        <View className="w-full h-14 flex flex-row justify-between">
          <View
            className="w-[30%] h-full bg-white rounded-tl-[5px] flex items-center pt-1"
          > <View  className="w-1 h-1 bg-[#471791] rounded-[50%]"/> </View>
          <View
            className="w-[68%] h-[97%] bg-white rounded-tr-[5px] flex flex-row items-center justify-end pr-1"
          > <View  className="w-1 h-3 bg-[#471791] rounded-[12px]"/> </View>
        </View>

        {/* Bottom row */}
        <View className="w-full h-14 flex flex-row items-end justify-between">
          <View
            className="w-[68%] h-[97%] bg-white rounded-bl-[5px] flex flex-row items-center justify-start"
          > <View className="w-1 h-4 bg-[#471791] rounded-tr-[12px] rounded-br-[12px]"/> </View>
          <View
            className="w-[30%] h-full bg-white rounded-br-[5px] flex items-center justify-end"
          > <View  className="w-1 h-0.5 bg-[#471791] rounded-t-[12px]"/> </View>
        </View>

      </TouchableOpacity>
    </View>
  );
};

export default Index;
