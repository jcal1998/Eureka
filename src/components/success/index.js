import React from 'react'
import * as S from './styles';

const success = () =>{
    return (
        <S.Container>
        <S.Content>
            <S.Title2>Muito obrigado !!</S.Title2>
            <S.Title1>Seu pedido foi feito com sucesso !!</S.Title1>
        </S.Content>
        <S.Background />
        </S.Container>
    )
}

export default success;