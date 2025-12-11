import Button from '@/components/ui/button';
import { useRouter } from 'expo-router';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const Date = () => {
  const router = useRouter();
  return (
    <View className='w-full h-full bg-[#F9F9F9] flex items-center justify-between pt-10 pb-10'>
      <View className='w-[90%] flex gap-8'>
        <View className='flex items-start gap-5'>
          <TouchableOpacity className='flex items-center justify-center w-12 h-12 rounded-[50%] bg-[#F4F4F4]'
            onPress={() => router.push('/splash-hq2')} >
            <IoIosArrowBack className='text-[#525454] text-[15px]' />
          </TouchableOpacity>
          <View className='w-full h-1 bg-[#D1D1D1] rounded-[12px]'>
            <View className='w-[40%] h-full bg-[#101010] rounded-[12px]' />
          </View>
        </View>
        <View className='flex gap-2'>
          <Text className='text-[#111827] text-[20px]'
            style={{ fontFamily: "Nunito_700Bold" }} >Set your event time and date</Text>
          <Text className='text-[#A4A5A6]' style={{ fontFamily: "Inter_600SemiBold," }} >Set the date and time guest can join event</Text>
        </View>
             <TextInput className='outline-none text-[18px] placeholder-[#101010]' placeholder='11/12/2025, 11:00AM' 
                style={{ fontFamily: "Inter_600SemiBold," }}
                />
      </View>
      <View className='w-[90%]'>
        <Button title='Continue' onPress={() => router.push("/(create-events)/limit")} />
      </View>
    </View>
  )
}

export default Date
