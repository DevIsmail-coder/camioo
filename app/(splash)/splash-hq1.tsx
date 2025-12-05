import { useRouter } from "expo-router";
import React from 'react';
import { IoMdArrowForward } from "react-icons/io";
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

const Splashhq1 = () => {

  const router = useRouter();

  return (
    <ImageBackground
      className='w-full h-full flex items-center justify-end pb-10'
      source={require("../../assets/images/splash1.png")}
      resizeMode='cover'
      style={{ width: '100%', height: '100%' }}
      imageStyle={{ resizeMode: 'contain' }}
    >
      <View className='w-[85%] text-center flex items-center justify-center gap-2'>
        <Text className='text-white text-[22px]' 
        style={{ fontFamily: "Nunito_700Bold" }}
        >Create a shared event camera</Text>
        <Text className='text-white text-center text-[14px]' 
         style={{ fontFamily: " Inter_400Regular," }}
        >Create an event, share it with guests, and everyone’s photos go to one album.</Text>
        <View className='w-full flex flex-row items-center justify-center gap-2 pt-2'>
          <View  className='flex w-6 h-2 rounded-[12px] bg-[#6640FF]'/>
          <View className='w-2 h-2 rounded-[50%] bg-[#D9D9D9]'/>
          <View className='w-2 h-2 rounded-[50%] bg-[#D9D9D9]'/>
        </View>
        <View className='w-full flex flex-row items-center justify-between pt-3'>
          <Text className='text-[#FFFFFF]'
           onPress={() => router.push('/(auth)')}
          >Skip</Text>
          <TouchableOpacity className='flex items-center justify-center w-14 h-14 rounded-[50%] bg-[#471791]' 
          onPress={() => router.push('/splash-hq2')} >
            <IoMdArrowForward className='text-[#FFFFFF] text-[25px]' />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Splashhq1
