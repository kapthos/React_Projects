import styled from 'styled-components'

export const Bla = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2% auto;
    width: 12%;
`
export const BotoesDiv = styled.div`
    display: flex;
    justify-content: center;

    button {
        cursor: pointer;
        padding: 5px 10px;
        margin: 0 4px;
        border: 1px solid #111;
        background: #BBB;
        color: #333;
        font-size: 1.2em;
        font-weight: 600;
    }
    
    button:hover {
        background-color: #A3A3A3;
    }
`
export const Texto = styled.div`
    display: flex;
    justify-content: center;

    h2 {
        font-size: 2em;
        color: #111;
    }
`