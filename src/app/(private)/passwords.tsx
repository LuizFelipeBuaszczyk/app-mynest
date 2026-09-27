
import { StyleSheet, ScrollView, View, Text } from "react-native";

import LinkButton from "@/components/LinkButton/LinkButton";

export default function Passwords() {
    return (
        <ScrollView>
            <Text style={styles.title}>Passwords</Text>
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
    }
});
