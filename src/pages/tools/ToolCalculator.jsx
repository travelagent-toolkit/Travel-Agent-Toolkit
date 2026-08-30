import { useMemo, useState } from "react";
import { Field, Input } from "../../components/Input.jsx";
import usePageMeta from "../../hooks/usePageMeta.js";
import { formatINR } from "../../utils/format.js";

const initial = { hotel: 20000, transport: 8000, meals: 4000, sightseeing: 5000, activities: 2000, other: 1000, markup: 20 };

export default function ToolCalculator() {
  usePageMeta("Package Cost Calculator", "Add up your package costs and set a clean profit margin instantly.");
  const [v, setV] = useState(initial);

  const update = (field) => (e) => setV((s) => ({ ...s, [field]: Number(e.target.value) || 0 }));

  const netCost = useMemo(
    () => v.hotel + v.transport + v.meals + v.sightseeing + v.activities + v.other,
    [v]
  );
  const markupAmount = useMemo(() => Math.round((netCost * v.markup) / 100), [netCost, v.markup]);
  const sellingPrice = netCost + markupAmount;
  const profit = markupAmount;

  const fields = [
    { key: "hotel", label: "Hotel" },
    { key: "transport", label: "Transport" },
    { key: "meals", label: "Meals" },
    { key: "sightseeing", label: "Sightseeing" },
    { key: "activities", label: "Activities" },
    { key: "other", label: "Other Charges" },
  ];

  return (
    <section className="section tool-page">
      <div className="container tool-two-col">
        <div>
          <div className="section-head section-head--left">
            <span className="eyebrow">Package Cost Calculator</span>
            <h1>Work out your margin instantly</h1>
            <p>Enter each cost component — the summary updates as you type.</p>
          </div>
          <div className="card form-section">
            {fields.map((f) => (
              <Field label={f.label} id={`calc-${f.key}`} key={f.key}>
                <Input id={`calc-${f.key}`} type="number" prefix="₹" min="0" value={v[f.key]} onChange={update(f.key)} />
              </Field>
            ))}
            <Field label="Markup %" id="calc-markup">
              <Input id="calc-markup" type="number" prefix="%" min="0" max="100" value={v.markup} onChange={update("markup")} />
            </Field>
          </div>
        </div>

        <div>
          <div className="card pricing-summary calculator-summary">
            <h3>Summary</h3>
            <div className="pricing-summary__row">
              <span>Net Cost</span>
              <span className="nums">{formatINR(netCost)}</span>
            </div>
            <div className="pricing-summary__row">
              <span>Markup Amount ({v.markup}%)</span>
              <span className="nums">{formatINR(markupAmount)}</span>
            </div>
            <div className="pricing-summary__row pricing-summary__row--total">
              <span>Final Selling Price</span>
              <span className="nums">{formatINR(sellingPrice)}</span>
            </div>
            <div className="pricing-summary__row pricing-summary__row--profit">
              <span>Profit</span>
              <span className="nums">{formatINR(profit)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
