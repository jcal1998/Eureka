import React from 'react'
import * as S from './styles'

const cakeType = ({ handleChangeType, changeStep2, type }) => {
    return (
        <S.Container>
            <S.Background />
            <S.Content>
                <S.Title1>Escolha o sabor do bolo:</S.Title1>
                <form>
                    <S.Label1 htmlFor="1" isChecked={type?.id==="1"}> 
                        <S.InputImage onChange={ handleChangeType } type="checkbox" name='Leite ninho com morango' id="1" />
                    </S.Label1>
                    <S.Label2 htmlFor="2" isChecked={type?.id==="2"}>
                        <S.InputImage onChange={ handleChangeType } type="checkbox" name='Brigadeiro' id="2" />
                    </S.Label2>
                    <S.Label3 htmlFor="3" isChecked={type?.id==="3"}>
                        <S.InputImage onChange={ handleChangeType } type="checkbox" name='Nozes' id="3" />
                    </S.Label3>
                    <S.Label4 htmlFor="4" isChecked={type?.id==="4"}>
                        <S.InputImage onChange={ handleChangeType } type="checkbox" name='Leite ninho com chocolate' id="4" />
                    </S.Label4>
                    <button onClick={ changeStep2 }>Próxima página</button>
                </form>
            </S.Content>
        </S.Container>
    )
}

export default cakeType;