import Button from '@/components/ui/button';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, View } from 'react-native';


const Verification = () => {

    const router = useRouter();

    // const {
    //     control,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({
    //     defaultValues: {
    //         email: "",
    //     },
    //     resolver: yupResolver(forgotpasswordSchema),
    // });


    return (
        <View className='w-full h-full flex items-center justify-center bg-gradient-to-b from-[#DDD5E9] to-[#F2FDE8]'>
            <View className='w-[90%] h-[85%] bg-white rounded-[12px] flex items-center shodow-lg bg-gradient-to-b from-[#F2EFF7] to-[#FAFEF7] py-5 px-3 gap-6'>
                <View className='flex items-center justify-center gap-[3px]'>
                    <Text className='text-[#111827] text-[25px]'
                        style={{ fontFamily: "Nunito_700Bold" }}
                    >Verify your email</Text>
                    <Text className='text-[#7A7B7C]' style={{ fontFamily: " Inter_400Regular," }}>Please enter six digits sent to your email</Text>
                </View>
                <View className='w-full flex flex-row items-center justify-between'>
                    <TextInput className='w-11 h-12 p-3 bg-[#FFFFFF]' style={{ borderWidth: 1, borderColor: "#D1D1D1", borderRadius: 8, outline: "none",}} maxLength={1}  keyboardType="numeric" />
                    <TextInput className='w-11 h-12 p-3 bg-[#FFFFFF]' style={{ borderWidth: 1, borderColor: "#D1D1D1", borderRadius: 8, outline: "none",}}  maxLength={1}  keyboardType="numeric" />
                    <TextInput className='w-11 h-12 p-3 bg-[#FFFFFF]' style={{ borderWidth: 1, borderColor: "#D1D1D1", borderRadius: 8, outline: "none",}}  maxLength={1}  keyboardType="numeric" />
                    <TextInput className='w-11 h-12 p-3 bg-[#FFFFFF]' style={{ borderWidth: 1, borderColor: "#D1D1D1", borderRadius: 8, outline: "none",}}  maxLength={1}  keyboardType="numeric" />
                    <TextInput className='w-11 h-12 p-3 bg-[#FFFFFF]' style={{ borderWidth: 1, borderColor: "#D1D1D1", borderRadius: 8, outline: "none",}}  maxLength={1}  keyboardType="numeric" />
                    <TextInput className='w-11 h-12 p-3 bg-[#FFFFFF]' style={{ borderWidth: 1, borderColor: "#D1D1D1", borderRadius: 8, outline: "none",}}  maxLength={1}  keyboardType="numeric" />
                </View>
                <View className='w-full flex gap-3'>
                    <Button title='Confirm' onPress={() => router.push("/(auth)/signup")} />
                    <Text className='flex flex-row items-center justify-center gap-2' style={{ fontFamily: " Inter_400Regular," }} >Already have an account?<Text className="cursor-pointer text-[#512F84]" onPress={() => router.push("/(auth)/forget-password")} style={{ fontFamily: " Inter_400Regular," }} >Log In</Text></Text>
                </View>
            </View>
        </View>
    )
}

export default Verification
