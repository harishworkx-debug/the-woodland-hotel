import { createFileRoute } from "@tanstack/react-router";
import { LocationLandingPage, type LocationPageData } from "../components/site/LocationLandingPage";
import chail from "../assets/Chail.jpg";
import { pageHead } from "../lib/seo";

const data: LocationPageData = {
  title: "Best Hotel Near Chail | The Woodland Kandaghat",
  metaTitle: "Best Hotel Near Chail | The Woodland Kandaghat",
  description: "Looking for the best hotel near Chail? Stay at The Woodland Kandaghat on NH 5 with comfortable rooms, dining, parking and easy access to Chail and Shimla.",
  path: "/hotel-in-chail",
  image: chail,
  eyebrow: "Stay near Chail",
  introTitle: "A comfortable hotel base for Chail trips",
  intro: "The Woodland Kandaghat is a practical stay for travelers planning a Chail visit while also wanting convenient road access toward Shimla and Solan. The hotel offers comfortable rooms, mountain surroundings, in-house dining and on-site parking at Silhari on NH 5.",
  locationTitle: "Why choose a hotel near Chail in Kandaghat",
  locationCopy: "Kandaghat gives road travelers a quieter place to stay while they explore the forested Chail hills. The route, weather and traffic can affect travel time, so our team can help guests plan a realistic day itinerary before setting out.",
  journeyTitle: "Plan a Chail and Shimla itinerary",
  journeyCopy: "Combine a Chail day with local stops around Kandaghat, Sadhupul, Karol Tibba or Solan. Travelers continuing toward Shimla can return to the hotel for a relaxed evening and convenient dining.",
  nearbyTitle: "Nearby places for your stay",
  nearbyCopy: "Chail, Sadhupul, Karol Tibba, Kuthar Fort, Mohan Shakti National Heritage Park and Shimla are useful additions to a Himachal trip from this area.",
  highlights: [
    { title: "Road-trip friendly", copy: "The NH 5 location is convenient for travelers arriving by car or taxi from the Kalka-Shimla route." },
    { title: "Rooms for different stays", copy: "Choose from comfortable room categories for couples, families and short road-trip breaks." },
    { title: "Dine at the hotel", copy: "Freshly prepared food is available in-house, making evenings easier after a day around the hills." },
  ],
  faqs: [
    { question: "Is The Woodland Kandaghat a hotel near Chail?", answer: "Yes. It is located in Kandaghat on NH 5 and can be used as a comfortable base for travelers visiting Chail. Travel time depends on traffic, weather and road conditions." },
    { question: "What rooms are available near Chail?", answer: "The hotel offers Deluxe and Super Deluxe room categories with modern essentials and scenic surroundings. See the rooms page for details." },
    { question: "Does the hotel have parking and dining?", answer: "Yes. On-site parking and an in-house restaurant are available for guests." },
    { question: "How do I book a stay near Chail?", answer: "Call +91 94180 21100 or use the contact page to send your dates and room enquiry." },
  ],
};

export const Route = createFileRoute("/hotel-in-chail")({
  head: () => pageHead({
    title: data.metaTitle,
    description: data.description,
    path: data.path,
    image: data.image,
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Hotel Near Chail", path: data.path }],
    faq: data.faqs,
  }),
  component: () => <LocationLandingPage data={data} />,
});
