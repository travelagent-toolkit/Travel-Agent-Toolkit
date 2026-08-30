export const stats = {
  quotationsThisMonth: 24,
  customers: 87,
  aiGenerations: 41,
  estimatedSales: 1284000,
};

export const recentQuotations = [
  { id: "TAT-1042", customer: "Rohan Mehta", destination: "Kashmir Package", date: "2026-08-24", amount: 68500, status: "Sent" },
  { id: "TAT-1041", customer: "Fatima Al Rashid", destination: "Dubai Holiday", date: "2026-08-22", amount: 145000, status: "Accepted" },
  { id: "TAT-1039", customer: "Aditi & Sameer", destination: "Kerala Family Tour", date: "2026-08-19", amount: 92000, status: "Draft" },
  { id: "TAT-1036", customer: "Karan Kapoor", destination: "Himachal Honeymoon", date: "2026-08-14", amount: 54000, status: "Expired" },
];

export const quotations = [
  ...recentQuotations,
  { id: "TAT-1033", customer: "Neha Joshi", destination: "Ladakh Bike Trip", date: "2026-08-10", amount: 76000, status: "Accepted" },
  { id: "TAT-1030", customer: "The Bansal Family", destination: "Sikkim Explorer", date: "2026-08-05", amount: 118000, status: "Sent" },
  { id: "TAT-1027", customer: "Vivek Rao", destination: "Nepal Trek", date: "2026-07-29", amount: 62000, status: "Draft" },
  { id: "TAT-1021", customer: "Priya Nair", destination: "Goa Weekend", date: "2026-07-20", amount: 34500, status: "Accepted" },
];

export const customers = [
  { id: 1, name: "Rohan Mehta", phone: "+91 98765 43210", email: "rohan.mehta@example.com", destination: "Kashmir", lastContact: "2026-08-24", status: "Active" },
  { id: 2, name: "Fatima Al Rashid", phone: "+971 50 123 4567", email: "fatima.ar@example.com", destination: "Dubai", lastContact: "2026-08-22", status: "Active" },
  { id: 3, name: "Aditi & Sameer", phone: "+91 91234 56789", email: "aditi.sameer@example.com", destination: "Kerala", lastContact: "2026-08-19", status: "Lead" },
  { id: 4, name: "Karan Kapoor", phone: "+91 99887 76655", email: "karan.k@example.com", destination: "Himachal", lastContact: "2026-08-14", status: "Inactive" },
  { id: 5, name: "Neha Joshi", phone: "+91 90909 80808", email: "neha.joshi@example.com", destination: "Ladakh", lastContact: "2026-08-10", status: "Active" },
  { id: 6, name: "The Bansal Family", phone: "+91 88990 01122", email: "bansal.family@example.com", destination: "Sikkim", lastContact: "2026-08-05", status: "Lead" },
];

export const tools = [
  {
    id: "quotation",
    name: "Quotation Generator",
    icon: "file-text",
    description: "Build a branded, itemised travel quotation with live pricing in minutes.",
    path: "/tools/quotation",
  },
  {
    id: "itinerary",
    name: "Itinerary Generator",
    icon: "map",
    description: "Turn trip details into a day-by-day itinerary your customer can read at a glance.",
    path: "/tools/itinerary",
  },
  {
    id: "calculator",
    name: "Package Cost Calculator",
    icon: "calculator",
    description: "Add up hotel, transport and sightseeing costs and set a clean margin instantly.",
    path: "/tools/calculator",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Message Generator",
    icon: "message-circle",
    description: "Ready-to-send messages for leads, follow-ups, payments and confirmations.",
    path: "/tools/whatsapp",
  },
  {
    id: "currency",
    name: "Currency Converter",
    icon: "repeat",
    description: "Quote confidently across currencies for your international travellers.",
    path: "/tools/currency",
  },
];

export const exchangeRates = {
  INR: 1,
  USD: 83.9,
  EUR: 91.2,
  AED: 22.85,
  GBP: 106.4,
  AUD: 55.3,
  CAD: 61.5,
  NPR: 0.625,
  THB: 2.34,
  SGD: 62.1,
};

export const whatsappTemplates = {
  "New Lead": "Hi {name}! 🙏 Thank you for reaching out to us about your {destination} trip. We'd love to help you plan it — could you share your travel dates and number of travellers so we can prepare the best package for you?",
  "Quotation Sent": "Hi {name}, your customised quotation for {destination} has been shared above. It includes stay, transport and sightseeing details. Do let us know if you'd like any changes — happy to adjust it for you!",
  "Follow-up": "Hi {name}, just checking in on the {destination} quotation we sent over. Would you like to go ahead, or shall we tweak anything to better fit your plans?",
  "Payment Reminder": "Hi {name}, a gentle reminder that the advance payment for your {destination} trip is pending. Kindly complete it at the earliest so we can confirm your bookings without any last-minute rush.",
  "Trip Confirmation": "Great news, {name}! Your {destination} trip is confirmed 🎉 We'll share the final itinerary and travel documents shortly. Reach out anytime if you have questions before departure.",
  "Thank You": "Thank you so much, {name}, for travelling with us! We hope your {destination} trip was memorable. We'd be grateful if you could share a quick review — and we're always here for your next adventure.",
};

export const sampleItinerary = [
  { day: 1, title: "Arrival", details: "Arrive and transfer to your hotel. Rest of the day at leisure to settle in and explore the local market in the evening." },
  { day: 2, title: "Local Sightseeing", details: "Full-day guided sightseeing covering the city's key attractions, with stops for photography and local cuisine." },
  { day: 3, title: "Destination Excursion", details: "Full-day excursion to a nearby scenic destination, including transport, an experienced local guide, and packed lunch." },
  { day: 4, title: "Leisure", details: "A relaxed day at leisure — optional add-on activities available, or simply unwind at the hotel." },
  { day: 5, title: "Departure", details: "Check out after breakfast and transfer to the airport / railway station for your onward journey." },
];
