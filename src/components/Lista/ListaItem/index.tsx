import React from 'react'
import styles from './ListaItem.module.scss'
import ITarefa from '../../../types/tarefa'

interface Props extends ITarefa {
    selecionaTarefa: (tarefa: ITarefa) => void
}

export default function ListaItem({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) {
    return (
        <>
            <li className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''} ${completado ? styles.itemCompletado : ''}`} onClick={() => 
                !completado && selecionaTarefa({
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                })}
            >
                <h3>{tarefa}</h3>
                <span>{tempo}</span>
                {completado && <span className={styles.concluido} aria-label='tarefa completada'></span>}
          </li>
      </>
  )
}
