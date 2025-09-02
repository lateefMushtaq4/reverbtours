import tours from "../data/tours";
import TourCard from "../components/TourCard";

export default function Destinations() {
  return (
    <section className="section">
      <h2>All Tours</h2>
      <div className="tour-grid">
        {tours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
