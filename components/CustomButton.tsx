import { Pressable, Text } from "react-native";

export const CustomButton = ({ onPress, title, style }) => (
    <Pressable
        onPress={onPress}
        style={style}
    >
        <Text style={{ color: "purple", fontSize: 18 }}>{title}</Text>
    </Pressable>
);