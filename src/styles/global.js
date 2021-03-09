import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 500;
        padding: 0%;

        outline:0;
    }

    body{
        background: #ff5757;
        -webkit-font-smoothing:antialiased;
    }

    body , input , button , select{
        font-family: 'Fascinate', cursive;
        font-size:30px;
        border-radius:10px;
        padding:10px;
        Margin:10px;
    }

    h1,h2,h3,h4,h5,h6,strong {
        font-weight:500;
        color: #f9c819;
    }

    button {
        background-color:#3a3a3a;
        color:#f9c819;
    }
    
    input, select {
        color: #3a3a3a;
        background-color:#f9c819;
    }

    button{
        cursor:pointer;
        height:65px;
        width:300px;
    }
`
