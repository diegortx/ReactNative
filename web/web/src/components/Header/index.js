import React , {useEffect, useState} from 'react';
import * as S from './style';
import {Link} from 'react-router-dom';

import api from '../../services/api';
import isConnected from '../../utils/isConnected'

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';



function Header( { clickNotification } ) {

    const [lateCount, setLateCount] = useState();

    async  function lateVerify(){
        await api.get(`/task/filter/late/MM:MM:MM:SS:SS:SS`)
        .then(response => {
            setLateCount(response.data.length);
            
        })

    }

    async function Logout(){
        localStorage.removeItem('@todo/macaddress');
        window.location.reload();
    }

    useEffect(() => {
        lateVerify();
    });
  
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo"/>  
            </S.LeftSide>

            <S.RightSide>
            <Link to="/">ÍNICIO</Link>
                <span className="divider"/>
                <Link to="/task">NOVA TAREFA</Link>
                <span className="divider"/>

                { !isConnected ? 
                    <Link to="/qrcode"> SINCRONIZAR CELULAR </Link>
                    :
                    <button type="button" onClick={Logout}> SAIR</button>
                }
                <span className="divider"/>
                {
                    lateCount &&
                    <>
                        <span className="divider"/>
                        <button onClick={clickNotification} id="notification" >
                            <img src={bell} alt="Notificação"></img>
                            <span>{lateCount}</span>
                        </button>
                    </>
                }

            </S.RightSide>
        </S.Container>
    )

}

export default Header;
