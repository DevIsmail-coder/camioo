import Button from '@/components/ui/button';
import { useRouter } from 'expo-router';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { TbLoader } from "react-icons/tb";
import { Text, TouchableOpacity, View } from 'react-native';

const Time = () => {
  const router = useRouter();
  return (
    <View className='w-full h-full bg-[#F9F9F9] flex items-center justify-between pt-10 pb-10'>
      <View className='w-[90%] flex gap-8'>
        <View className='flex items-start gap-5'>
          <TouchableOpacity className='flex items-center justify-center w-12 h-12 rounded-[50%] bg-[#F4F4F4]'
            onPress={() => router.push('/')} >
            <IoIosArrowBack className='text-[#525454] text-[15px]' />
          </TouchableOpacity>
          <View className='w-full h-1 bg-[#D1D1D1] rounded-[12px]'>
            <View className='w-[80%] h-full bg-[#101010] rounded-[12px]' />
          </View>
        </View>
        <View className='flex gap-2'>
          <Text className='text-[#111827] text-[20px]'
            style={{ fontFamily: "Nunito_700Bold" }} >Set your photo reveal time</Text>
          <Text className='text-[#A4A5A6]' style={{ fontFamily: "Inter_600SemiBold," }} >Select the time guests can start viewing photos</Text>
        </View>
        <View className='w-full flex gap-3'>
            <View className='bg-[#F4F4F4] placeholder:[#525454] border-[1px] border-[#C2C2C3] flex flex-row gap-2 px-4 py-6 rounded-[9px]'><TbLoader className='text-[#2D2F30]' /> <Text className='text-[#2D2F30]'>Instant reveal during event</Text></View>
            <View className='bg-[#F4F4F4] placeholder:[#525454] border-[1px] border-[#C2C2C3] flex flex-row gap-2 px-4 py-6 rounded-[9px]'><TbLoader className='text-[#2D2F30]' /> <Text className='text-[#2D2F30]'>4 hours after event</Text></View>
            <View className='bg-[#F4F4F4] placeholder:[#525454] border-[1px] border-[#C2C2C3] flex flex-row gap-2 px-4 py-6 rounded-[9px]'><TbLoader className='text-[#2D2F30]' /> <Text className='text-[#2D2F30]'>12 hours after event</Text></View>
            <View className='bg-[#F4F4F4] placeholder:[#525454] border-[1px] border-[#C2C2C3] flex flex-row gap-2 px-4 py-6 rounded-[9px]'><TbLoader className='text-[#2D2F30]' /> <Text className='text-[#2D2F30]'>24 hours after event</Text></View>
        </View>
      </View>
      <View className='w-[90%]'>
        <Button title='Continue' onPress={() => router.push("/(create-events)/cover")} />
      </View>
    </View>
  )
}

export default Time
