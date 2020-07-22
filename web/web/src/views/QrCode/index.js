import React, { useState, useEffect } from 'react';
import * as S from './style';
import Qr from "qrcode.react";


//Nossos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function QrCode() {
    return (
        <S.Container>
            <Header/>

            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                
                    <S.QrCodeArea>
                        <Qr value="getmacaddress" size={350}/>
                    </S.QrCodeArea>
                
                    <S.ValidationCode>
                        <span>Digite a numeração que apareceu no celualr</span>
                        <input type="text"/>
                        <button type="button">SINCRONIZAR</button>
                    </S.ValidationCode>
            </S.Content>


            <Footer/>
        </S.Container>
    )
}

export default QrCode;