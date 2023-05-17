let muk = 'Muktha K';
let sally = 'Sally smith';
let holly = 'holly unlikely';
let amol = 'amol shookup';
let robin = 'robin sharma';
let aron = 'aron de tyres';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, muk), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol.toUpperCase()), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, aron));
ReactDOM.render(element, document.getElementById('content'));