import { useMemo, useState } from "react";
import { Field, Input } from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import Icon from "../../components/Icon.jsx";
import usePageMeta from "../../hooks/usePageMeta.js";
import { useToast } from "../../context/ToastContext.jsx";
import { whatsappTemplates } from "../../data/mockData.js";

const CATEGORIES = Object.keys(whatsappTemplates);

export default function ToolWhatsapp() {
  usePageMeta("WhatsApp Message Generator", "Ready-to-send WhatsApp messages for every stage of a travel sale.");
  const { showToast } = useToast();
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [name, setName] = useState("Rohan");
  const [destination, setDestination] = useState("Kashmir");
  const [generated, setGenerated] = useState(null);

  const draft = useMemo(() => {
    const template = whatsappTemplates[category];
    return template.replace("{name}", name || "there").replace(/{destination}/g, destination || "your trip");
  }, [category, name, destination]);

  function handleGenerate() {
    setGenerated(draft);
  }

  function handleCopy() {
    navigator.clipboard?.writeText(generated ?? draft);
    showToast("Message copied to clipboard.", "success");
  }

  return (
    <section className="section tool-page">
      <div className="container tool-two-col">
        <div>
          <div className="section-head section-head--left">
            <span className="eyebrow">WhatsApp Generator</span>
            <h1>Ready-to-send customer messages</h1>
            <p>Pick a category, personalise it, and copy it straight into WhatsApp.</p>
          </div>
          <div className="card form-section">
            <Field label="Message Category" id="wa-category">
              <div className="chip-select">
                {CATEGORIES.map((c) => (
                  <button
                    type="button"
                    key={c}
                    className={`chip-select__item ${category === c ? "chip-select__item--active" : ""}`}
                    onClick={() => { setCategory(c); setGenerated(null); }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </Field>
            <div className="form-row">
              <Field label="Customer Name" id="wa-name">
                <Input id="wa-name" value={name} onChange={(e) => setName(e.target.value)} />
              </Field>
              <Field label="Destination" id="wa-destination">
                <Input id="wa-destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
              </Field>
            </div>
            <Button onClick={handleGenerate}>Generate Message</Button>
          </div>
        </div>

        <div>
          <div className="card whatsapp-preview">
            <div className="whatsapp-preview__header">
              <Icon name="message-circle" size={18} />
              <span>{category}</span>
            </div>
            <div className="whatsapp-bubble">{generated ?? draft}</div>
            <div className="quotation-doc__actions">
              <Button variant="secondary" icon={<Icon name="copy" size={16} />} onClick={handleCopy}>Copy Message</Button>
              <Button icon={<Icon name="share" size={16} />} onClick={() => showToast("Opening WhatsApp will be connected in Phase 2.", "info")}>Open WhatsApp</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
