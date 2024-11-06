# Descripción y Cumplimiento de Habilidades del Proyecto
## Juego de Tic-Tac-Toe (Tres en Raya)

- **Descripción:** Crea un juego de Tic-Tac-Toe (Tres en Raya) donde dos jugadores se alternan para hacer clic en una cuadrícula 3x3. El objetivo es que uno de los jugadores forme una línea (horizontal, vertical o diagonal) antes que el otro.
---
**Habilidades:**
- **Escribir tu primer componente de React:** Crear un componente Casilla que represente cada celda de la cuadrícula.
```ts
interface CellProps {
    value: string;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({value, onClick}) => {
    return (
        <div className="cell" onClick={onClick}>
            {value}
        </div>
    );
};
```

**Explicación**
- *¿Qué hace este fragmento de código?*

Este código define un componente funcional de React llamado `Cell`. Este componente representa cada celda de la cuadrícula en el juego de Tic-Tac-Toe y acepta dos propiedades (props): `value`, que contiene el contenido de la celda como `"X" o "O"`, y `onClick`, una función que se ejecuta cuando se hace clic en la celda.

- *¿Cómo cumple con el requisito de la habilidad?*

El componente `Cell` implementa el requisito de representar cada celda de la cuadrícula de forma modular, lo cual facilita el manejo individual de cada casilla en el tablero que permite reusabilidad.

- *¿Por qué es la mejor forma de implementarlo?*

La creación de un componente específico para cada casilla permite que el código sea más claro, modular y fácil de mantener. Además, el uso de `props` asegura que el componente `Cell` sea puro, ya que solo recibe datos sin alterarlos directamente.

---
- **Crear archivos con múltiples componentes:** Crear componentes para la cuadrícula, las casillas y los controles del juego.
```ts
interface CellProps {
    value: string;
    onClick: () => void;
}

const Game: React.FC = () => {
    const [board, setBoard] = useState<string[][]>([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const [turn, setTurn] = useState<string>('X');

    // Función para manejar el clic en una celda
    const handleClick = (row: number, col: number) => {
        // Lógica para cambiar el turno y actualizar el tablero
    };

    return (
        <div className="App">
            <div className="board">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <Cell
                                key={colIndex}
                                value={cell}
                                onClick={() => handleClick(rowIndex, colIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Game;
```
**Explicación**
- *¿Qué hace este fragmento de código?*

Aquí se define un componente `Game`, que organiza la cuadrícula de 3x3 del juego y utiliza el componente `Cell` para cada casilla.

- *¿Cómo cumple con el requisito de la habilidad?*

Este código muestra la estructura modular al separar cada componente en su propio archivo y permitir que `Game` gestione la cuadrícula general y cada `Cell` sea un componente individual.

- *¿Por qué es la mejor forma de implementarlo?*

Separar los componentes en archivos individuales permite una mejor organización y facilita el mantenimiento del proyecto, permitiendo a cada componente enfocarse en una única responsabilidad.

---
- **Añadir marcado a JavaScript con JSX:** Usar JSX para estructurar la cuadrícula 3x3 y los elementos del juego.
```ts
return (
    <div className="App">
        <h1>TIC - TAC - TOE</h1>
        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={colIndex}
                            value={cell}
                            onClick={() => handleClick(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
        {winner && <h2>Jugador {winner} ganó!</h2>}
    </div>
);
```
**Explicación**
- *¿Qué hace este fragmento de código?*

Este fragmento usa JSX para definir la estructura visual de la aplicación, incluyendo el título, la cuadrícula de 3x3, y un mensaje de ganador.

- *¿Cómo cumple con el requisito de la habilidad?*

Utilizar `JSX` facilita el diseño de la interfaz de usuario UI de manera declarativa y permite integrar la estructura HTML en el código JavaScript.

- *¿Por qué es la mejor forma de implementarlo?*

`JSX` hace que el código sea más legible y permite manipular la UI en función del estado de React, lo que es ideal para aplicaciones interactivas.

---
- **Añadir llaves con JSX:** Utilizar llaves para controlar las casillas seleccionadas y verificar si hay un ganador.
```ts
const checkWinner = (newBoard: string[][]) => {
    for(let i = 0; i < 3; i++) {
        if(newBoard[i][0] === newBoard[i][1] && newBoard[i][1] === newBoard[i][2] && newBoard[i][0] !== '') {
            setWinner(newBoard[i][0]);
            return;
        }
        if(newBoard[0][i] === newBoard[1][i] && newBoard[1][i] === newBoard[2][i] && newBoard[0][i] !== '') {
            setWinner(newBoard[0][i]);
            return;
        }
    }
    if(newBoard[0][0] === newBoard[1][1] && newBoard[1][1] === newBoard[2][2] && newBoard[0][0] !== '') {
        setWinner(newBoard[0][0]);
        return;
    }
    if(newBoard[0][2] === newBoard[1][1] && newBoard[1][1] === newBoard[2][0] && newBoard[0][2] !== '') {
        setWinner(newBoard[0][2]);
        return;
    }
};
```
**Explicación**
- *¿Qué hace este fragmento de código?*

`checkWinner` verifica las filas, columnas y diagonales de la cuadrícula para determinar si hay un ganador.

- *¿Cómo cumple con el requisito de la habilidad?*

Controla qué casillas están seleccionadas en el tablero y determina si se ha completado una línea de tres casillas iguales.

- *¿Por qué es la mejor forma de implementarlo?*

Este método es claro y eficiente para verificar un ganador, evitando bucles innecesarios.

---
- **Configurar componentes con props:** Pasar información sobre las casillas (X o O) y el estado del juego como props.
```ts
const Cell: React.FC<CellProps> = ({ value, onClick }) => {
    return (
        <div className="cell" onClick={onClick}>
            {value}
        </div>
    );
};
```
**Explicación**
- *¿Qué hace este fragmento de código?*

Define el componente `Cell` que recibe `value` y `onClick` como propiedades para gestionar el valor y comportamiento de cada celda.

- *¿Cómo cumple con el requisito de la habilidad?*

Utiliza `props` para hacer que `Cell` reciba datos de su componente padre y responda a eventos sin modificar el estado global directamente.

- *¿Por qué es la mejor forma de implementarlo?*

Usar `props` mantiene `Cell` puro, separando la lógica y el estado de cada celda, lo que favorece la reutilización.

---
- **Renderizar condicionalmente:** Mostrar X o O en las casillas según el turno del jugador.
```ts
    const handleClick = (row: number, col: number) => {
        if(winner) return;
        if(board[row][col] !== '') return;

        const newBoard = [...board];
        newBoard[row][col] = turn;

        setBoard(newBoard);

        checkWinner(newBoard);

        setTurn(turn === 'X' ? 'O' : 'X');
    };
```
**Explicación**
- *¿Qué hace este fragmento de código?*

 Maneja el clic en una celda, actualiza el tablero con el valor del jugador actual `X o O` y alterna el turno.

- *¿Cómo cumple con el requisito de la habilidad?*

 Utiliza el estado del turno actual para determinar qué marca se debe mostrar en la celda seleccionada.

- *¿Por qué es la mejor forma de implementarlo?* 

Permite un control claro y directo sobre el flujo del juego y la alternancia de turnos.

---
- **Renderizar múltiples componentes a la vez:** Renderizar todas las casillas de la cuadrícula utilizando map.
```ts
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <Cell
                            key={colIndex}
                            value={cell}
                            onClick={() => handleClick(rowIndex, colIndex) }
                            />
                        ))}
                    </div>
                ))}
```
**Explicación**
- *¿Qué hace este fragmento de código?*

Mapea cada fila y celda de la cuadrícula para renderizar el componente `Cell` en cada posición.

- *¿Cómo cumple con el requisito de la habilidad?*

Utiliza `map` para generar los componentes `Cell` dinámicamente, representando cada celda en la cuadrícula.

- *¿Por qué es la mejor forma de implementarlo?*

Facilita la actualización del tablero, manteniendo el código limpio y escalable.

---
- **Mantener componentes puros:** Asegurar que las casillas no muten el estado directamente y solo reciban información a través de props.
```ts
const Cell: React.FC<CellProps> = ({value, onClick}) => {
    return (
        <div className="cell" onClick={onClick}>
            {value}
        </div>
    );
};
```
**Explicación**
- *¿Qué hace este fragmento de código?*

Define el componente `Cell` que recibe `value` y `onClick` como propiedades sin modificar directamente el estado del juego.

- *¿Cómo cumple con el requisito de la habilidad?*

`Cell` es un componente puro que solo recibe información a través de props y no cambia el estado directamente, asegurando la integridad de los datos en el componente principal.

- *¿Por qué es la mejor forma de implementarlo?*

Mantener el componente puro garantiza que `Cell` no afecte accidentalmente el estado del juego, haciendo la aplicación más predecible y fácil de depurar.

---
- **Entender la UI como árboles:** Organizar los componentes de forma jerárquica, donde las casillas son nodos hijos de la cuadrícula.
```ts
    return (
        <div className="App">
            <h1>TIC - TAC - TOE</h1>
            <div className="board">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <Cell
                            key={colIndex}
                            value={cell}
                            onClick={() => handleClick(rowIndex, colIndex) }
                            />
                        ))}
                    </div>
                ))}
            </div>
            {winner && <h2>Jugador {winner} ganó!</h2>}
        </div>
    );
};
```
**Explicación**
- *¿Qué hace este fragmento de código?*

Estructura la interfaz de usuario en un árbol jerárquico donde `Game` es el componente principal, y `Cell` representa las hojas `nodos hijos` dentro de la cuadrícula.

- *¿Cómo cumple con el requisito de la habilidad?*

Los componentes `Cell` están anidados bajo `Game`, reflejando la jerarquía lógica de una cuadrícula.

- *¿Por qué es la mejor forma de implementarlo?*

La organización en árbol facilita el manejo y actualización del estado desde el componente principal y mantiene la estructura clara y modular.

---
- **Controlar eventos del usuario:** Capturar los clics en las casillas para alternar entre los turnos de los jugadores.
```ts
const handleClick = (row: number, col: number) => {
    if(winner) return;
    if(board[row][col] !== '') return;

    const newBoard = [...board];
    newBoard[row][col] = turn;

    setBoard(newBoard);
    checkWinner(newBoard);

    setTurn(turn === 'X' ? 'O' : 'X');
};
```
**Explicación**
- *¿Qué hace este fragmento de código?*

Captura el clic en una casilla y actualiza el turno y el estado del tablero.

- *¿Cómo cumple con el requisito de la habilidad?* 

Usa el evento `onClick` en `Cell` para detectar clics y actualizar el turno.

- *¿Por qué es la mejor forma de implementarlo?*

Gestionar eventos de usuario en un solo método `handleClick` permite centralizar la lógica de interacción del jugador, evitando duplicación de código y errores.

---
- **Gestionar el estado:** Controlar el estado del juego, incluyendo qué casillas están ocupadas y qué jugador está en turno.
```ts
const [board, setBoard] = useState<string[][]>([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]);
const [turn, setTurn] = useState<string>('X');
const [winner, setWinner] = useState<string | null>(null);
```
**Explicación**
- *¿Qué hace este fragmento de código?* 

Define el estado del juego utilizando el hook `useState`. Esto incluye el tablero, el jugador actual y el ganador.

- *¿Cómo cumple con el requisito de la habilidad?*

Controla qué casillas están ocupadas y qué jugador está en turno a través de estos estados.

- *¿Por qué es la mejor forma de implementarlo?*

Utilizar `useState` permite que cada variable de estado se actualice de forma reactiva, lo que facilita la gestión de cambios en el juego.

---
- **Renderizado condicional (detectar ganador):** Verificar si hay un ganador y mostrar un mensaje cuando el juego termine.
```ts
const checkWinner = (newBoard: string[][]) => {
    // Verificación de filas, columnas y diagonales
    // ...
    if(newBoard[0][0] === newBoard[1][1] && newBoard[1][1] === newBoard[2][2] && newBoard[0][0] !== '') {
        setWinner(newBoard[0][0]);
        return;
    }
    // ...
};

{winner && <h2>Jugador {winner} ganó!</h2>}
```
**Explicación**
- *¿Qué hace este fragmento de código?*

Renderiza un mensaje que muestra el ganador cuando `winner` tiene un valor.

- *¿Cómo cumple con el requisito de la habilidad?*

Utiliza renderizado condicional para mostrar un mensaje solo cuando hay un ganador.

- *¿Por qué es la mejor forma de implementarlo?*

 La renderización condicional es una práctica común en React que permite mostrar u ocultar elementos de manera eficiente según el estado.

---
- **Actualizar el estado:** Actualizar el estado de las casillas a medida que los jugadores colocan X o O.
```ts
const handleClick = (row: number, col: number) => {
    if(winner) return;
    if(board[row][col] !== '') return;

    const newBoard = [...board];
    newBoard[row][col] = turn;

    setBoard(newBoard);
    checkWinner(newBoard);

    setTurn(turn === 'X' ? 'O' : 'X');
};
```
**Explicación**
- *¿Qué hace este fragmento de código?*

 Crea una copia del tablero actual y actualiza el estado `board` con el turno actual `X o O` y cambia el turno al siguiente jugador.

 - *¿Cómo cumple con el requisito de la habilidad?*
 
  Modifica el estado del tablero para reflejar la acción del jugador.

  - *¿Por qué es la mejor forma de implementarlo?*

Usar `setBoard` para actualizar el tablero hace que los cambios sean reactivos, manteniendo la UI en sincronía con el estado.

---
- **Levantar el estado:** Compartir el estado entre los componentes para que la cuadrícula y los controles del juego estén sincronizados.
```ts
const Game: React.FC = () => {
    const [board, setBoard] = useState <string[][]> ([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const [turn, setTurn] = useState<string>('X');
    const [winner, setWinner] = useState<string | null>(null);
    // resto del código
```
**Explicación**
- *¿Qué hace este fragmento de código?*

Define el estado principal en el componente `Game`, que se comparte entre la cuadrícula y las celdas a través de `props`.

- *¿Cómo cumple con el requisito de la habilidad?*

Centraliza el estado en `Game` para que todos los componentes dependan de una sola fuente de verdad.

- *¿Por qué es la mejor forma de implementarlo?*

Levantar el estado en el componente principal asegura que todos los elementos estén sincronizados con los cambios de estado.

 
