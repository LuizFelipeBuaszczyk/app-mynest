import { ScrollView, Text, StyleSheet, View } from "react-native";

import LinkButton from "@/components/LinkButton/LinkButton";


export default function Users(){
    return (
        <ScrollView>
            <Text style={styles.title}>Users</Text>
            <View style={styles.viewActions}>
               <LinkButton 
                title="Create"
                path='/(private)/users/create'
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
