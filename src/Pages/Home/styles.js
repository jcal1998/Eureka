import styled,{css} from 'styled-components';
import Leiteninhocmorango from '../../images/Leiteninhocmorango.png';
import Brigadeiro from '../../images/Brigadeiro.png';
import Nozes from '../../images/Nozes.png';
import Leitecchoco from '../../images/Leitecchoco.png';
import Banner from '../../images/Banner.png'


export const Titulo = styled.h1`
    font-size:38px;
    color:  ;
`;

export const InputData = styled.input`
    display:block; 
    margin-bottom:20px;
`;

export const Escolha = styled.h2`
    font-size:48px;
    color: #3a3a3a;
`;

export const AditionalLabel=styled.label`
    display:block; 
`;

export const Semititulo = styled.h3`
    font-size:36px;
    color: #3a3a3a;
`;

export const Inputfoto = styled.input`
    display:none;
`;

export const FotoLabel1 = styled.label`
    background-size:100%;
    ${({isChecked})=>isChecked ? css`border:4px solid #3a3a3a;;` : css`margin : 5px;`}
    background-image: url(${Leiteninhocmorango});
    height:300px;
    width:300px;
    display:inline-block;
    padding: 0px;
`;

export const ContainerStep2 = styled.div`
    height:100vh;
    display:flex; //um do lado do outro
    align-items:stretch; //stretch estica o que tiver dentro //align-items ele pegou todos itens dentro dele e alinha , acho que é na vertical
`



export const ContentStep2 = styled.div`
    padding:30px 30px 30px 90px;
    display:flex;
    flex-direction:column;
    place-content:center;
    width:100%;
    max-width:900px;
`

export const BackgroundStep2 = styled.div`
    flex:1;
    background: url(${Banner}) no-repeat center;
    background-size: cover; //cobrir tudo
`

export const FotoLabel2 = styled.label`
    background-size:100%;
    ${({isChecked})=>isChecked ? css`border:4px solid #3a3a3a;` : css`margin : 5px;`}
    background-image: url(${Brigadeiro});
    height:300px;
    width:300px;
    display:inline-block;
    padding: 0px;
`;

export const FotoLabel3 = styled.label`
    background-size:100%;
    ${({isChecked})=>isChecked ? css`border:4px solid #3a3a3a;` : css`margin : 5px;`}
    background-image: url(${Nozes});
    height:300px;
    width:300px;
    display:inline-block;
    padding: 0px;
`;

export const FotoLabel4 = styled.label`
    background-size:100%;
    ${({isChecked})=>isChecked ? css`border:4px solid #3a3a3a;` : css`margin : 5px;`}
    background-image: url(${Leitecchoco});
    height:300px;
    width:300px;
    display:inline-block;
    padding: 0px;
`;