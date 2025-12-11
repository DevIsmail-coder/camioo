import Button from '@/components/ui/button';
import { useRouter } from 'expo-router';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Text, TouchableOpacity, View } from 'react-native';

const Limit = () => {
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
                        <View className='w-[60%] h-full bg-[#101010] rounded-[12px]' />
                    </View>
                </View>
                <View className='flex gap-2'>
                    <Text className='text-[#111827] text-[20px]'
                        style={{ fontFamily: "Nunito_700Bold" }} >Set your event photo rules</Text>
                    <Text className='text-[#A4A5A6]' style={{ fontFamily: "Inter_600SemiBold," }} >Decide how many photos your event can hold and how many each guest can upload.</Text>
                </View>
                <View className='flex gap-3'>
                    <Text className='text-[#111827] text-[15px]'
                        style={{ fontFamily: "Nunito_700Bold" }} >Total event photo limit</Text>
                
                <View className='w-full flex flex-wrap flex-row text-center items-center gap-4 justify-center'>
                    <View className='bg-[#F4F4F4] min-w-[20%] placeholder:[#525454] border-[1px] border-[#C2C2C3] px-2 py-1.5 rounded-[5px] text-[#525454]' >50</View>
                    <View className='bg-[#F4F4F4] min-w-[20%] placeholder:[#525454] border-[1px] border-[#C2C2C3] px-2 py-1.5 rounded-[5px] text-[#525454]' >100</View>
                    <View className='bg-[#F4F4F4] min-w-[20%] placeholder:[#525454] border-[1px] border-[#C2C2C3] px-2 py-1.5 rounded-[5px] text-[#525454]' >300</View>
                    <View className='bg-[#F4F4F4] min-w-[20%] placeholder:[#525454] border-[1px] border-[#C2C2C3] px-2 py-1.5 rounded-[5px] text-[#525454]' >500</View>
                    <View className='bg-[#F4F4F4] min-w-[20%] placeholder:[#525454] border-[1px] border-[#C2C2C3] px-2 py-1.5 rounded-[5px] text-[#525454]' >700</View>
                    <View className='bg-[#F4F4F4] min-w-[20%] placeholder:[#525454] border-[1px] border-[#C2C2C3] px-3 py-1.5 rounded-[5px] text-[#525454]' >1,000</View>
                    <View className='bg-[#F4F4F4] min-w-[20%] placeholder:[#525454] border-[1px] border-[#C2C2C3] px-3 py-1.5 rounded-[5px] text-[#525454]' >Unlimited</View>
                </View>
                </View>
                <View className='flex iteams-center justify-between'>
                    <Text className='text-[#111827] text-[15px]'
                        style={{ fontFamily: "Nunito_700Bold" }} >Limit uploads per guest</Text>
                </View>
                    <View className='flex iteams-center justify-between'>
                    <Text className='text-[#111827] text-[15px]'
                        style={{ fontFamily: "Nunito_700Bold" }} >Guests can download images</Text>
                </View>
            </View>
            <View className='w-[90%]'>
                <Button title='Continue' onPress={() => router.push("/(create-events)/time")} />
            </View>
        </View>
    )
}

export default Limit
