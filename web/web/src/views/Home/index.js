import React from 'react';

import * as S from './style';

//Nossos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/Filter';


function Home() {
  
    return (
        <S.Container>

        <Header/>

        <S.FilterArea>

            <FilterCard/>

            <FilterCard/>

            <FilterCard/>

            <FilterCard/>

            <FilterCard/>
            
        </S.FilterArea>

        
        <Footer/>
        </S.Container>
    )

}

export default Home;
