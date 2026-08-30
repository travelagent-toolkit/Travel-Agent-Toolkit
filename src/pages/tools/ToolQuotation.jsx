import { useMemo, useState } from "react";
import { Field, Input, Select, Textarea } from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import Icon from "../../components/Icon.jsx";
import usePageMeta from "../../hooks/usePageMeta.js";
import { useToast } from "../../context/ToastContext.jsx";
import { formatINR } from "../../utils/format.js";

const initialState = {
  agencyName: "RJ Holidays",
  agencyPhone: "+91 98765 43210",
  agencyEmail: "info@rjholidays.online",
  agencyAddress: "Dharamshala, Himachal Pradesh",
  gstin: "",
  customerName: "",
  customerPhone: "",
  customerEmail: "",
  destination: "",
  travelDate: "",
  nights: 4,
  days: 5,
  adults: 2,
  children: 0,
  tripType: "Leisure",
  hotelName: "",
  roomCategory: "Deluxe",
  mealPlan: "MAP (Breakfast + Dinner)",
  hotelNights: 4,
  hotelCost: 20000,
  vehicleType: "Sedan",
  vehicleDays: 5,
  vehicleCost: 8000,
  sightseeingDetails: "",
  sightseeingCost: 5000,
  activities: "",
  transfers: "",
  otherCharges: 2000,
  costPrice: 35000,
  markup: 20,
};

export default function ToolQuotation() {
  usePageMeta("Quotation Generator", "Build a branded travel quotation with live pricing.");
  const { showToast } = useToast();
  const [data, setData] = useState(initialState);
  const [preview, setPreview] = useState(false);

  const computedCost = data.hotelCost + data.vehicleCost + data.sightseeingCost + Number(data.otherCharges || 0);
  const costPrice = Number(data.costPrice) || computedCost;
  const sellingPrice = useMemo(
    () => Math.round(costPrice * (1 + Number(data.markup || 0) / 100)),
    [costPrice, data.markup]
  );

  function update(field, value) {
    setData((d) => ({ ...d, [field]: value }));
  }

  function handleGenerate(e) {
    e.preventDefault();
    setPreview(true);
    showToast("Quotation generated.", "success");
  }

  function handleReset() {
    setData(initialState);
    setPreview(false);
  }

  function handleSaveDraft() {
    showToast("Draft saved (demo — not yet persisted to an account).", "info");
  }

  if (preview) {
    return (
      <QuotationPreview
        data={data}
        sellingPrice={sellingPrice}
        onEdit={() => setPreview(false)}
        onNotify={(msg) => showToast(msg, "info")}
        onSave={() => showToast("Quotation saved (demo).", "success")}
      />
    );
  }

  return (
    <section className="section tool-page">
      <div className="container">
        <div className="section-head section-head--left">
          <span className="eyebrow">Quotation Generator</span>
          <h1>Build a branded quotation</h1>
          <p>Fill in the trip details below. Selling price updates live as you adjust costs and markup.</p>
        </div>

        <form className="quote-form" onSubmit={handleGenerate}>
          <div className="quote-form__main">
            <FormSection title="Agency Details">
              <div className="form-row">
                <Field label="Agency Name" required id="q-agency-name">
                  <Input id="q-agency-name" value={data.agencyName} onChange={(e) => update("agencyName", e.target.value)} required />
                </Field>
                <Field label="Phone" required id="q-agency-phone">
                  <Input id="q-agency-phone" value={data.agencyPhone} onChange={(e) => update("agencyPhone", e.target.value)} required />
                </Field>
              </div>
              <div className="form-row">
                <Field label="Email" id="q-agency-email">
                  <Input id="q-agency-email" type="email" value={data.agencyEmail} onChange={(e) => update("agencyEmail", e.target.value)} />
                </Field>
                <Field label="GSTIN" id="q-gstin">
                  <Input id="q-gstin" value={data.gstin} onChange={(e) => update("gstin", e.target.value)} placeholder="Optional" />
                </Field>
              </div>
              <Field label="Address" id="q-address">
                <Input id="q-address" value={data.agencyAddress} onChange={(e) => update("agencyAddress", e.target.value)} />
              </Field>
              <Field label="Agency Logo" id="q-logo" hint="PNG or JPG. Upload will be enabled once storage is connected.">
                <div className="upload-box">
                  <Icon name="upload" size={20} />
                  <span>Click to upload or drag and drop</span>
                </div>
              </Field>
            </FormSection>

            <FormSection title="Customer Details">
              <div className="form-row">
                <Field label="Customer Name" required id="q-cust-name">
                  <Input id="q-cust-name" value={data.customerName} onChange={(e) => update("customerName", e.target.value)} required placeholder="e.g. Rohan Mehta" />
                </Field>
                <Field label="Phone" id="q-cust-phone">
                  <Input id="q-cust-phone" value={data.customerPhone} onChange={(e) => update("customerPhone", e.target.value)} />
                </Field>
              </div>
              <Field label="Email" id="q-cust-email">
                <Input id="q-cust-email" type="email" value={data.customerEmail} onChange={(e) => update("customerEmail", e.target.value)} />
              </Field>
            </FormSection>

            <FormSection title="Trip Details">
              <div className="form-row">
                <Field label="Destination" required id="q-destination">
                  <Input id="q-destination" value={data.destination} onChange={(e) => update("destination", e.target.value)} required placeholder="e.g. Kashmir" />
                </Field>
                <Field label="Travel Date" id="q-date">
                  <Input id="q-date" type="date" value={data.travelDate} onChange={(e) => update("travelDate", e.target.value)} />
                </Field>
              </div>
              <div className="form-row form-row--four">
                <Field label="Nights" id="q-nights">
                  <Input id="q-nights" type="number" min="0" value={data.nights} onChange={(e) => update("nights", e.target.value)} />
                </Field>
                <Field label="Days" id="q-days">
                  <Input id="q-days" type="number" min="1" value={data.days} onChange={(e) => update("days", e.target.value)} />
                </Field>
                <Field label="Adults" id="q-adults">
                  <Input id="q-adults" type="number" min="1" value={data.adults} onChange={(e) => update("adults", e.target.value)} />
                </Field>
                <Field label="Children" id="q-children">
                  <Input id="q-children" type="number" min="0" value={data.children} onChange={(e) => update("children", e.target.value)} />
                </Field>
              </div>
              <Field label="Trip Type" id="q-triptype">
                <Select id="q-triptype" value={data.tripType} onChange={(e) => update("tripType", e.target.value)}>
                  {["Leisure", "Honeymoon", "Family", "Group", "Corporate", "Adventure"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </Select>
              </Field>
            </FormSection>

            <FormSection title="Hotel">
              <div className="form-row">
                <Field label="Hotel Name" id="q-hotel-name">
                  <Input id="q-hotel-name" value={data.hotelName} onChange={(e) => update("hotelName", e.target.value)} />
                </Field>
                <Field label="Room Category" id="q-room-category">
                  <Select id="q-room-category" value={data.roomCategory} onChange={(e) => update("roomCategory", e.target.value)}>
                    {["Standard", "Deluxe", "Super Deluxe", "Suite"].map((t) => <option key={t}>{t}</option>)}
                  </Select>
                </Field>
              </div>
              <div className="form-row">
                <Field label="Meal Plan" id="q-meal-plan">
                  <Select id="q-meal-plan" value={data.mealPlan} onChange={(e) => update("mealPlan", e.target.value)}>
                    {["EP (Room Only)", "CP (Breakfast Only)", "MAP (Breakfast + Dinner)", "AP (All Meals)"].map((t) => <option key={t}>{t}</option>)}
                  </Select>
                </Field>
                <Field label="Nights" id="q-hotel-nights">
                  <Input id="q-hotel-nights" type="number" min="0" value={data.hotelNights} onChange={(e) => update("hotelNights", e.target.value)} />
                </Field>
              </div>
              <Field label="Hotel Cost" id="q-hotel-cost">
                <Input id="q-hotel-cost" type="number" prefix="₹" min="0" value={data.hotelCost} onChange={(e) => update("hotelCost", Number(e.target.value))} />
              </Field>
            </FormSection>

            <FormSection title="Transport">
              <div className="form-row">
                <Field label="Vehicle Type" id="q-vehicle-type">
                  <Select id="q-vehicle-type" value={data.vehicleType} onChange={(e) => update("vehicleType", e.target.value)}>
                    {["Sedan", "SUV", "Innova / Crysta", "Tempo Traveller", "Bus"].map((t) => <option key={t}>{t}</option>)}
                  </Select>
                </Field>
                <Field label="Number of Days" id="q-vehicle-days">
                  <Input id="q-vehicle-days" type="number" min="0" value={data.vehicleDays} onChange={(e) => update("vehicleDays", e.target.value)} />
                </Field>
              </div>
              <Field label="Vehicle Cost" id="q-vehicle-cost">
                <Input id="q-vehicle-cost" type="number" prefix="₹" min="0" value={data.vehicleCost} onChange={(e) => update("vehicleCost", Number(e.target.value))} />
              </Field>
            </FormSection>

            <FormSection title="Sightseeing">
              <Field label="Sightseeing Details" id="q-sightseeing-details">
                <Textarea id="q-sightseeing-details" rows={3} value={data.sightseeingDetails} onChange={(e) => update("sightseeingDetails", e.target.value)} placeholder="e.g. Gulmarg, Pahalgam, Sonmarg full-day tours" />
              </Field>
              <Field label="Cost" id="q-sightseeing-cost">
                <Input id="q-sightseeing-cost" type="number" prefix="₹" min="0" value={data.sightseeingCost} onChange={(e) => update("sightseeingCost", Number(e.target.value))} />
              </Field>
            </FormSection>

            <FormSection title="Additional Services">
              <Field label="Activities" id="q-activities">
                <Input id="q-activities" value={data.activities} onChange={(e) => update("activities", e.target.value)} placeholder="e.g. Shikara ride, river rafting" />
              </Field>
              <Field label="Transfers" id="q-transfers">
                <Input id="q-transfers" value={data.transfers} onChange={(e) => update("transfers", e.target.value)} placeholder="e.g. Airport pickup & drop" />
              </Field>
              <Field label="Other Charges" id="q-other-charges">
                <Input id="q-other-charges" type="number" prefix="₹" min="0" value={data.otherCharges} onChange={(e) => update("otherCharges", Number(e.target.value))} />
              </Field>
            </FormSection>
          </div>

          <aside className="quote-form__pricing">
            <div className="card pricing-summary">
              <h3>Pricing</h3>
              <Field label="Cost Price" id="q-cost-price" hint="Auto-filled from line items — edit if needed.">
                <Input id="q-cost-price" type="number" prefix="₹" value={data.costPrice} onChange={(e) => update("costPrice", Number(e.target.value))} />
              </Field>
              <Field label="Markup Percentage" id="q-markup">
                <Input id="q-markup" type="number" prefix="%" min="0" max="100" value={data.markup} onChange={(e) => update("markup", Number(e.target.value))} />
              </Field>
              <div className="pricing-summary__row">
                <span>Line items total</span>
                <span className="nums">{formatINR(computedCost)}</span>
              </div>
              <div className="pricing-summary__row pricing-summary__row--total">
                <span>Selling Price</span>
                <span className="nums">{formatINR(sellingPrice)}</span>
              </div>
              <div className="quote-form__actions">
                <Button type="submit">Generate Quotation</Button>
                <Button type="button" variant="secondary" onClick={handleSaveDraft}>Save Draft</Button>
                <Button type="button" variant="ghost" onClick={handleReset}>Reset</Button>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}

function FormSection({ title, children }) {
  return (
    <div className="card form-section">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function QuotationPreview({ data, sellingPrice, onEdit, onNotify, onSave }) {
  return (
    <section className="section tool-page">
      <div className="container">
        <div className="section-head section-head--left">
          <span className="eyebrow">Preview</span>
          <h1>Quotation Preview</h1>
        </div>
        <div className="quotation-doc quotation-doc--full">
          <div className="quotation-doc__header">
            <div>
              <strong>{data.agencyName || "Your Agency"}</strong>
              <span>{data.agencyAddress}</span>
              <span>{data.agencyPhone} {data.agencyEmail && `· ${data.agencyEmail}`}</span>
              {data.gstin && <span>GSTIN: {data.gstin}</span>}
            </div>
            <div className="stamp stamp--sm" aria-hidden="true"><span>QUOTE</span></div>
          </div>

          <dl className="quotation-doc__grid">
            <div><dt>Customer</dt><dd>{data.customerName || "—"}</dd></div>
            <div><dt>Destination</dt><dd>{data.destination || "—"}</dd></div>
            <div><dt>Travel Dates</dt><dd>{data.travelDate || "To be confirmed"}</dd></div>
            <div><dt>Duration</dt><dd>{data.nights}N / {data.days}D</dd></div>
            <div><dt>Travellers</dt><dd>{data.adults} Adults{Number(data.children) ? `, ${data.children} Children` : ""}</dd></div>
            <div><dt>Trip Type</dt><dd>{data.tripType}</dd></div>
            <div><dt>Hotel</dt><dd>{data.hotelName || "—"} ({data.roomCategory}, {data.mealPlan})</dd></div>
            <div><dt>Transport</dt><dd>{data.vehicleType}, {data.vehicleDays} days</dd></div>
            <div><dt>Sightseeing</dt><dd>{data.sightseeingDetails || "—"}</dd></div>
            {data.activities && <div><dt>Activities</dt><dd>{data.activities}</dd></div>}
            {data.transfers && <div><dt>Transfers</dt><dd>{data.transfers}</dd></div>}
          </dl>

          <div className="quotation-doc__total">
            <span>Total Package Price</span>
            <span className="nums">{formatINR(sellingPrice)}</span>
          </div>
          <p className="quotation-doc__terms">Terms &amp; Conditions: 30% advance required to confirm booking, balance due 7 days before travel. Prices subject to availability and may vary with hotel category or season.</p>

          <div className="quotation-doc__actions">
            <Button variant="secondary" icon={<Icon name="edit" size={16} />} onClick={onEdit}>Edit</Button>
            <Button variant="secondary" icon={<Icon name="download" size={16} />} onClick={() => onNotify("PDF export will be connected in Phase 2.")}>Download PDF</Button>
            <Button variant="secondary" icon={<Icon name="share" size={16} />} onClick={() => onNotify("WhatsApp sharing will be connected in Phase 2.")}>Share on WhatsApp</Button>
            <Button icon={<Icon name="check" size={16} />} onClick={onSave}>Save Quotation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
