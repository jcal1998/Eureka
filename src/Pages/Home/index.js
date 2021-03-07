import React, { useState } from 'react'

import * as S from './styles';

const Home = () => {
    
    
    const [step, setStep] = useState(1);
    const [cakeType, setCakeType] = useState ({});
    const [cakeOptions, setCakeOptions] = useState ("");
    const [cakeAditional,setCakeAditional] = useState ([]);
    const [userData,setUserData] = useState ({});
    const [order,setOrder] = useState ({});
    const [payment,setPayment] = useState ("");
    console.log(cakeAditional);
    const toggleCakeAditional = (aditional) => {
        if (cakeAditional.includes(aditional)){  //ele vê se o array tem o item que entrou como parametro
            setCakeAditional((oldCakeAditional) => ([...oldCakeAditional].filter( (item) => item !== aditional ))) //filtra o item e devolve de acordo com a condição
        }else{
            setCakeAditional((oldCakeAditional) => ([...oldCakeAditional, aditional]))
        }
    }

    if(step === 1) { 
        return (
            <S.ContainerStep2>
                <S.BackgroundStep2 />
                <S.ContentStep2>
            <S.Escolha>Escolha o sabor do bolo:</S.Escolha>
                <form>
                    <S.FotoLabel1 htmlFor="1" isChecked={cakeType?.id==="1"}> 
                        <S.Inputfoto onChange={ (e) => setCakeType ({ name: e.target.name , id: e.target.id })} type="checkbox" name='Leite ninho com morango' id="1" />
                    </S.FotoLabel1>
                    <S.FotoLabel2 htmlFor="2" isChecked={cakeType?.id==="2"}>
                        <S.Inputfoto onChange={ (e) => setCakeType ({ name: e.target.name , id: e.target.id })} type="checkbox" name='Brigadeiro' id="2" />
                    </S.FotoLabel2>
                    <S.FotoLabel3 htmlFor="3" isChecked={cakeType?.id==="3"}>
                        <S.Inputfoto onChange={ (e) => setCakeType ({ name: e.target.name , id: e.target.id })} type="checkbox" name='Nozes' id="3" />
                    </S.FotoLabel3>
                    <S.FotoLabel4 htmlFor="4" isChecked={cakeType?.id==="4"}>
                        <S.Inputfoto onChange={ (e) => setCakeType ({ name: e.target.name , id: e.target.id })} type="checkbox" name='Leite ninho com chocolate' id="4" />
                    </S.FotoLabel4>
                    <button onClick={ () => setStep(2) }>Próxima página</button>
                </form>
            </S.ContentStep2>
            </S.ContainerStep2>
        )
    }
    if(step === 2) {
        return (
            <S.ContainerStep2>
                <S.ContentStep2>
                    <button onClick={ () => setStep(1) }>Voltar</button>
                    <form>
                        <S.Escolha>Escolha como vai ser o seu bolo:</S.Escolha>
                        <S.Semititulo>Qual o tamanho do bolo?</S.Semititulo>
                        <select onChange={(e) => setCakeOptions (e.target.value)}>
                            <option value="1kg">Eu quero de 1kg !!</option>
                            <option value="2kg">Eu quero de 2kg !!</option>
                            <option value="3kg">Eu quero de 3kg !!</option>
                            <option value="4kg">Eu quero de 4kg !!</option>
                        </select>
                        <S.Semititulo>Algum adicional?</S.Semititulo>
                        <S.AditionalLabel htmlFor="morangoemcima">
                            <input onChange={ (e) => toggleCakeAditional (e.target.id)} type="checkbox" id="morango" name="morangoemcima" />
                            Eu quero morango em cima do bolo !!
                        </S.AditionalLabel>
                        <S.AditionalLabel htmlFor="waffle">
                            <input onChange={ (e) => toggleCakeAditional (e.target.id)} type="checkbox" id="waffle" name="waffle" />
                            Eu quero biscoito Waffle ao redor do bolo !!
                        </S.AditionalLabel>
                        <S.AditionalLabel htmlFor="cobertura">
                            <input onChange={ (e) => toggleCakeAditional (e.target.id)} type="checkbox" id="cobertura" name="cobertura" />
                            Eu quero com cobertura de chocolate em cima !!
                        </S.AditionalLabel>
                        <S.AditionalLabel htmlFor="pedacoschoco">
                            <input onChange={ (e) => toggleCakeAditional (e.target.id)} type="checkbox" id="pedacoschoco" name="pedacoschoco" />
                            Eu quero com chocolate em pedaços por cima !!
                        </S.AditionalLabel>
                        <button onClick={ () => setStep(3) }>Próxima página</button>
                    </form>
                </S.ContentStep2>
                <S.BackgroundStep2 />
            </S.ContainerStep2>
        )
    }
    if(step === 3) {
        return (
            <S.ContainerStep2>
                <S.BackgroundStep2 />
                <S.ContentStep2>
                    <button onClick={ () => setStep(2) }>Voltar</button>
                    <S.Escolha>Última etapa !</S.Escolha>
                    <form>
                        <S.InputData placeholder="Nome Completo" name="name"/>
                        <S.InputData placeholder="Telefone para contato" name="Phone"/>
                        <S.InputData placeholder="Endereço completo"  name="Adress"/>
                        <select onChange={(e) => setPayment (e.target.value)}>
                            <option value="money">Vou pagar em dinheiro</option>
                            <option value="card">Vou pagar no cartão</option>
                            <option value="pix">Transferência</option>
                        </select>
                        <button onClick={ () => setOrder ({ ...cakeType, ...cakeOptions, ...cakeAditional , ...userData }) }>Enviar Pedido</button>
                    </form>
                </S.ContentStep2>
            </S.ContainerStep2>
        )
    }
}

export default Home;