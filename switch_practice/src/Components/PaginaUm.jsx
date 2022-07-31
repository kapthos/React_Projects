import React, { useState } from 'react'
import { Bla, BotoesDiv, Texto, FormStyled } from '../styled.js'

function PaginaUm({ setPagina1 }) {

    const [busca, setBusca] = useState("")
    const [originalUsers, setOriginalUsers] = useState([
        {
            id: 1,
            name: 'Juan'
        },
        {
            id: 2,
            name: 'Carlos'
        },
        {
            id: 3,
            name: 'Torterolo'
        },
        {
            id: 4,
            name: 'Pedroza'
        }
    ])
    const [usuarios, setUsuarios] = useState(originalUsers)

    const handleSubmit = (e) => {
        e.preventDefault();
        const seiLa = usuarios.filter((usuarioFiltrado) => {
            if (busca === usuarioFiltrado.name) {
                return usuarioFiltrado
            }
        })   
        if (seiLa.length > 0) {
            setUsuarios(seiLa)
        } else {
            setUsuarios(originalUsers)
        }
    }
    
    const listaUsuarios = usuarios.map((usuario, key) => {
        return (
            <li key={usuario.id}>
                {usuario.name}
            </li>
        )
    })

    return (
        <Bla>
            <BotoesDiv>
                <button onClick={() => setPagina1("dois")}>Próxima</button>
            </BotoesDiv>
            <Texto>
                <h2>Pagina 1</h2>
                <ul>
                    {listaUsuarios}
                </ul>
            </Texto>
            <FormStyled onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Busca'
                    onChange={(e) => setBusca(e.target.value)}
                />
            </FormStyled>
        </Bla>
    )
}

export default PaginaUm