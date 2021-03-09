import React from 'react'
import * as S from './styles'

const cakeSize = ({ changeStep1 , changeStep3 , chooseSize , toggleExtra , extras , size}) => {
    console.log (size)
    return (
        <S.Container>
            <S.Content>
                <>
                <button onClick = { changeStep1 }>Voltar</button>
                <form>
                    <S.Title1>Escolha como vai ser o seu bolo:</S.Title1>
                    <S.Title3>Qual o tamanho do bolo?</S.Title3>
                    <select onChange={ chooseSize }>
                        <option value="1kg" selected={size==="1kg"}>Eu quero de 1kg !!</option>
                        <option value="2kg" selected={size==="2kg"}>Eu quero de 2kg !!</option>
                        <option value="3kg" selected={size==="3kg"}>Eu quero de 3kg !!</option>
                        <option value="4kg" selected={size==="4kg"}>Eu quero de 4kg !!</option>
                    </select>
                    <S.Title3>Algum adicional?</S.Title3>
                    <S.AdditionalLabel htmlFor="morango" isChecked={extras.includes("morango")}>
                        <input onChange={ (e) => toggleExtra(e.target.id)}  type="checkbox" id="morango" name="morangoemcima" />
                        Eu quero morango em cima do bolo !!
                    </S.AdditionalLabel>
                    <S.AdditionalLabel htmlFor="waffle" isChecked={extras?.includes("waffle")} >
                        <input onChange={ (e) => toggleExtra(e.target.id)} type="checkbox" id="waffle" name="waffle" />
                        Eu quero biscoito Waffle ao redor do bolo !!
                    </S.AdditionalLabel>
                    <S.AdditionalLabel htmlFor="cobertura" isChecked={extras?.includes("cobertura")} >
                        <input onChange={ (e) => toggleExtra(e.target.id)} isChecked={extras?.includes("cobertura")} type="checkbox" id="cobertura" name="cobertura" />
                        Eu quero com cobertura de chocolate em cima !!
                    </S.AdditionalLabel>
                    <S.AdditionalLabel htmlFor="pedacoschoco"  isChecked={extras?.includes("pedacoschoco")} >
                        <input onChange={ (e) => toggleExtra(e.target.id)} type="checkbox" id="pedacoschoco" name="pedacoschoco" />
                        Eu quero com chocolate em pedaços por cima !!
                    </S.AdditionalLabel>
                    <button onClick={ changeStep3 }>Próxima página</button>
                </form>
                </>
            </S.Content>
            <S.Background />
        </S.Container>
    )
}
export default cakeSize;