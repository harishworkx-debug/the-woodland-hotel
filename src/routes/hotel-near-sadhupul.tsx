import { createFileRoute } from "@tanstack/react-router";
import { LocationLandingPage, type LocationPageData } from "../components/site/LocationLandingPage";
import sadhupul from "../assets/Sadhupul.jpg";
import { pageHead } from "../lib/seo";

const data: LocationPageData = {
  title: "Best Hotel Near Sadhupul | The Woodland Kandaghat",
  metaTitle: "Best Hotel Near Sadhupul | The Woodland Kandaghat",
  description: "Searching for the best hotel near Sadhupul? Stay at The Woodland Kandaghat in Kandaghat with comfortable rooms, dining, parking and mountain access.",
  path: "/hotel-near-sadhupul",
  image: sadhupul,
  eyebrow: "Stay near Sadhupul",
  introTitle: "A convenient stay for a Sadhupul outing",
  intro: "The Woodland Kandaghat is an accommodation option for guests visiting Sadhupul and exploring the surrounding Solan and Shimla hills. Located at Silhari on NH 5, the hotel combines comfortable rooms, mountain views, on-site parking and convenient dining.",
  locationTitle: "A calmer base near Sadhupul",
  locationCopy: "Sadhupul is known for its riverside setting and relaxed cafés. After a day out, Kandaghat offers travelers a quieter place to return to, with practical road access and hotel facilities for families and couples.",
  journeyTitle: "Make Sadhupul part of a local day",
  journeyCopy: "Plan a flexible outing to Sadhupul and combine it with Chail, Karol Tibba or other nearby destinations. Ask the hotel team for current route guidance because mountain travel times change with conditions.",
  nearbyTitle: "Explore more than one destination",
  nearbyCopy: "Sadhupul, Chail, Karol Tibba, Kuthar Fort and Shimla can be included in a wider itinerary from Kandaghat.",
  highlights: [
    { title: "Family-friendly setting", copy: "Comfortable rooms, dining and parking make the hotel useful for families planning a local sightseeing day." },
    { title: "Mountain route access", copy: "Stay on the NH 5 corridor while keeping Sadhupul and nearby hill destinations in reach." },
    { title: "A relaxed evening", copy: "Return from the riverside and enjoy a quieter evening with food available at the property." },
  ],
  faqs: [
    { question: "How far is the hotel from Sadhupul?", answer: "Sadhupul is approximately 8–9 km from Kandaghat. Actual travel time can vary with road conditions and traffic." },
    { question: "Is this hotel suitable for a family Sadhupul trip?", answer: "The Woodland Kandaghat offers comfortable rooms, dining and on-site parking, making it suitable for families planning a local outing." },
    { question: "Can I get food at the hotel?", answer: "Yes. The in-house restaurant provides freshly prepared food for hotel guests and travelers." },
    { question: "How can I contact the hotel?", answer: "Call +91 94180 21100 or send an enquiry through the contact page." },
  ],
};

export const Route = createFileRoute("/hotel-near-sadhupul")({
  head: () => pageHead({
    title: data.metaTitle,
    description: data.description,
    path: data.path,
    image: data.image,
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Hotel Near Sadhupul", path: data.path }],
    faq: data.faqs,
  }),
  component: () => <LocationLandingPage data={data} />,
});
