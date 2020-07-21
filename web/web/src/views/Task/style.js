import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`

export const Form = styled.div`
    width: 50%; 
    margin-bottom: 70px;
   
`

export const TypeIcons = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;

    .inative{
        opacity: 0.5;
    }

    button {
        border:none;
        background: none;
    }

    img {
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }
`
export const Input = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin-bottom: 5px;
    }
    
    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #FF9900;
    }

    
    img {
        width: 25px;
        height: 25px;
        position: relative;
        left: 90%;
        bottom: 30px;
    }
   
`
export const TextArea = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    span {
        color: #707070;
        margin: 5px 0;
        
    }

    textarea{
        font-size: 16px;
        border: 1px solid #FF9900;
    }
   
`
export const Data = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin-bottom: 5px;
    }
    
    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #FF9900;
    }

   
`

export const Hora = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin-bottom: 5px;
    }
    
    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #FF9900;
    }

   
`

export const Options = styled.div`
    display:flex;
    justify-content: space-between;


    button {
        font-weight: bold;
        color: #1903B2;
        border:none;
        background: none;
        font-size:18px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }
    div {
        display:flex;
        align-items:center;
        color: #FF9900;
        font-weight: bold;
        font-size: 18px;

    }
   
`

export const Save = styled.div`
    width: 100%;
    margin-top: 50px;

    button{
        width: 100%;
        background-color: #FF9900;
        border: none;
        color: #FFF;
        font-size: 20px;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

    }
`


   
