import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 200px;
    box-shadow: 10px 8px 12px -5px rgba(0,0,0,0.75);
    border-radius: 30px;
   

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    opacity: ${props => props.done ? 0.5 : 1};

    
    &:hover{
        opacity: 0.5;
    }




`


export const TopCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 100px;
    }


`

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong {
        color: #FF9900;
        font-weight: bold;
    }

    span {
        color: #707070;
    }

`