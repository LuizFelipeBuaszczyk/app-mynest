
import { Text, StyleSheet, TextInput, View } from "react-native";

interface FormInputProps {
    label: string,
    placeholder: string,
    onChange: CallableFunction,
    securityText?: boolean
}

export default function FormInput({label, placeholder, onChange, securityText}: FormInputProps) {
    
    securityText = securityText ? true : false;

    return (
        <View style={styles.container}>
            <Text>{label}</Text> 
            <TextInput 
                placeholder={placeholder}
                onChangeText={(newText) => onChange(newText)}
                secureTextEntry={securityText}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        paddingHorizontal: 20 
    },
    input: {
        borderRadius: 4,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
    },
});
