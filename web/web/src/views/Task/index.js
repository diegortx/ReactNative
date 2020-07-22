import React, { useState, useEffect } from 'react';
import {Redirect}  from 'react-router-dom';
import * as S from './style';
import { format } from 'date-fns';


//Conexao com a API
import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//Nossos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons'

import icoCalendar from '../../assets/calendar.png'
import icoClock from '../../assets/clock.png'
import isConneted from '../../utils/isConnected';


function Task({match}) {
    
    const [redirect, setRedirect] = useState(false);
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [macaddress, setMacaddress] = useState('MM:MM:MM:SS:SS:SS');

    async function LoadTaskDetails(){
        await  api.get(`/task/${match.params.id}`)
        .then(response => {
            setType(response.data.type)
            setDone(response.data.done)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDate(format(new Date(response.data.when),'yyyy-MM-dd'))
            setHour(format(new Date(response.data.when),'HH:mm'))

        })


    }

    async function Save(){

        //Validação dos dados
        if(!title)
            return alert("Você precisa colocar o titulo")
        else if (!description)
            return alert("Você precisa passar a Descrição")
        else if (!type)
            return alert("Você precisa selecionar o Tipo")
        else if (!date)
            return alert("Você precisa passar a Data")
        else if (!hour)
            return alert("Você precisa passar a Hora")

        if(match.params.id){
            await  api.put(`/task/${match.params.id}`, {
                macaddress,
                type,                
                title,
                description,
                when: `${date}T${hour}:00.000`,
                done
            }).then(() =>
                setRedirect(true)
            )
        }else{
            await  api.post('/task', {
                macaddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`,
                done
            }).then(() =>
                setRedirect(true)
            )
        }
    }

    async function Remove(){
        const res = window.confirm('Deseja realmente excluir a tarefa ?')
        if(res == true){

            await api.delete(`/task/${match.params.id}`)
            .then(() => setRedirect(true));
             
        }else {
           
        }
    }

    useEffect(()=> {

        if(!isConneted)
            setRedirect(true);
        
        LoadTaskDetails();
    }, [])
  
    return (
        <S.Container>
            { redirect && <Redirect to="/"/>}
        <Header/>


        <S.Form>
            <S.TypeIcons>
                {
                    TypeIcons.map((icon, index) => (
                        index > 0 && 
                        <button type="button" onClick={() => setType(index)}>
                            <img src={icon} alt="Tipo da tarefa" 
                            className={type && type != index && 'inative'}/> 
                        </button>
                    ))
                }
            </S.TypeIcons>
            <S.Input>
                <span>Título</span>
                <input type="text" placeholder="Título da tarefa..." 
                    onChange={e => setTitle(e.target.value)} value={title}/>

            <S.TextArea>
                <span>Descrição</span>
                <textarea rows={5} placeholder="Detalhes da tarefa"
                    onChange={e => setDescription(e.target.value)} value={description}/>
            </S.TextArea>

            <S.Data>
                <span>Data</span>
                <input type="date" placeholder="Título da tarefa..."
                    onChange={e => setDate(e.target.value)} value={date}/>
                <img src={icoCalendar} alt="Calendario"/>

            </S.Data>

            <S.Hora>
                <span>Horario</span>
                <input type="time" placeholder="Título da tarefa..."
                    onChange={e => setHour(e.target.value)} value={hour}/>
                <img src={icoClock} alt="Relogio"/>

            </S.Hora>
            </S.Input>

            <S.Options>
                <div>
                    <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
                    <span>CONCLUIDO</span>
                </div>
               { match.params.id && <button type="button" onClick={Remove}>EXCLUIR</button>}
            </S.Options>

            <S.Save>
                <button type="button" onClick={Save}>SALVAR</button>
            </S.Save>


        </S.Form>



        <Footer/>
        </S.Container>
    )

}

export default Task;
