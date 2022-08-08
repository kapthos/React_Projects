import React from 'react'
import {MainDiv, BotoesDiv, Visor} from '../styled'

    function Inicial({handleValores, handleDisplay, handleReset, handleOperacoes, handleResult}) {
        return (
            <MainDiv>
                <Visor>
                    <p>{handleDisplay()}</p>
                </Visor>
                <BotoesDiv>
                    <button id='c'onClick={handleReset}>C</button>
                    <button>%</button>
                    <button onClick={() => handleOperacoes("/")}>/</button>
                    <button onClick={() => handleValores("1")}>1</button>
                    <button onClick={() => handleValores("2")}>2</button>
                    <button onClick={() => handleValores("3")}>3</button>
                    <button onClick={() => handleOperacoes("x")}>x</button>
                    <button onClick={() => handleValores("4")}>4</button>
                    <button onClick={() => handleValores("5")}>5</button>
                    <button onClick={() => handleValores("6")}>6</button>
                    <button onClick={() => handleOperacoes("-")}>-</button>
                    <button onClick={() => handleValores("7")}>7</button>
                    <button onClick={() => handleValores("8")}>8</button>
                    <button onClick={() => handleValores("9")}>9</button>
                    <button onClick={() => handleOperacoes("+")}>+</button>
                    <button onClick={() => handleValores("0")}>0</button>
                    <button onClick={() => handleValores(".")}>.</button>
                    <button>DEL</button>
                    <button onClick={() => handleResult()}>=</button>
                </BotoesDiv>
            </MainDiv>
        )
    }

export default Inicial