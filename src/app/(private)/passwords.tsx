
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

import LinkButton from "@/components/LinkButton/LinkButton";
import ListRow from "@/components/ListRow/ListRow";
import { Password } from "@/types/password";

import { list_passwords } from "@/services/password_service";
import { ListPasswordResponse } from "@/types/password";

export default function Passwords() {
    const [passwords, setPasswords] = useState<Array<Password>>([]);
    
    // Load passwords
    useEffect(() => {
        const response = list_passwords()
            .then((res) => {
                if (!res.data) {
                    console.log("invalid response data");
                    return;
                }
                const payload = res.data as ListPasswordResponse;
                setPasswords(payload.data);
            });
        
    }, [])

    const handleRow = () => {
        // TODO: Ao clicar em uma linha ele deve redirecionar para a página com os detalhes daquela password
    }

    return (
        <ScrollView>
            <Text style={styles.title}>Passwords</Text>
            <View style={styles.table}>
            {passwords.map((password) => (
                <ListRow 
                    key= {password.id.toString()}
                    title= {password.name}
                    onPress= {handleRow}
                />
            ))}
            </View>
            <View style={styles.viewActions}>
               <LinkButton 
                title="Create"
                path='/(private)/passwords/create'
               /> 
            </View>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        textAlign: 'center',
        margin: 10
    },
    viewActions: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    table: {
        margin: 'auto',
        width: '80%'
    }
});
