import ITarefa from '../../types/tarefa'
import styles from './Lista.module.scss'
import ListaItem from './ListaItem'

interface Props {
  tarefas: ITarefa[]
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({tarefas, selecionaTarefa}: Props) {
  return (
    <aside className={styles.listaTarefas}>
        <h2> Estudos do dia </h2>
        <ul>
            {tarefas.map((item) => 
                <ListaItem {...item} key={item.id} selecionaTarefa={selecionaTarefa}/>
            )}
        </ul>
    </aside>
  )
}
