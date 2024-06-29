import React from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './style';

interface PaymentType {
    redirectUrl: string;
    handleWebViewNavigationStateChange: any;
    showWebView: boolean;
    setShowWebView: any;
}

const Payment = ({ redirectUrl, handleWebViewNavigationStateChange, showWebView, setShowWebView }: PaymentType) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showWebView}
            onRequestClose={() => {
                setShowWebView(false);
            }}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>NSC Movie</Text>
                        <TouchableOpacity onPress={() => setShowWebView(false)} style={styles.closeButton}>
                            <Ionicons name="close" size={24} color={styles.closeIcon.color} />
                        </TouchableOpacity>
                    </View>
                    <WebView
                        source={{ uri: redirectUrl }}
                        onNavigationStateChange={handleWebViewNavigationStateChange}
                        style={styles.webView}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default Payment;
