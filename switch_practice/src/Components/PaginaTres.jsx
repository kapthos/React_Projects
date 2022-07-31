import React from 'react'
import { Bla, BotoesDiv, Texto } from '../styled.js'

function PaginaTres({ setPagina3 }) {
    return (
        <Bla>
            <BotoesDiv>
                <button onClick={() => setPagina3("dois")}>Anterior</button>
                <button onClick={() => setPagina3("quatro")}>Próxima</button>
            </BotoesDiv>
            <Texto>
                <h2>Pagina 3</h2>
            </Texto>
        </Bla>
    )
}

export default PaginaTres