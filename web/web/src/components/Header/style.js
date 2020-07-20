import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #1903B2;
    border-bottom: 5px solid #FF9900;

    display: flex;
`
export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 100px;
        height: 40px;
    }
    
`
export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #FF9900;
        }
    }


    #notification {
            
        img{
            width: 25px;
            height: 30px;

        }
        span {
            background: #FFF;
            color: #FF9900;
            padding: 3px 6px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px

        }

        &:hover {
            opacity: 0.5;
        }
    }

    .divider::after {
        content: "|";
        margin: 0 10px;
        color: #FFF;
    }
    
`