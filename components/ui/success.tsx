import Button from '@/components/ui/button';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, View } from "react-native";
import type { SuccessProps } from '../../types/reuseable-component';

const Successcomponet = ({
    head,
    titles,
    message,
    route,
}: SuccessProps) => {

     const router = useRouter();

    return (
        <View className='w-full h-full flex items-center justify-center bg-gradient-to-b from-[#DDD5E9] to-[#F2FDE8]'>
            <View className='w-[90%] min-h-[80%] flex items-center justify-between flex-col bg-blue-500' 
            style={{display: 'flex', alignItems: "center", minHeight: '80%',  justifyContent: 'space-between', flexDirection: 'column',}}
            >
                <View className='flex items-center justify-center gap-4'>
                    <Image />
                <Text className='text-[#111827] text-[25px]' 
                     style={{ fontFamily: "Nunito_700Bold", paddingTop: 40 }}>
                    {head}
                </Text> 
                <Text className='text-[#7A7B7C]'
                 style={{ fontFamily: "Inter_400Regular", textAlign: 'center', }}> 
                    {message} </Text>
                </View>
                <View className='w-full'>
                    <Button title={titles} onPress={() => router.push(route as any)} 
                    //  style={{ fontFamily: "Inter_400Regular"}} 
                     />
                </View>
            </View>
        </View>
    )
}

export default Successcomponet
