import React, { useReducer} from 'react'
import api from '../../client/axios'
import reducer, { Types, initialState } from '../../store/cake'
import CakeType from '../../components/cakeType'
import CakeSize from '../../components/cakeSize'
import UserFinish from '../../components/userData'
import Success from '../../components/success'

const Home = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState); //hook alternativo para usestate, usa o metodo reducer,armazena tudo no state(como se fosse um state enorme com monte de states menores), usa o metodo dispatch,tem o valor inicial que é declarado numa const

    const toggleExtra = (additional) => {//verificar se tem ou não o adicional nos extras pedidos
        if (state.extras.includes(additional)){  //ele vê se o array tem o item que entrou como parametro
            dispatch({
                type: Types.PUT_CAKE_EXTRAS, 
                data: {extras:state.extras.filter( (item) => item !== additional)}        //filtra o item e devolve de acordo com a condição
            })

        }else{
            dispatch({
                type: Types.PUT_CAKE_EXTRAS, 
                data: {extras:[...state.extras, additional]} 
            })

        }
    }

    const handleChangeType = (e) => {
        dispatch({type: Types.CHOOSE_CAKE_TYPE, data:{type:{ name: e.target.name , id: e.target.id }}})
    }

    const finishOrder = async (e) => {
        try {
            e.preventDefault()
            const {name , phone, address , payment} = e.target
            const {step, loading, ...data}=state
            const order = {
                ...data,
                userData:{
                    name: name.value,
                    phone: phone.value,
                    address : address.value,
                    payment : payment.value
                }
            }
            dispatch({type: Types.CHANGE_LOADING , data: {loading : true}})
            await api.post('/', {order});
            dispatch({type: Types.CHANGE_STEP,data:{step:4}})
        }catch(err){
            //do something about the error
            alert('Ops deu erro')
        }finally{
            dispatch({type: Types.CHANGE_LOADING , data: {loading : false}})
        }

    }

    if(state.step === 1) { 
        return (
            <CakeType handleChangeType={handleChangeType} type={state.type} changeStep2={() => dispatch({type: Types.CHANGE_STEP,data:{step:2}})} />
        )
    }
    if(state.step === 2) {
        return (
            <CakeSize toggleExtra={toggleExtra} size={state.size} extras={state.extras} changeStep1={() => dispatch({type: Types.CHANGE_STEP,data:{step:1}})} changeStep3={() => dispatch({type: Types.CHANGE_STEP,data:{step:3}})} chooseSize={(e) => dispatch({type: Types.CHOOSE_CAKE_SIZE,data: {size: e.target.value}}) }/>
        )
    }
    if(state.step === 3) {
        return (
            <UserFinish finishOrder={finishOrder} loading={state.loading} changeStep2={() => dispatch({type: Types.CHANGE_STEP,data:{step:2}})} />
        )
    }

    if(state.step === 4) {
        return (
            <Success />
        )
    }

    return null;
}

export default Home;