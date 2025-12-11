import Button from "@/components/ui/button";
import { useRouter } from "expo-router";
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

const Splashhq3 = () => {
 
  const router = useRouter();

  return (
    <ImageBackground
      className='w-full h-full flex items-center justify-end pb-10'
      source={require("../../assets/images/splash3.png")}
      resizeMode='cover'
      style={{ width: '100%', height: '100%' }}
      imageStyle={{ resizeMode: 'contain' }}
    >
      <View className='w-[85%] text-center flex items-center justify-center gap-2'>
        <Text className='text-white text-[22px]' 
        style={{ fontFamily: "Nunito_700Bold" }}
        >Everyone’s moments, one album</Text>
        <Text className='text-white text-center text-[14px]' 
        style={{ fontFamily: " Inter_400Regular," }}
        >Once the host reveals the album, all guests can enjoy every photo and memory.</Text>
        <View className='w-full flex flex-row items-center justify-center gap-2 pt-2'>
          <View className='w-2 h-2 rounded-[50%] bg-[#D9D9D9]'/>
          <View className='w-2 h-2 rounded-[50%] bg-[#D9D9D9]'/>
             <View  className='flex w-6 h-2 rounded-[12px] bg-[#6640FF]'/>
        </View>
        <View className='w-full pt-3'>
          <Button title=" Get Started" onPress={() => router.push('/(auth)')} />
        </View>
      </View>
    </ImageBackground>
  )
}

export default Splashhq3
