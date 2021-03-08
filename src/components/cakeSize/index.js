import React from 'react'
import * as S from './styles'

const cakeSize = ({ changeStep1 , changeStep3 , chooseSize , toggleextra }) => {
    return (
        <S.Container>
            <S.Content>
                <button onClick = { changeStep1 }>Voltar</button>
                <form>
                    <S.Title1>Escolha como vai ser o seu bolo:</S.Title1>
                    <S.Title3>Qual o tamanho do bolo?</S.Title3>
                    <select onChange={ chooseSize }>
                        <option value="1kg">Eu quero de 1kg !!</option>
                        <option value="2kg">Eu quero de 2kg !!</option>
                        <option value="3kg">Eu quero de 3kg !!</option>
                        <option value="4kg">Eu quero de 4kg !!</option>
                    </select>
                    <S.Title3>Algum adicional?</S.Title3>
                    <S.AdditionalLabel htmlFor="morango">
                        <input onChange={ toggleextra} type="checkbox" id="morango" name="morangoemcima" />
                        Eu quero morango em cima do bolo !!
                    </S.AdditionalLabel>
                    <S.AdditionalLabel htmlFor="waffle">
                        <input onChange={ toggleextra} type="checkbox" id="waffle" name="waffle" />
                        Eu quero biscoito Waffle ao redor do bolo !!
                    </S.AdditionalLabel>
                    <S.AdditionalLabel htmlFor="cobertura">
                        <input onChange={ toggleextra} type="checkbox" id="cobertura" name="cobertura" />
                        Eu quero com cobertura de chocolate em cima !!
                    </S.AdditionalLabel>
                    <S.AdditionalLabel htmlFor="pedacoschoco">
                        <input onChange={ toggleextra} type="checkbox" id="pedacoschoco" name="pedacoschoco" />
                        Eu quero com chocolate em pedaços por cima !!
                    </S.AdditionalLabel>
                    <button onClick={ changeStep3 }>Próxima página</button>
                </form>
            </S.Content>
            <S.Background />
        </S.Container>
    )
}
export default cakeSize;