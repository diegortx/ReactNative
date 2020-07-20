import React from 'react';
import * as S from './styles';

import filter from '../../assets/filter.png'

function Footer() {
  
    return (
        <S.Container>
           <img src={filter} alt="Filtro"/>
           <span>Todos</span>
        </S.Container>
    )

}

export default Footer;
