import {useState, useEffect, useCallback} from 'react';

export const useGameStatus = (rowCleared) => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    const linePoints = [40, 80, 160, 320];

    const calcScore = useCallback(() => {
        // We have score
        if (rowCleared > 0) {
            // Hold the original Tetris score that is calculated
            setScore((prev) => prev + linePoints[rowCleared - 1] * (level + 1));
            setRows((prev) => prev + rowCleared);
        }
    }, [level, linePoints, rowCleared]);

    useEffect(() => {
        calcScore();
    }, [calcScore, rowCleared, score]);

    return [score, setScore, rows, setRows, level, setLevel];
};

