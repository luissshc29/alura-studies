import React from 'react'
import styles from './Relogio.module.scss'

interface Props {
  tempo: number | undefined
}

export default function Relogio({tempo = 0}: Props) {

  const minutos = Math.floor(tempo / 60)
  const segundos = tempo % 60

  const[segundosDezena, segundosUnidade] = String(segundos).padStart(2, '0')
  
  return (
    <>
        <span className={styles.relogioNumero}>{Math.floor((minutos/10))}</span>
        <span className={styles.relogioNumero}>{minutos % 10}</span>
        <span className={styles.relogioDivisao}>:</span>
        <span className={styles.relogioNumero}>{segundosDezena}</span>
        <span className={styles.relogioNumero}>{segundosUnidade}</span>
    </>
  )
}
