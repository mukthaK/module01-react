let muk = 'Muktha K'
let sally = 'Sally smith';
let holly = 'holly unlikely';
let amol = 'amol shookup';
let robin = 'robin sharma';
let aron = 'aron de tyres';

const element = (
    <ul style={{'color': 'blue', 'fontSize':'24px'}}>
        <li>{muk}</li>
        <li>{sally}</li>
        <li>{holly}</li>
        <li>{amol.toUpperCase()}</li>
        <li>{robin}</li>
        <li>{aron}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'));