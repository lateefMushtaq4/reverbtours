import { useParams } from "react-router-dom";
import tours from "../data/tours";
import BookingForm from "../components/BookingForm";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.find(t => t.id === parseInt(id));

  if (!tour) return <h2>Tour not found</h2>;

  return (
    <div>
      {/* Hero Banner */}
      <div
        style={{
          background: `url(${tour.img}) no-repeat center center/cover`,
          height: "50vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          {tour.name}
        </div>
      </div>

      {/* Content Section */}
      <section className="section container tour-details">
        <motion.div
          className="tour-info-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>{tour.name}</h2>
          <p>{tour.description}</p>
          <h4>Highlights</h4>
          <ul>
            {tour.highlights.map((h, i) => (
              <li key={i}>
                <FaCheckCircle color="green" /> {h}
              </li>
            ))}
          </ul>
          <p><b>Duration:</b> {tour.duration}</p>
          <p><b>Rating:</b> ⭐ {tour.rating}</p>
          <p><b>Price:</b> ₹{tour.price} per person</p>
        </motion.div>

        <motion.div
          className="tour-booking-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BookingForm tour={tour} />
        </motion.div>
      </section>
    </div>
  );
}
