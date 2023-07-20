import React, { useState } from 'react'
import Botao from '../Botao'
import styles from './Formulario.module.scss'
import ITarefa from '../../types/tarefa'
import {v4 as uuidv4} from 'uuid'

interface Props {
    setTarefas: React.Dispatch < React.SetStateAction < Array <ITarefa> > >
}

function Formulario ({setTarefas}: Props) {

    const [tarefa, setTarefa] = useState('')
    const [tempo, setTempo] = useState('00:00:00')

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        setTarefas(tarefasAntigas => [...tarefasAntigas, {tarefa, tempo , completado: false, selecionado: false, id: uuidv4()}])
        setTarefa('')
        setTempo('00:00')
    }

    return(
        <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor='tarefa'>
                    Adicione um novo estudo
                </label>
                <input 
                    type='text' 
                    name='tarefa' 
                    id='tarefa' 
                    value={tarefa}
                    placeholder='O que você quer estudar?' 
                    required
                    onChange={evento => setTarefa(evento.target.value)}
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                <input 
                    type='time' 
                    step='1' 
                    name='tempo' 
                    value={tempo} 
                    id='tempo' 
                    min='00:00:00' 
                    max='01:30:00' 
                    required
                    onChange={evento => setTempo(evento.target.value)}
                />
            </div>

            <Botao type='submit'> Adicionar </Botao>
        </form>
    )
}

/*

class Formulario extends React.Component < { setTarefas: React.Dispatch < React.SetStateAction < Array <ITarefa> > > } > {
    state = {
        tarefa: '',
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state, completado: false, selecionado: false, id: uuidv4()}])
        this.setState({
            tarefa: '',
            tempo: "00:00"
        })
    }
    
    render() {
        return(
            <form className={styles.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={styles.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input 
                        type='text' 
                        name='tarefa' 
                        id='tarefa' 
                        value={this.state.tarefa}
                        placeholder='O que você quer estudar?' 
                        required
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor='tempo'>
                        Tempo
                    </label>
                    <input 
                        type='time' 
                        step='1' 
                        name='tempo' 
                        value={this.state.tempo} 
                        id='tempo' 
                        min='00:00:00' 
                        max='01:30:00' 
                        required
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    />
                </div>

                <Botao type='submit'> Adicionar </Botao>
            </form>
        )
    }
}

*/

export default Formulario