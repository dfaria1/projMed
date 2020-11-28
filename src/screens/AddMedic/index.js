//CSpell:ignore usuario
import React, { useState, useContext } from 'react'
import { Alert, Picker } from 'react-native'
import {
    Container, InputArea, CustomButton, CustomButtonText,
    SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold, Logo
} from './styles'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import { AntDesign } from '@expo/vector-icons';

import MedSchedule from '../../components/icons/MedSchedule'
import SignInput from '../../components/SignInput'
import Api from '../../Api'
import { UserContext } from '../../contexts/UserContext'

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    const [nameField, setNameField] = useState('')
    const [ageField, setAgeField] = useState('')
    const [cityField, setCityField] = useState('')
    const [stateField, setStateField] = useState('')
    const [specialtyField, setSpecialtyField] = useState('')

    const handleMessageButtonClick = () => {
        //iremos enviá-lo para a página inicial, sem a possibilidade de voltar. (se voltar, fecha o App )
        navigation.reset({
            routes: [{ name: 'MainTab' }]
        })
    }

    const handleAddClick = async () => {
        if (nameField && ageField && cityField && stateField && specialtyField) {
            let res = await Api.addMedic(nameField, ageField, cityField, stateField, specialtyField)
            Alert.alert(res.id)
            console.log(res.id)
            navigation.reset({
                routes: [{ name: 'MainTab' }]
            })
        }

    }

    return (
        <Container>
            <Logo>
            <AntDesign style={{ opacity: 1 }} name="adduser" size={480} color="#FF7979" />
            </Logo>
            <InputArea>
                <SignInput
                    icon="user"
                    placeholder="Nome completo"
                    value={nameField}
                    onChangeText={t => setNameField(t)}
                />
                <SignInput
                    icon="calendar"
                    placeholder="Idade"
                    value={ageField}
                    onChangeText={t => setAgeField(t)}
                />
                <SignInput
                    icon="enviromento"
                    placeholder="Cidade"
                    value={cityField}
                    onChangeText={t => setCityField(t)}
                />
                <SignInput
                    icon="enviromento"
                    placeholder="UF"
                    value={stateField}
                    onChangeText={t => setStateField(t)}
                />
                <Picker specialtyField={specialtyField} style={{height: 60, width: '100%', borderRadius: 30, backgroundColor: '#FE7979', fontSize: 16, marginBottom: 15, color: '#FFF', placeholder: 'Aaa'}} onValueChange={(itemValue, itemIndex) => setSpecialtyField(itemValue)}>
                    <Picker.Item label="⚕️ Selecione a especialidade" value=""/>
                    <Picker.Item label="Cardiologia" value="Cardiologia"/>
                    <Picker.Item label="Dermatologia" value="Dermatologia"/>
                    <Picker.Item label="Nefrologia" value="Nefrologia"/>
                    <Picker.Item label="Neurologia" value="Neurologia"/>
                    <Picker.Item label="Nutrição" value="Nutrição"/>
                    <Picker.Item label="Pediatria" value="Pediatria"/>
                    <Picker.Item label="Psicologia" value="Psicologia"/>                         
                </Picker>

                <CustomButton onPress={handleAddClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonTextBold>Voltar</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}