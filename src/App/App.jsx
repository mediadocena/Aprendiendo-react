import React from 'react';

const deseos = [
    {texto:'Deseo 1', done: false},
    {texto:'Tener una girafa', done: true},
    {texto: 'Ir a marte', done: false}
]

const App = () =>(
    <div>
        <h1>Lista de deseos</h1>
        <fieldset>
            <legend>Nuevo deseo</legend>
            <input placeholder="Introduzca el deseo"/>
        </fieldset>
        <ul>
            {deseos.map(({texto, done}, i) =>(
                <li>
                    <label htmlFor={`deseo${i}`}>
                        <input id={`deseo${i}`} type="checkbox" checked={done} onClick={!done}/>
                        {texto}
                    </label>
                </li>
            ))}
        </ul>
        <button type="button"> Archivar </button>
    </div>
);

export default App;