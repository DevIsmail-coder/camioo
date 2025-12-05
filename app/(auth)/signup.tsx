import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'expo-router';
import React from 'react';
import { useForm } from "react-hook-form";
import { Text, View } from 'react-native';
import { signupSchema } from '../../schema/signup-schema';

const Signup = () => {

    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(signupSchema),
    });


    return (
        <View className='w-full h-full flex items-center justify-center bg-gradient-to-b from-[#DDD5E9] to-[#F2FDE8]'>
            <View className='w-[90%] min-h-h-[85%] bg-white rounded-[12px] flex items-center shodow-lg bg-gradient-to-b from-[#F2EFF7] to-[#FAFEF7] py-5 px-3 gap-6'>
                <View className='flex items-center justify-center gap-[3px]'>
                    <Text className='text-[#111827] text-[25px]' 
                     style={{ fontFamily: "Nunito_700Bold" }}
                    >Sign Up</Text>
                    <Text className='text-[#7A7B7C]'>Create an account to continue!</Text>
                </View>
                <View className='w-full flex gap-3'>
                    <Input
                        title='First Name'
                        placeholder='Enter your first name'
                        name='firstName'
                        control={control}
                        secureTextEntry
                        error={errors.email?.message}
                    />
                    <Input
                        title='Last Name'
                        placeholder='Enter your last name'
                        name='lastName'
                        control={control}
                        secureTextEntry
                        error={errors.email?.message}
                    />
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
                    <Input
                        title='Confirm Password'
                        placeholder='Enter your confirm password'
                        name='confirmPassword'
                        control={control}
                        secureTextEntry
                        error={errors.password?.message}
                        rightIcon="eye-off-outline"
                    />
                </View>
                <View className='w-full flex gap-3'>
                    <Button title='Register' onPress={() => router.push("/(auth)")} />
                    <View className='flex flex-row items-center justify-center gap-2'>Already have an account? <Text className="cursor-pointer text-[#512F84]" onPress={() => router.push("/(auth)")}  >Log In</Text></View>
                </View>
            </View>
        </View>
    )
}

export default Signup
