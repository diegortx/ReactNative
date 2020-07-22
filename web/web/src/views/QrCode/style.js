import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`


export const Content = styled.div`
    flex-direction: column;
    align-items: center;
    display: flex;
    width: 50%;


    h1{
        color:  #FF9900;
    }

    p {
        color: #1903B2;
    }
    
`


export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    
`

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin : 10px;

    span{
        margin-top: 20px;
        text-transform: uppercase;
        font-weight: bold;
    }

    input {
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }
    button{
        font-weight: bold;
        background: #FF9900;
        color: #FFF;
        font-size: 18px;
        padding: 10px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 10px;

        &:Hover{
            background: #1903B2;
        }
    }


`