import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

interface ListRowProps {
    title: string,
    onPress: CallableFunction
}

export default function ListRow({title, onPress}: ListRowProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <Text>{title}</Text>
        </TouchableOpacity>
    ); 
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 5
    }
});
