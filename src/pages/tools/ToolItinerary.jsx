import { useState } from "react";
import { Field, Input, Select, Textarea } from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import Icon from "../../components/Icon.jsx";
import usePageMeta from "../../hooks/usePageMeta.js";
import { useToast } from "../../context/ToastContext.jsx";
import { sampleItinerary } from "../../data/mockData.js";

const TRAVEL_TYPES = ["Family", "Honeymoon", "Couple", "Group", "Corporate", "Adventure", "Leisure"];

export default function ToolItinerary() {
  usePageMeta("Itinerary Generator", "Turn trip details into a day-by-day itinerary.");
  const { showToast } = useToast();
  const [form, setForm] = useState({
    destination: "",
    duration: 5,
    adults: 2,
    children: 0,
    travelType: "Leisure",
    hotelCategory: "3 Star",
    budget: "Mid-range",
    requirements: "",
  });
  const [itinerary, setItinerary] = useState(null);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleGenerate(e) {
    e.preventDefault();
    const days = Math.max(3, Math.min(Number(form.duration) || 5, sampleItinerary.length));
    setItinerary(sampleItinerary.slice(0, days));
    showToast("Sample itinerary generated.", "success");
  }

  function handleCopy() {
    if (!itinerary) return;
    const text = itinerary.map((d) => `Day ${d.day} — ${d.title}: ${d.details}`).join("\n");
    navigator.clipboard?.writeText(text);
    showToast("Itinerary copied to clipboard.", "success");
  }

  return (
    <section className="section tool-page">
      <div className="container tool-two-col">
        <div>
          <div className="section-head section-head--left">
            <span className="eyebrow">Itinerary Generator</span>
            <h1>Draft a day-by-day itinerary</h1>
            <p>Enter the trip basics and generate a sample plan you can edit and reuse.</p>
          </div>
          <form className="card form-section" onSubmit={handleGenerate}>
            <Field label="Destination" required id="i-destination">
              <Input id="i-destination" value={form.destination} onChange={(e) => update("destination", e.target.value)} required placeholder="e.g. Ladakh" />
            </Field>
            <div className="form-row">
              <Field label="Duration (days)" id="i-duration">
                <Input id="i-duration" type="number" min="1" max="10" value={form.duration} onChange={(e) => update("duration", e.target.value)} />
              </Field>
              <Field label="Travel Type" id="i-type">
                <Select id="i-type" value={form.travelType} onChange={(e) => update("travelType", e.target.value)}>
                  {TRAVEL_TYPES.map((t) => <option key={t}>{t}</option>)}
                </Select>
              </Field>
            </div>
            <div className="form-row">
              <Field label="Adults" id="i-adults">
                <Input id="i-adults" type="number" min="1" value={form.adults} onChange={(e) => update("adults", e.target.value)} />
              </Field>
              <Field label="Children" id="i-children">
                <Input id="i-children" type="number" min="0" value={form.children} onChange={(e) => update("children", e.target.value)} />
              </Field>
            </div>
            <div className="form-row">
              <Field label="Hotel Category" id="i-hotel">
                <Select id="i-hotel" value={form.hotelCategory} onChange={(e) => update("hotelCategory", e.target.value)}>
                  {["Budget", "3 Star", "4 Star", "5 Star / Luxury"].map((t) => <option key={t}>{t}</option>)}
                </Select>
              </Field>
              <Field label="Budget" id="i-budget">
                <Select id="i-budget" value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                  {["Economical", "Mid-range", "Premium"].map((t) => <option key={t}>{t}</option>)}
                </Select>
              </Field>
            </div>
            <Field label="Special Requirements" id="i-requirements">
              <Textarea id="i-requirements" rows={3} value={form.requirements} onChange={(e) => update("requirements", e.target.value)} placeholder="e.g. vegetarian meals, wheelchair access, no early starts" />
            </Field>
            <Button type="submit">Generate Itinerary</Button>
          </form>
        </div>

        <div>
          {itinerary ? (
            <div className="card itinerary-result">
              <div className="itinerary-result__head">
                <div>
                  <span className="demo-badge">Demo content — AI generation arrives in Phase 2</span>
                  <h3>{form.destination || "Your Destination"} · {itinerary.length}-Day Itinerary</h3>
                </div>
              </div>
              <ol className="itinerary-timeline">
                {itinerary.map((d) => (
                  <li key={d.day}>
                    <span className="itinerary-timeline__day nums">Day {d.day}</span>
                    <div>
                      <h4>{d.title}</h4>
                      <p>{d.details}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="quotation-doc__actions">
                <Button variant="secondary" icon={<Icon name="edit" size={16} />} onClick={() => showToast("Editing will be available once itineraries are saved to your account.", "info")}>Edit</Button>
                <Button variant="secondary" icon={<Icon name="copy" size={16} />} onClick={handleCopy}>Copy</Button>
                <Button variant="secondary" icon={<Icon name="check" size={16} />} onClick={() => showToast("Itinerary saved (demo).", "success")}>Save</Button>
                <Button icon={<Icon name="file-plus" size={16} />} onClick={() => showToast("Added to a new quotation draft (demo).", "success")}>Add to Quotation</Button>
              </div>
            </div>
          ) : (
            <div className="card empty-state">
              <Icon name="map" size={28} />
              <h3>No itinerary yet</h3>
              <p>Fill in the trip details and generate a sample day-by-day plan.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
