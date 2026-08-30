import { useMemo, useState } from "react";
import { Field, Input, Select } from "../../components/Input.jsx";
import Icon from "../../components/Icon.jsx";
import usePageMeta from "../../hooks/usePageMeta.js";
import { exchangeRates } from "../../data/mockData.js";

const CURRENCIES = Object.keys(exchangeRates);

export default function ToolCurrency() {
  usePageMeta("Currency Converter", "Convert package prices across ten common travel currencies.");
  const [amount, setAmount] = useState(50000);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");

  const converted = useMemo(() => {
    const inINR = (Number(amount) || 0) * exchangeRates[from];
    return inINR / exchangeRates[to];
  }, [amount, from, to]);

  return (
    <section className="section tool-page">
      <div className="container tool-two-col">
        <div>
          <div className="section-head section-head--left">
            <span className="eyebrow">Currency Converter</span>
            <h1>Quote across currencies</h1>
            <p>Useful for NRI and international customers comparing prices in their home currency.</p>
          </div>
          <div className="card form-section">
            <Field label="Amount" id="cur-amount">
              <Input id="cur-amount" type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </Field>
            <div className="form-row">
              <Field label="From Currency" id="cur-from">
                <Select id="cur-from" value={from} onChange={(e) => setFrom(e.target.value)}>
                  {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
                </Select>
              </Field>
              <Field label="To Currency" id="cur-to">
                <Select id="cur-to" value={to} onChange={(e) => setTo(e.target.value)}>
                  {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
                </Select>
              </Field>
            </div>
          </div>
        </div>

        <div>
          <div className="card currency-result">
            <span className="currency-result__label">Converted Amount</span>
            <span className="currency-result__value nums">
              {converted.toLocaleString("en-IN", { maximumFractionDigits: 2 })} <small>{to}</small>
            </span>
            <p className="demo-note">
              <Icon name="alert-circle" size={15} />
              Exchange rates shown are for demonstration and will be connected to a live currency API in a future version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
