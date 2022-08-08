import styled from 'styled-components'

export const MainDiv = styled.div`
    background-color: #444;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 100px auto;
    padding: 8px;
    width: 250px;
    height: 300px;
    border-radius: 10px;
`

export const Visor = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: green;

    p{
        margin-left: 4px;
    }
`

export const BotoesDiv = styled.div`
    display: grid;
    column-gap: 4px;
    row-gap: 4px;
    height: 80%;
    margin-top: 8px;
    grid-template-columns: repeat(4, 1fr);

    #c {
        grid-column: 1 / 3;
    }
`