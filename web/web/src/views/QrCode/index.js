import React, { useState} from 'react';
import * as S from './style';
import Qr from "qrcode.react";
import {Redirect} from 'react-router-dom';

//Nossos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function QrCode() {

    const[mac, setMac] = useState();
    const[redirect, setRedirect] = useState(false);

    async function SaveMac(){
        await localStorage.setItem('@todo/macaddress', mac);
        setRedirect(true);
        window.location.reload();
    }

    return (
        <S.Container>
            { redirect && <Redirect to="/"/>}
            <Header/>

            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                
                    <S.QrCodeArea>
                        <Qr value="getmacaddress" size={350}/>
                    </S.QrCodeArea>
                
                    <S.ValidationCode>
                        <span>Digite a numeração que apareceu no celualr</span>
                        <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
                        <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
                    </S.ValidationCode>
            </S.Content>


            <Footer/>
        </S.Container>
    )
}

export default QrCode;