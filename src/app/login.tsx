import { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";

import { login } from "@/services/auth_service";
import { LoginRequest } from "@/types/auth";
import { FunctionResponse, StatusEnum } from "@/types/response";
import { useRouter } from "expo-router";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (username: string, password: string) => {
        const request: LoginRequest = {
            username: username,
            password: password
        }
        login(request)
            .then((result: FunctionResponse) => {
            if (result.status == StatusEnum.SUCCESS) {
                return router.replace('/(private)/dashboard');
            } 
        });
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <Text>Username</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Username"
                value={username}
                onChangeText={(newUsername) => setUsername(newUsername)}
            />
            <Text>Password</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Password"
                value={password}
                onChangeText={(newPassword)=>setPassword(newPassword)}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleLogin(username, password)}>
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
