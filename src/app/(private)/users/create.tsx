import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";

import { create_user } from "@/services/users_service";
import { CreateUserRequest } from "@/types/users";
import FormInput from "@/components/FormInput/FormInput";

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
           <TouchableOpacity
                onPress={() => handleCreateUser(username, password, email)}
            >
                <Text>Create</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
