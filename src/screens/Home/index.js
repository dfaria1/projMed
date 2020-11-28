// cSpell:ignore Scroller, endereco, usuario
import React, { useState, useEffect, useContext } from 'react';
import { RefreshControl } from 'react-native'
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    LocationArea,
    LocationInput,
    LocationFinder,
    LoadingIcon,
    ListArea
} from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-community/async-storage';


import Api from '../../Api'
import DogWalkerItem from '../../components/DogWalkerItem'
import Constants from 'expo-constants';

export default () => {

    //Carregando registros na primeira vez
    useEffect(() => {
        getPasseadores()
    }, [])

    //Verificando usuário logado
    useEffect(() => {
        verificaUsuario()
    }, [usuario])

    const verificaUsuario = async () => {
        setLoading(true)
        setUsuario([])
        let dados = await AsyncStorage.getItem('usuario')
        setUsuario(JSON.parse(dados))
        setLoading(false)
    }

    const navigation = useNavigation()
    const [locationText, setLocationText] = useState('')
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [usuario, setUsuario] = useState([])

    const getPasseadores = async () => {
        setLoading(true)
        setList([])
        let res = await Api.getPasseadores()
        setList(res)
        setLoading(false)
    }

    const onRefresh = () => {
        setRefreshing(false)
        getPasseadores()
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>
                        {usuario !== null
                            ? `${usuario.nome}, encontre um profissional da saúde`
                            : 'Encontre um profissional da saúde'}

                    </HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <AntDesign name="search1" size={26} color="#FFFFFF" />
                    </SearchButton>
                </HeaderArea>
                {loading && <LoadingIcon size="large" color="#FFF" />}
                <ListArea>
                    {list.map((item, k) => (
                        <DogWalkerItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroller>
        </Container>
    )
}











/*
                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFF"
                        value={locationText}
                        onChangeText={t => setLocationText(t)}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <AntDesign name="find" size={24} color="#FFFFFF" />
                    </LocationFinder>
                </LocationArea>
*/