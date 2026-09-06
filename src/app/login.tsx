import { Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";


export default function Login() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <Text>Username</Text>
            <TextInput style={styles.input} />
            <Text>Password</Text>
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.button}>
                <Text>Login</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 32,
    },
    title: {
        fontSize: 32,
        margin: 10,
    },
    input: {
        borderRadius: 4,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 10
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#00b4d8",
    }
})
