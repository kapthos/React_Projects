import React from 'react'
import { Bla, BotoesDiv, Texto } from '../styled.js'

function PaginaUm({ setPagina1 }) {
    return (
        <Bla>
            <BotoesDiv>
                <button onClick={() => setPagina1("dois")}>Próxima</button>
            </BotoesDiv>
            <Texto>
                <h2>Pagina 1</h2>
            </Texto>
        </Bla>
    )
}

export default PaginaUm