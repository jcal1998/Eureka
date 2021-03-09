import styled,{css} from 'styled-components';
import Banner from '../../images/Banner.png'

export const Title1 = styled.h2`
    font-size:48px;
    color: #3a3a3a;
`;

export const AdditionalLabel=styled.label`
    display:block; 
    :hover{
        color:#3a3a3a;
    }


    ${({isChecked})=>isChecked ? css`color:purple;` : css`color:#f9c819;`}
    input{
        display:none;
    }
`;

export const Title3 = styled.h3`
    font-size:36px;
    color: #3a3a3a;
`;

export const Container = styled.div`
    height:100vh;
    display:flex; //um do lado do outro
    align-items:stretch; //stretch estica o que tiver dentro //align-items ele pegou todos itens dentro dele e alinha , acho que é na vertical
`

export const Content = styled.div`
    padding:30px 30px 30px 90px;
    display:flex;
    flex-direction:column;
    place-content:center;
    width:100%;
    max-width:800px;

`

export const Background = styled.div`
    flex:1;
    background: url(${Banner}) no-repeat center;
    background-size: cover; //cobrir tudo
`
