// app/(tabs)/index.tsx
// Educa Quiz — Tela de Login
// Aplicativo de quizes de Matemática

import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
} from 'react-native';

// ─── Tipos ───────────────────────────────────────────────────────────────────

interface InputFieldProps {
    label: string;
    icon: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    keyboardType?: 'default' | 'email-address' | 'numeric';
    secureTextEntry?: boolean;
}

// ─── Componente reutilizável de campo de texto ────────────────────────────────

function InputField({
    label,
    icon,
    value,
    onChangeText,
    placeholder,
    keyboardType = 'default',
    secureTextEntry = false,
}: InputFieldProps) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
                {icon}  {label}
            </Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#A0AEC0"
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

// ─── Tela Principal de Login ─────────────

export default function LoginScreen() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const handleLogin = (): void => {
        // TODO: integrar com autenticação 
        console.log('Tentativa de login:', email);
    };

    const handleForgotPassword = (): void => {
        console.log('Recuperar senha para:', email);
    };

    const handleRegister = (): void => {
        console.log('Navegar para cadastro');
        // TODO: router.push('/cadastro')
    };

    const handleGoogleLogin = (): void => {
        console.log('Login com Google');
    };

    const handleAppleLogin = (): void => {
        console.log('Login com Apple');
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <StatusBar barStyle="dark-content" backgroundColor="#EEF2FF" />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {/* ── Logo e Cabeçalho ────── */}
                <View style={styles.logoContainer}>

                    <View style={styles.logoPlaceholder}>
                        <Text style={styles.logoEmoji}>🧮</Text>
                    </View>
                    <Text style={styles.appNome}>Educa Quiz</Text>
                    <Text style={styles.tagline}>Aprenda Matemática de forma divertida!</Text>
                </View>

                {/* ── Formulário ───────────────────────────────────── */}
                <View style={styles.conteudo}>
                    <Text style={styles.bemVindo}>Bem-vindo de volta! 👋</Text>
                    <Text style={styles.subTitulo}>
                        Entre na sua conta para continuar aprendendo
                    </Text>

                    {/* Campo E-mail */}
                    <InputField
                        label="E-mail"
                        icon="📧"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="seu@email.com"
                        keyboardType="email-address"
                    />

                    {/* Campo Senha */}
                    <InputField
                        label="Senha"
                        icon="🔒"
                        value={senha}
                        onChangeText={setSenha}
                        placeholder="Sua senha"
                        secureTextEntry={true}
                    />

                    {/* Esqueceu a senha */}
                    <TouchableOpacity
                        onPress={handleForgotPassword}
                        style={styles.forgotContainer}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.forgotTexto}>Esqueceu a senha?</Text>
                    </TouchableOpacity>

                    {/* Botão Entrar (principal) */}
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={handleLogin}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.botaoTexto}>Entrar  ✅</Text>
                    </TouchableOpacity>

                    {/* Separador "ou" */}
                    <View style={styles.separador}>
                        <View style={styles.linha} />
                        <Text style={styles.separadorTexto}>ou</Text>
                        <View style={styles.linha} />
                    </View>

                    {/* Login Social — Google */}
                    <TouchableOpacity
                        style={styles.botaoSocial}
                        onPress={handleGoogleLogin}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.botaoSocialTexto}>🔵  Continuar com Google</Text>
                    </TouchableOpacity>

                    {/* Login Social — Apple */}
                    <TouchableOpacity
                        style={[styles.botaoSocial, styles.botaoApple]}
                        onPress={handleAppleLogin}
                        activeOpacity={0.85}
                    >
                        <Text style={[styles.botaoSocialTexto, styles.botaoAppleTexto]}>
                            🍎  Continuar com Apple
                        </Text>
                    </TouchableOpacity>

                    {/* Link Cadastro */}
                    <View style={styles.linkCadastro}>
                        <Text style={styles.linkTexto}>Não tem uma conta? </Text>
                        <TouchableOpacity onPress={handleRegister} activeOpacity={0.7}>
                            <Text style={styles.linkDestaque}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

// ─── Estilos ────────

const CORES = {
    primaria: '#4338CA',
    primariaSombra: '#3730A3',
    fundo: '#EEF2FF',
    branco: '#FFFFFF',
    textoPrincipal: '#1E1B4B',
    textoSecundario: '#6B7280',
    borda: '#E0E7FF',
    placeholder: '#A0AEC0',
    preto: '#000000',
};

const styles = StyleSheet.create({
    // Layout principal
    container: {
        flex: 1,
        backgroundColor: CORES.fundo,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 32,
        paddingVertical: 48,
    },

    // Logo
    logoContainer: {
        alignItems: 'center',
        marginBottom: 36,
    },
    logoPlaceholder: {
        width: 96,
        height: 96,
        borderRadius: 24,
        backgroundColor: CORES.primaria,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
        // Sombra (iOS)
        shadowColor: CORES.primaria,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        // Sombra (Android)
        elevation: 8,
    },
    logoEmoji: {
        fontSize: 46,
    },
    appNome: {
        fontSize: 30,
        fontWeight: 'bold',
        color: CORES.textoPrincipal,
        letterSpacing: 0.8,
    },
    tagline: {
        fontSize: 14,
        color: CORES.textoSecundario,
        marginTop: 6,
        textAlign: 'center',
    },

    // Conteúdo / formulário
    conteudo: {
        flex: 1,
        justifyContent: 'center',
    },
    bemVindo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: CORES.textoPrincipal,
        marginBottom: 6,
    },
    subTitulo: {
        fontSize: 14,
        color: CORES.textoSecundario,
        marginBottom: 28,
        lineHeight: 20,
    },

    // Inputs
    inputContainer: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 13,
        fontWeight: '600',
        color: CORES.textoPrincipal,
        marginBottom: 6,
    },
    input: {
        backgroundColor: CORES.branco,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 15,
        color: CORES.textoPrincipal,
    },

    // Esqueceu senha
    forgotContainer: {
        alignItems: 'flex-end',
        marginTop: -6,
        marginBottom: 24,
    },
    forgotTexto: {
        color: CORES.primaria,
        fontSize: 13,
        fontWeight: '600',
    },

    // Botão principal
    botao: {
        backgroundColor: CORES.primaria,
        borderRadius: 10,
        paddingVertical: 16,
        alignItems: 'center',
        // Sombra
        shadowColor: CORES.primariaSombra,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: 28,
    },
    botaoTexto: {
        color: CORES.branco,
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.4,
    },

    // Separador "ou"
    separador: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    linha: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E7EB',
    },
    separadorTexto: {
        marginHorizontal: 12,
        color: '#9CA3AF',
        fontSize: 13,
    },

    // Botões sociais
    botaoSocial: {
        backgroundColor: CORES.branco,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 12,
    },
    botaoSocialTexto: {
        fontSize: 15,
        color: CORES.textoPrincipal,
        fontWeight: '500',
    },
    botaoApple: {
        backgroundColor: CORES.preto,
        borderColor: CORES.preto,
    },
    botaoAppleTexto: {
        color: CORES.branco,
    },

    // Link de cadastro
    linkCadastro: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    linkTexto: {
        color: CORES.textoSecundario,
        fontSize: 14,
    },
    linkDestaque: {
        color: CORES.primaria,
        fontSize: 14,
        fontWeight: 'bold',
    },
});
