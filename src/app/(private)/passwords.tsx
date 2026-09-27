
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

import LinkButton from "@/components/LinkButton/LinkButton";
import ListRow from "@/components/ListRow/ListRow";
import { Password } from "@/types/password";

export default function Passwords() {
    const [passwords, setPasswords] = useState<Array<Password>>([]);
        
    useEffect(() => {
        setPasswords([{
            id: 1,
            name: 'Teste',
        }]);
    }, [])

    const handleRow = () => {
        console.log("You clicked in any row");
    }

    return (
        <ScrollView>
            <Text style={styles.title}>Passwords</Text>
            <View style={styles.table}>
            {passwords.map((password) => (
                <ListRow 
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
    table: {}
});
