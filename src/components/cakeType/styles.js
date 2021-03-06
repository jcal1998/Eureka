import styled,{css} from 'styled-components';
import Leiteninhocmorango from '../../images/Leiteninhocmorango.png';
import Brigadeiro from '../../images/Brigadeiro.png';
import Nozes from '../../images/Nozes.png';
import Leitecchoco from '../../images/Leitecchoco.png';
import Banner from '../../images/Banner.png'


export const Title1 = styled.h2`
    font-size:48px;
    color: #3a3a3a;
`;


export const InputImage = styled.input`
    display:none;
`;



export const Container = styled.div`
    height:100vh;
    display:flex; //um do lado do outro
    align-items:stretch; //stretch estica o que tiver dentro //align-items ele pegou todos itens dentro dele e alinha , acho que é na vertical
`

export const Content = styled.div`
    padding:30px auto;
    display:flex;
    flex-direction:column;
    place-content:center;
    width:100%;
    max-width:800px;

    form{
        .image{
            background-size:100%;
            background-repeat: no-repeat ;
            height:270px;
            width:300px;
            display:inline-block;
            padding: 0px;
        }
    }
`

export const Background = styled.div`
    flex:1;
    background: url(${Banner}) no-repeat center;
    background-size: cover; //cobrir tudo
`

export const Label1 = styled.label`
    background-image: url(${Leiteninhocmorango}) ;
    ${({isChecked})=>isChecked ? css`border:4px solid #3a3a3a;;` : css`margin : 5px;`}
`;

export const Label2 = styled.label`
    ${({isChecked})=>isChecked ? css`border:4px solid #3a3a3a;` : css`margin : 5px;`}
    background-image: url(${Brigadeiro});
`;

export const Label3 = styled.label`
    ${({isChecked})=>isChecked ? css`border:4px solid #3a3a3a;` : css`margin : 5px;`}
    background-image: url(${Nozes});
`;

export const Label4 = styled.label`
    ${({isChecked})=>isChecked ? css`border:4px solid #3a3a3a;` : css`margin : 5px;`}
    background-image: url(${Leitecchoco});
`;

