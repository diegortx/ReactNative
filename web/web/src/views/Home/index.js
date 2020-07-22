import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import * as S from './style';


//Conexao com a API
import api from '../../services/api';

//Nossos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/Filter';
import TaskCard from '../../components/TaskCard';


function Home() {

    const [filterActived, setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);
    

    async function loadTask(){

        await api.get(`/task/filter/${filterActived}/MM:MM:MM:SS:SS:SS`)
        .then(response => {
            setTasks(response.data);
            
        })
    }

    function Notification(){
        setFilterActived('late');
    }

    useEffect(()=> {
        loadTask();
    }, [filterActived])
  
    return (
        <S.Container>

        <Header clickNotification={Notification}/>

        <S.FilterArea>

            <button type="button" onClick={() => setFilterActived("all")}>                
            <FilterCard title="Todos" actived={ filterActived == 'all' }/>
            </button>

            <button type="button" onClick={() => setFilterActived("today")}>
            <FilterCard title="Hoje" actived={ filterActived == 'today' }/>

            </button>

            <button type="button" onClick={() => setFilterActived("week")}>
            <FilterCard title="Semana" actived={ filterActived == 'week' }/>

            </button>

            <button type="button" onClick={() => setFilterActived("month")}>
            <FilterCard title="Mês" actived={ filterActived == 'month' } />

            </button>

            <button type="button"  onClick={() => setFilterActived("year")}>
            <FilterCard title="Ano" actived={ setFilterActived == 'year' }/>

            </button>  

        </S.FilterArea>

        <S.Title>
            <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
        </S.Title>

        <S.Content>
            {
                tasks.map(t => (
                    <Link to={`/task/${t._id}`}>
                        <TaskCard type={t.type} title={t.title} when={t.when} done={t.done}/> 
                    </Link>  
                ))    
            }
            
        </S.Content>

        
        <Footer/>
        </S.Container>
    )

}

export default Home;
