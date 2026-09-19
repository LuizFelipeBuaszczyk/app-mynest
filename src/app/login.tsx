import { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, View } from "react-native";

import { login } from "@/services/auth_service";
import { LoginRequest } from "@/types/auth";
import { FunctionResponse, StatusEnum } from "@/types/response";
import { useRouter } from "expo-router";

import FormInput from "@/components/FormInput/FormInput";
import ActionButton from "@/components/ActionButton/ActionButton";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
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
            <View style={styles.form}>
                <FormInput 
                    placeholder="username"
                    label="Username"
                    onChange={setUsername}
                />
                <FormInput 
                    placeholder="password"
                    label="Password"
                    onChange={setPassword}
                    securityText={true}
                />
            </View>
            <ActionButton 
                text="Login"
                onPress={handleLogin}
            />
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 20
    },
})
