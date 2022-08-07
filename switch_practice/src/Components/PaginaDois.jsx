import React, { useEffect, useState } from 'react'
import { Bla, BotoesDiv, Texto } from '../styled.js'
import axios from 'axios'

function PaginaDois({ setPagina2 }) {

    const [listaUsuarios, setListUsuarios] = useState([])

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceHeaders = { headers: { Authorization: 'juan-pedroza-jemison'}}

    const getAllUsers = () => {
        axios.get(url, serviceHeaders)
        .then((response) => setListUsuarios(response.data))
        .catch((error) => console.log(error.response))
    }

    const showUsers = listaUsuarios.map((usuario, key) => {
        return (
            <li key={key}>
                {usuario.name}
            </li>
        )
    })

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <Bla>
            <BotoesDiv>
                <button onClick={() => setPagina2("um")}>Anterior</button>
                <button onClick={() => setPagina2("tres")}>Próxima</button>
            </BotoesDiv>
            <Texto>
                <h2>Pagina 2</h2>
                <ul>
                    {showUsers}
                </ul>
            </Texto>
        </Bla>
    )
}

export default PaginaDois