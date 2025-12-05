import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, View } from 'react-native';

const Index = () => {
    const router = useRouter();


    useEffect(() => {
        const timeout = setTimeout(() => {
            router.replace("/(splash)/splash-hq1");
        }, 2000);
    }, []);

    return (
        <View className="w-full h-full bg-gradient-to-b from-[#471791] to-[#724DAB] flex flex-row items-center justify-center">
            <View className='flex-1 w-40 h-28 object-cover'>
                <Image
                    source={require("../../assets/images/Group 36 1.png")}
                    className='object-contain w-[100%] h-[100%]'
                    style={{ width: '100%', height: '100%' }}
                    resizeMode='contain'
                    // {{ resizeMode: 'contain' }}
                />
            </View>
        </View>
    )
}

export default Index
