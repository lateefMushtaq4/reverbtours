import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TourCard({ tour, index }) {
  return (
    <motion.div
      className="tour-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
  <img src={tour.img} alt={tour.name} loading="lazy" />

      <div className="tour-info">
        <h3>{tour.name}</h3>
        <p>{tour.duration}</p>
        <p>⭐ {tour.rating}</p>
    <p><b>₹{tour.price}</b> per person</p>
        <Link to={`/tours/${tour.id}`}>
          <button className="btn">View Details</button>
        </Link>
      </div>
    </motion.div>
  );
}
