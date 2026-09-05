import { createFileRoute } from "@tanstack/react-router";
import { LocationLandingPage, type LocationPageData } from "../components/site/LocationLandingPage";
import garden from "../assets/garden.jpg";
import { pageHead } from "../lib/seo";

const data: LocationPageData = {
  title: "Best Hotel Near Solan | The Woodland Kandaghat",
  metaTitle: "Best Hotel Near Solan | The Woodland Kandaghat",
  description: "Find a comfortable hotel near Solan at The Woodland Kandaghat, with NH 5 access, mountain surroundings, dining, parking and rooms for family stays.",
  path: "/hotel-in-solan",
  image: garden,
  eyebrow: "Stay near Solan",
  introTitle: "A mountain hotel base for Solan district",
  intro: "The Woodland Kandaghat offers a comfortable stay for travelers exploring Solan and the surrounding Himachal hills. Its Silhari, NH 5 location provides access toward Solan, Shimla, Chail and Sadhupul, with rooms, dining and parking at the property.",
  locationTitle: "A useful hotel option near Solan",
  locationCopy: "Kandaghat sits within Solan district and gives travelers a scenic setting between key hill destinations. It suits families, couples, road-trip guests and visitors looking for a practical base rather than a crowded city stay.",
  journeyTitle: "Explore Solan and nearby hills",
  journeyCopy: "Build a local itinerary around Solan, Karol Tibba, Kuthar Fort, Mohan Shakti National Heritage Park and nearby Kandaghat destinations. Ask for current route guidance before setting out.",
  nearbyTitle: "Comfort for a district-wide itinerary",
  nearbyCopy: "The hotel's location helps travelers combine Solan district sightseeing with Chail, Sadhupul and Shimla hill visits.",
  highlights: [
    { title: "Solan district access", copy: "Stay in Kandaghat while keeping Solan and nearby attractions part of your travel plan." },
    { title: "Suitable for families", copy: "Comfortable rooms, dining and a relaxed setting support short breaks and longer family stays." },
    { title: "Easy travel planning", copy: "Call the hotel team for help with directions, room availability and your itinerary." },
  ],
  faqs: [
    { question: "Is The Woodland Kandaghat near Solan?", answer: "Yes. The hotel is in Kandaghat, Solan district, at Silhari on NH 5. Travel time depends on the route, traffic and weather." },
    { question: "What facilities are available?", answer: "The property offers comfortable rooms, an in-house restaurant, scenic surroundings and on-site parking." },
    { question: "Can families stay at the hotel?", answer: "Yes. The hotel has a relaxed setting and room options suited to family stays. Contact the team for your specific group needs." },
    { question: "How can I reserve a room?", answer: "Call +91 94180 21100 or use the contact page to send an enquiry." },
  ],
};

export const Route = createFileRoute("/hotel-in-solan")({
  head: () => pageHead({
    title: data.metaTitle,
    description: data.description,
    path: data.path,
    image: data.image,
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Hotel Near Solan", path: data.path }],
    faq: data.faqs,
  }),
  component: () => <LocationLandingPage data={data} />,
});
