import React, { useContext } from 'react'
import styled from 'styled-components/native'
import Stars from './Stars'
import { useNavigation } from '@react-navigation/native'

export default ({data}) => {
    const navigation = useNavigation()

    const handleClick = () => {
navigation.navigate('Medic',{
    _id: data._id,
    avatar: data.avatar,
    nome: data.nome,
    estrelas: data.stars
})
    }

    return (
<Area onPress={handleClick}>
<Avatar source={{uri: data.avatar}} />
<InfoArea>
    <UserName>
       {data.nome}
    </UserName>
    <UserSpecialty>
       {data.especialidade}
    </UserSpecialty>
    <Stars stars={data.stars} showNumber={true} />
    <SeeProfileButton>
        <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
    </SeeProfileButton>
</InfoArea>
</Area>
    )
}

const Area = styled.TouchableOpacity`
background-color: #FFDBDB;
margin-bottom: 20px;
border-radius: 20px;
padding: 10px;
flex-direction: row;
`

const Avatar = styled.Image`
width: 88px;
height: 88px;
border-radius: 20px;
`

const InfoArea = styled.View`
margin-left: 20px;
justify-content: space-between;

`

const UserName = styled.Text`
font-size: 17px;
font-weight: bold;

`

const UserSpecialty = styled.Text`
font-size: 13px;
font-weight: bold;

`

const SeeProfileButton = styled.View`
width: 80px;
height: 30px;
border: 1px solid #FE7979;
border-radius: 10px;
justify-content: center;
align-items: center;
`
const SeeProfileButtonText = styled.Text`
font-size: 13px;
color: #FE4343;
`