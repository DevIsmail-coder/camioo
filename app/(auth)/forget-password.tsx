import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'expo-router';
import React from 'react';
import { useForm } from "react-hook-form";
import { Text, View } from 'react-native';
import { forgotpasswordSchema } from '../../schema/forgot-password-schema';

const Forgetpassword = () => {

    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
        },
        resolver: yupResolver(forgotpasswordSchema),
    });


    return (
        <View className='w-full h-full flex items-center justify-center bg-gradient-to-b from-[#DDD5E9] to-[#F2FDE8]'>
            <View className='w-[90%] h-[85%] bg-white rounded-[12px] flex items-center shodow-lg bg-gradient-to-b from-[#F2EFF7] to-[#FAFEF7] py-5 px-3 gap-6'>
                <View className='flex items-center justify-center gap-[3px]'>
                    <Text  className='text-[#111827] text-[25px]' 
                     style={{ fontFamily: "Nunito_700Bold" }}
                    >Forgot Password</Text>
                    <Text className='text-[#7A7B7C]'>Enter your email to reset your password</Text>
                </View>
                <View className='w-full flex gap-3'>
                    <Input
                        title='Email'
                        placeholder='Enter your new password'
                        name='Email'
                        control={control}
                        error={errors.email?.message}
                    />
                    
                </View>
                <View className='w-full flex gap-3'>
                    <Button title='Confirm' onPress={() => router.push("/(auth)/reset-password")} />
                </View>
            </View>
        </View>
    )
}

export default Forgetpassword
