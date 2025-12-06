import { Ionicons } from '@expo/vector-icons';


export type InputProps = {
    name: string;
    control: any;
    title?: string;
    placeholder?: string;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    secureTextEntry?: boolean;
    onRightIconPress?: () => void;
    error?: string;
    rules?: object;
};

export type SuccessProps = {
    message: string;
    head: string;
    titles: string;
    route: string;
}