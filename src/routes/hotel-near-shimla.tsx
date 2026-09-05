import { createFileRoute } from "@tanstack/react-router";
import { LocationLandingPage, type LocationPageData } from "../components/site/LocationLandingPage";
import terrace from "../assets/terrace-view.jpg";
import { pageHead } from "../lib/seo";

const data: LocationPageData = {
  title: "Best Hotel Near Shimla | The Woodland Kandaghat",
  metaTitle: "Best Hotel Near Shimla | The Woodland Kandaghat",
  description: "Looking for the best hotel near Shimla? Discover The Woodland Kandaghat on the Kalka-Shimla route with comfortable rooms, dining and mountain surroundings.",
  path: "/hotel-near-shimla",
  image: terrace,
  eyebrow: "Stay near Shimla",
  introTitle: "A practical alternative for a Shimla hill stay",
  intro: "The Woodland Kandaghat is located on NH 5 in the Kandaghat area of Solan district, giving travelers a mountain hotel base for Shimla trips. Guests can enjoy comfortable rooms, scenic surroundings, in-house dining and on-site parking away from the busiest parts of the city.",
  locationTitle: "Why stay near Shimla in Kandaghat",
  locationCopy: "Kandaghat is on the Kalka-Shimla route and works well for travelers who want to explore Shimla while staying in a quieter mountain setting. Route conditions and traffic affect travel time, so plan with flexibility.",
  journeyTitle: "Plan a Shimla day from Kandaghat",
  journeyCopy: "Visit The Ridge, Mall Road, Jakhoo Temple or Tara Devi Temple, then return to Kandaghat for a more relaxed evening. Chail, Sadhupul and Solan can also be included depending on your trip length.",
  nearbyTitle: "A useful base for the Shimla hills",
  nearbyCopy: "Use the hotel as a starting point for Shimla attractions, Chail, Sadhupul, Karol Tibba and local Solan district heritage sites.",
  highlights: [
    { title: "On the Kalka-Shimla route", copy: "A road-accessible location for travelers arriving toward Shimla from the plains or continuing through the hills." },
    { title: "Comfort without city noise", copy: "Enjoy a scenic mountain environment and comfortable rooms while keeping Shimla in your itinerary." },
    { title: "Dining and parking", copy: "On-site parking and an in-house restaurant make a sightseeing stay more convenient." },
  ],
  faqs: [
    { question: "Is The Woodland Kandaghat near Shimla?", answer: "The hotel is in Kandaghat on the Kalka-Shimla route and can be used as a base for Shimla visits. Travel time varies with traffic, weather and road conditions." },
    { question: "What can I visit in Shimla?", answer: "Popular stops include The Ridge, Mall Road, Jakhoo Temple and Tara Devi Temple. Plan according to your available time and route." },
    { question: "Is parking available near Shimla?", answer: "On-site parking is available at The Woodland Kandaghat." },
    { question: "How do I book a Shimla-area stay?", answer: "Call +91 94180 21100 or contact the hotel with your travel dates and room requirements." },
  ],
};

export const Route = createFileRoute("/hotel-near-shimla")({
  head: () => pageHead({
    title: data.metaTitle,
    description: data.description,
    path: data.path,
    image: data.image,
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Hotel Near Shimla", path: data.path }],
    faq: data.faqs,
  }),
  component: () => <LocationLandingPage data={data} />,
});
