import { TouchableOpacity, Text } from "react-native";

interface ListRowProps {
    title: string,
    onPress: CallableFunction
}

export default function ListRow({title, onPress}: ListRowProps) {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <Text>{title}</Text>
        </TouchableOpacity>
    ); 
}
