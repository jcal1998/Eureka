export const initialState = {
    step:1,
    type:{},
    size:"1kg",
    extras:[],
};

export const Types = {
    CHANGE_STEP: 'CHANGE_STEP',
    CHOOSE_CAKE_TYPE: 'CHOOSE_CAKE_TYPE',
    CHOOSE_CAKE_SIZE: 'CHOOSE_CAKE_SIZE',
    PUT_CAKE_EXTRAS: 'PUT_CAKE_EXTRAS'
}
//reducer vem da epoca do redux, ele recebe o estado atual como se fosse a variavel do usestate, e recebe tambem o action, para disparar a ação
function reducer(state, action) { //ação que esta sendo disparada,recebe action.type e action.data
  switch (action.type) { //que tipo de ação quero disparar
    case Types.CHANGE_STEP: //os cases são para escolher
        return {
            ...state,
            step: action.data.step
        };
    case Types.CHOOSE_CAKE_TYPE:
        return {
            ...state,
            type: {...action.data.type}
        };
    case Types.CHOOSE_CAKE_SIZE:
        return{
            ...state,
            size: action.data.size
        }
    case Types.PUT_CAKE_EXTRAS:
        return{
            ...state,
            extras: [...action.data.extras]
        }
    default:
      throw new Error();
  }
}

export default reducer