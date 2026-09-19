import { Link } from "expo-router";
import { TouchableOpacity, StyleSheet } from "react-native";


interface LinkButtonProps {
    path: string,
    title: string
}

export default function LinkButton ({path, title}: LinkButtonProps) {
    
    return (
        <TouchableOpacity style={styles.button}>
            <Link href={path} style={styles.title}>{title}</Link>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#00b4d8",
        padding: 10,
        borderRadius: 4,
        width: "80%",
    },
    title: {
        textAlign: 'center',
    }
});
