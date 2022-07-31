import React from 'react'
import { Bla, BotoesDiv, Texto } from '../styled.js'

function PaginaQuatro({ setPagina4 }) {
    return (
        <Bla>
            <BotoesDiv>
                <button onClick={() => setPagina4("tres")}>Anterior</button>
            </BotoesDiv>
            <Texto>
                <h2>Pagina 4</h2>
            </Texto>
        </Bla>
    )
}

export default PaginaQuatro