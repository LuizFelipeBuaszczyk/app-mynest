import { useState } from "react";
import { ScrollView, Text, StyleSheet,View } from "react-native";

import { create_user } from "@/services/users_service";
import { CreateUserRequest } from "@/types/users";

import FormInput from "@/components/FormInput/FormInput";
import ActionButton from "@/components/ActionButton/ActionButton";

export default function Create() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleCreateUser = () => {

        const request: CreateUserRequest = {
            'username': username,
            'password': password,
            'email': email
        }

        create_user(request)
            .then((response) => {
                console.log(response.message);
            });
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.form}>
                <Text>Crete an user</Text>
                <FormInput 
                    label='Username'
                    placeholder='username'
                    onChange={setUsername}
                /> 
                <FormInput 
                    label='Email'
                    placeholder='email'
                    onChange={setEmail}
                /> 
                 <FormInput 
                    label='Password'
                    placeholder='password'
                    onChange={setPassword}
                    securityText={true}
                /> 
                <ActionButton 
                    text="Create"
                    onPress={handleCreateUser}
                /> 
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    }
});
