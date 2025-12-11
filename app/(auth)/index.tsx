import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'expo-router';
import React from 'react';
import { useForm } from "react-hook-form";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Text, View } from 'react-native';
import { loginSchema } from '../../schema/login-schema';

const Index = () => {

    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(loginSchema),
    });


    return (
        <View className='w-full h-full flex items-center justify-center bg-gradient-to-b from-[#DDD5E9] to-[#F2FDE8]'>
            <View className='w-[90%] min-h-[85%] bg-white rounded-[12px] flex items-center shodow-lg bg-gradient-to-b from-[#F2EFF7] to-[#FAFEF7] py-5 px-3 gap-6'>
                <View className='flex items-center justify-center gap-[3px]'>
                    <Text className='text-[#111827] text-[25px]' 
                     style={{ fontFamily: "Nunito_700Bold" }}
                    >Login</Text>
                    <Text className='text-[#7A7B7C]' style={{ fontFamily: " Inter_400Regular," }}>Enter your email and password to log in </Text>
                </View>
                <View className='w-full flex items-center gap-4'>
                    <View className='w-full flex flex-row items-center justify-center gap-[17px] p-[10px] rounded-[30px] border-[1px] border-[#6C45A7] cursor-pointer bg-[#FFFFFF]' >
                        <FcGoogle className='text-[25px]' /> <p className='text-sm font-[250]' style={{ fontFamily: " Inter_400Regular," }}>Continue with Google</p>
                    </View>
                    <View className='w-full flex flex-row items-center justify-center gap-[17px] p-[10px] rounded-[30px] border-[#6C45A7] border-[1px] cursor-pointer bg-[#FFFFFF]' >
                        <FaApple className='text-[25px]' /> <p className='text-sm font-[250]' style={{ fontFamily: " Inter_400Regular," }}>Continue with Apple</p>
                    </View>
                    <View className='w-full flex flex-row items-center justify-between'>
                        <View className="w-5/12 h-[0.5px] bg-[#FFFFFF]" />
                        <Text className="text-[#7A7B7C]" style={{ fontFamily: " Inter_400Regular," }}>Or</Text>
                        <View className="w-5/12 h-[0.5px] bg-[#FFFFFF]" />
                    </View>
                </View>
                <View className='w-full flex gap-3'>
                    <Input
                        title='Email'
                        placeholder='Enter your email address'
                        name='Email'
                        control={control}
                        secureTextEntry
                        error={errors.email?.message}
                    />
                    <Input
                    title='Password'
                    placeholder='Enter your password'
                    name='password'
                    control={control}
                    secureTextEntry
                    error={errors.password?.message}
                    rightIcon="eye-off-outline"
                    />
                </View>
                <View className='w-full flex gap-3'>
                    <Button title='Log in' onPress={() => router.push("/(create-events)")} />
                        <Text className='flex flex-row items-center justify-center gap-2' style={{ fontFamily: " Inter_400Regular," }} >Don’t have an account? <Text className="cursor-pointer text-[#512F84]" onPress={() => router.push("/(auth)/forget-password")} style={{ fontFamily: " Inter_400Regular," }} >Sign Up</Text></Text>
                </View>
            </View>
        </View>
    )
}

export default Index
