import { useEffect, useState } from "react";

interface CasillaProps {
    valor: string;
    onClick: () => void;
}

const Casilla: React.FC<CasillaProps> = ({valor, onClick}) => {
    return (
        <div className="casilla" onClick={onClick}>
            {valor}
        </div>
    );
};

interface CuadriculaProps {
    jugadores: string[];
}

const Cuadricula: React.FC<CuadriculaProps> = ({ jugadores }) => {
    const [estado, setEstado] = useState<string[][]> ([
        ['','',''],
        ['','',''],
        ['','',''],
    ]);

    const handleClick = (fila: number, columna: number) => {
        const nuevoEstado = [...estado];
        nuevoEstado[fila][columna] = jugadores[0];
        setEstado(nuevoEstado);
    };

    return (
        <div className="cuadricula">
            {estado.map((fila, indiceFila) => (
                <div key={indiceFila} className="fila">
                    {fila.map((casilla, indiceColumna) => (
                        <Casilla
                        key={indiceColumna}
                        valor={casilla}
                        onClick={() => handleClick(indiceFila, indiceColumna)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

const Game: React.FC = () =>{
    const [jugadores, setJugadores] = useState(['X', 'O']);
    const [turno, setTurno] = useState(0);

    useEffect (() => {
        const handleTurno = () => {
            setTurno((turno) => (turno + 1) % 2);
            setJugadores((jugadores) => [jugadores[1], jugadores[0]]);

        };
        const intervalId = setInterval(handleTurno, 5000);
        return () => clearInterval(intervalId);
    }, [jugadores, turno]);


    return (
        <div className="app">
            <Cuadricula jugadores={jugadores}/>
            <p>Turno actual: {turno === 0 ? 'X': 'O'}</p>
        </div>
    );
};

export default Game; 