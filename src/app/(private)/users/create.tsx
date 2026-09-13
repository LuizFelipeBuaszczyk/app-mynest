import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";

import { create_user } from "@/services/users_service";
import { CreateUserRequest } from "@/types/users";

export default function Create() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleCreateUser = (username: string, password: string, email: string) => {
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
        <ScrollView>
            <Text>Crete an user</Text>

            <Text>Username</Text>
            <TextInput
                placeholder="username"
                onChangeText={(newUsername) => setUsername(newUsername)}
            />
            <Text>Email</Text>
            <TextInput
                placeholder="email"
                onChangeText={(newEmail) => setEmail(newEmail)}
            /><Text>Password</Text>
            <TextInput
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(newPassword) => setPassword(newPassword)}
            />
            <TouchableOpacity
                onPress={() => handleCreateUser(username, password, email)}
            >
                <Text>Create</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
