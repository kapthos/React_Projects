import React from 'react'
import { Bla, BotoesDiv, Texto } from '../styled.js'

function PaginaDois({ setPagina2 }) {
    return (
        <Bla>
            <BotoesDiv>
                <button onClick={() => setPagina2("um")}>Anterior</button>
                <button onClick={() => setPagina2("tres")}>Próxima</button>
            </BotoesDiv>
            <Texto>
                <h2>Pagina 2</h2>
            </Texto>
        </Bla>
    )
}

export default PaginaDois