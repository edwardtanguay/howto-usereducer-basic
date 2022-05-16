import './App.scss';
import { useReducer } from 'react';

const initialState = {
    number: 0,
    lastAction: '',
    whenLastClicked: '',
    numberOfClicks: 0
};

function reducer(state, action) {
    let obj = {};
    obj.whenLastClicked = new Date();
    obj.numberOfClicks = state.numberOfClicks + 1;
    switch (action.direction) {
        case 'up':
            obj.number = state.number + 1;
            obj.lastAction = 'increment';
            break;
        case 'down':
            obj.number = state.number - 1;
            obj.lastAction = 'decrement';
            break;
		case 'reset':
			obj = { ...initialState };
			break;
        default:
            throw new Error();
    }
    return obj;
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <h1>Basic Example of useReducer:</h1>
            <div>Number: {state.number}</div>
            <div>Last action: {state.lastAction}</div>
            <div>
                <button onClick={() => dispatch({ direction: 'down' })}>
                    -
                </button>
                <button onClick={() => dispatch({ direction: 'up' })}>+</button>
                <button onClick={() => dispatch({ direction: 'reset' })}>
                    Reset
                </button>
            </div>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
