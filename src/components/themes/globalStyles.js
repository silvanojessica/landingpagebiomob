import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
    * {
        font-family: 'DM Sans';

    } 
    .container-claro{
        background-color: ${props => props.theme.backgroundClaro} ;
        color: ${props => props.theme.textClaro};
    }
    .container-escuro{
        background-color: ${props => props.theme.backgroundEscuro} ;
        color: ${props => props.theme.textEscuro};
    }
    h1 {
        color: ${props => props.theme.titles};        
    }
    input{
        background: #FFFFFF;
        border: 2px solid;
        border-color:${props => props.theme.titles};
        box-sizing: border-box;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        margin-bottom: 2%;
    }
    input:focus{
    outline: none;
    border: 2px solid;
    border-color:${props => props.theme.titles};
    }
    textarea{
    background: #FFFFFF;
    border: 2px solid;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    border-color:${props => props.theme.titles};
    }
    textarea:focus{
    outline: none;
    border: 2px solid;
    border-color:${props => props.theme.titles};
    }

    .accent {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.accentText};
        height: 30px;
        border-radius: 100px;
        border: ${props => props.theme.accentBorda};
        padding: 20px;
        width: 234px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center; 
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 26px;
 
    }
    .header {
        background-color: ${props => props.theme.headerBackground};
        box-shadow: ${props => props.theme.headerShadow};
        color: ${props => props.theme.headerColor}; 
        position: fixed;
        z-index: 2;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 96.7%;
        min-height: 122px;
        box-shadow: 0px 0px 10px;
        
        font-weight: 500;
        font-size: 20px;
        font-style: normal;
        line-height: 26px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
        
        cursor: pointer;
        
        padding-left: 14.14% ;  
        padding-right: 15.93%;
    }
    
    .area-botao{
        background-color: ${props => props.theme.botaoColor};
        border: ${props => props.theme.botaoBorda};
        box-sizing: border-box;
        border-radius: 10px;
        Width:71px;
        Height: 286px;
        position: fixed;
        z-index: 1;
        left: 1%;
        right: 95%;
        top: 6.34%;
        bottom: 86.13%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 241px;
        margin-left: 30px;
        color: ${props => props.theme.iconeColor};
    }
    .icone{
        color: ${props => props.theme.iconeColor};
    }
    
`