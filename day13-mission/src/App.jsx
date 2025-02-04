import './App.css';
import CurrencyInput from './components/CurrencyInput';
import { useState } from 'react';

function App() {
  const [currency, setCurrency] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (name, value) => {
    if (name === 'krw') {
      setCurrency({
        krw: value,
        usd: value / 1300,
      });
    } else {
      setCurrency({
        krw: value * 1300,
        usd: value,
      });
    }
  };

  return (
    <div>
      <h2>환율 변환기 (KRW-USD)</h2>
      <CurrencyInput name="krw" value={currency.krw} onChange={onChange} />
      <CurrencyInput name="usd" value={currency.usd} onChange={onChange} />
    </div>
  );
}

export default App;
