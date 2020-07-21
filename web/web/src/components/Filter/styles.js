import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${ props => props.actived ? '#FF9900' : '#1903B2'};  
    padding: 10px;
    cursor: pointer;

    border-radius: 25px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
        width: 25px;
        height: 25px;
    }

    span {
        color : #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 19px;
    }

    &:hover {
        background: #FF9900;
    }

`