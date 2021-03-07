import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 500;
        padding: 0%;
        box-box-sizing:border-box;
        outline:0;
    }

    body{
        background: #ff5757;
        color: #f9c819;
        -webkit-font-smoothing:antialiased;
    }

    body , input , button , select{
        font-family: 'Fascinate', cursive;
        font-size:30px;
    }
    h2{
        font-size:100px;
    }
    h1,h2,h3,h4,h5,h6,strong {
        font-weight:500;
        color: #f9c819;
        
    }

    button{
        cursor:pointer;
    }
`
