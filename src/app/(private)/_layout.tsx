import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter, Slot } from "expo-router";
import { storage } from "@/utils/storage";
import AsideNavBar from "@/components/AsideNavBar";

export default function PrivateLayout() {
    const router = useRouter();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const token = storage.getString("access_token");
        if (!token) {
            router.replace("/login");
        }
    }, [router]);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
                    <Text>☰</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>MyNest</Text>
            </View>
            <Slot />
            <AsideNavBar visible={isSidebarOpen} onClose={toggleSidebar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        padding: 16,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        flexDirection: "row",
        alignItems: "center",
    },
    menuButton: {
        padding: 8,
    },
    headerTitle: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
});
