import React from 'react'
import * as S from './styles';

const userFinish = ({ finishOrder , changeStep2}) => {
    return (
        <S.Container>
            <S.Background />
            <S.Content>
                <button onClick={ changeStep2 }>Voltar</button>
                <S.Title1>Última etapa !</S.Title1>
                <form onSubmit={finishOrder}> 
                    <S.InputData placeholder="Nome Completo" name="name" required/>
                    <S.InputData placeholder="Telefone para contato" maxLength="11" minLength="11" name="phone" required/>
                    <S.InputData placeholder="Endereço completo"  name="address" required/>
                    <select name="payment">
                        <option value="money" selected>Vou pagar em dinheiro</option>
                        <option value="card">Vou pagar no cartão</option>
                        <option value="pix">Transferência</option>
                    </select>
                    <button type="submit">Enviar Pedido</button>
                </form>
            </S.Content>
        </S.Container>
    )
}


export default userFinish;