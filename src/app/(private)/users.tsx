import { Link } from "expo-router";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function Users(){
    return (
        <ScrollView>
            <Text>Users</Text>
            <TouchableOpacity>
                <Link href="/(private)/users/create">Create</Link>
            </TouchableOpacity>
       </ScrollView>
    );
}

const styles = StyleSheet.create({

});
