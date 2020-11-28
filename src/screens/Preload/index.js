// cSpell:Ignore usuario
import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon, Logo } from './styles';
/*
O Async-Storage é um sistema de armazenamento de valor-chave assíncrono, não criptografado, 
persistente para React Native.
*/
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
// Utilize o link para converter o SVG em um componente React Native
// https://react-svgr.com/playground/?expandProps=none&native=true
import MedSchedule from '../../components/icons/MedSchedule'

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                let res = await Api.checkToken(token);
                if (res.nome) {
                    const dadosToken = ['token', token]
                    const dadosUsuario = ['usuario', JSON.stringify(res)]
                    await AsyncStorage.multiSet([dadosToken, dadosUsuario])
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });

                } else {
                    navigation.navigate('SignIn');
                }
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <Logo>
            <MedSchedule />
            </Logo>
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}