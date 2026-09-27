import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import FormInput from "@/components/FormInput/FormInput";
import ActionButton from "@/components/ActionButton/ActionButton";

import { CreatePasswordRequest } from "@/types/password";
import { create_password } from "@/services/password_service";

export default function Create() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [password, setPassword] = useState("");

    const handleCreatePassword = () => {
        const request: CreatePasswordRequest = {
            name: name,
            description: description,
            password: password
        }
    
        create_password(request)
            .then((response) => {
                console.log(response);
            });
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.form}>
                <Text>Crete an user</Text>
                <FormInput 
                    label='Name'
                    placeholder='name'
                    onChange={setName}
                /> 
                <FormInput 
                    label='Description'
                    placeholder='description'
                    onChange={setDescription}
                /> 
                 <FormInput 
                    label='Password'
                    placeholder='password'
                    onChange={setPassword}
                    securityText={true}
                /> 
                <ActionButton 
                    text="Create"
                    onPress={handleCreatePassword}
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
