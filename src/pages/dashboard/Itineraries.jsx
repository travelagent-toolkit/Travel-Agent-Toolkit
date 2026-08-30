import { Card } from "../../components/Cards.jsx";
import Button from "../../components/Button.jsx";
import Icon from "../../components/Icon.jsx";
import usePageMeta from "../../hooks/usePageMeta.js";

const SAVED = [
  { id: "IT-204", destination: "Kashmir", days: 6, type: "Honeymoon", updated: "2 days ago" },
  { id: "IT-198", destination: "Ladakh", days: 7, type: "Adventure", updated: "5 days ago" },
  { id: "IT-190", destination: "Sikkim", days: 5, type: "Family", updated: "1 week ago" },
];

export default function Itineraries() {
  usePageMeta("Itineraries", "Your saved travel itineraries.");
  return (
    <div className="page-stack">
      <div className="page-head">
        <div>
          <h1>Itineraries</h1>
          <p>Itineraries you've generated and saved.</p>
        </div>
        <Button to="/tools/itinerary" icon={<Icon name="plus" size={16} />}>Create Itinerary</Button>
      </div>

      <div className="customer-grid">
        {SAVED.map((it) => (
          <Card className="customer-card" key={it.id}>
            <div className="customer-card__head">
              <div className="avatar" aria-hidden="true"><Icon name="map" size={16} /></div>
              <div>
                <h4>{it.destination}</h4>
                <span>{it.days} days · {it.type}</span>
              </div>
            </div>
            <ul className="customer-card__meta">
              <li>{it.id}</li>
              <li>Updated {it.updated}</li>
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
