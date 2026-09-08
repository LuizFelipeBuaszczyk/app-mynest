import { RelativePathString, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface AsideNavBarProps {
    visible: boolean;
    onClose: () => void;
}

const navItems = [
    { label: "Dashboard", route: "/(private)/dashboard" },
];

export default function AsideNavBar({ visible, onClose }: AsideNavBarProps) {
    const router = useRouter();
    if (!visible) return null;
        
    const handleNavigation = (route: RelativePathString) => {
        router.replace(route);
        onClose();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.overlay} onPress={onClose} activeOpacity={1} />
            <View style={styles.sidebar}>
                <View style={styles.content}>
                    <Text style={styles.title}>Mynest</Text>
                    {navItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.navItem}
                            onPress={() => handleNavigation(item.route)}
                        >
                            <Text style={styles.navItemText}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        flexDirection: "row",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    sidebar: {
        width: "50%",
        backgroundColor: "#fff",
    },
    content: {
        display: "flex",
        alignItems: "center",
    },
    title: {
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#00b4d8",
    },
    navItem: {
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#ddd",
    },
    navItemText: {
        fontSize: 16,
        color: "#333",
    },
});
