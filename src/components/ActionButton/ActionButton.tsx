import { TouchableOpacity, Text, StyleSheet } from "react-native"; 

interface ActionButtonProps {
    text: string,
    onPress: CallableFunction
}

export default function ActionButton ( {text, onPress}: ActionButtonProps) {

    return (
       <TouchableOpacity style={styles.button} onPress={() => onPress()}>
            <Text>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#00b4d8",
    }
});
