import React from "react"

export default (props) => {

    const status = props.nota >=7 ? 'Aprovado' : 'Reprovado';
    
    return(
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong> {props.aluno} </strong>
                tem a nota 
                <strong> {props.nota} </strong>
                e esta
                <strong> {status}</strong>
            </p>
        </div>
    )
}