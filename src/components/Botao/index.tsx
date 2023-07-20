import React from "react";
import styles from './Botao.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
    children?: React.ReactNode
}

function Botao({children, type, onClick}: Props) {
    return (
        <button type={type} className={styles.botao} onClick={onClick}>
            {children}
        </button>
    )
}

/*
class Botao extends React.Component <{children: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void}> {
    render() {
        const { type = 'button' } = this.props
        return (
            <button type={type} className={styles.botao} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}
*/

export default Botao
