import { motion } from "framer-motion";
import tours from "../data/tours";
import TourCard from "../components/TourCard";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../config";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
    <motion.h1
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Discover Kashmir
</motion.h1>

<motion.p
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  Handpicked tours & experiences in Paradise on Earth
</motion.p>

<motion.div
  className="hero-cta"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  <Link to="/destinations">
    <button className="btn">Explore Tours</button>
  </Link>
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I want to book a Kashmir tour.`}
    className="btn btn-whatsapp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp /> Book via WhatsApp
  </a>
</motion.div>

        </div>
      </section>

      <section className="section">
        <h2>Featured Tours</h2>
        <div className="tour-grid">
          {tours.map((tour, i) => (
            <TourCard key={tour.id} tour={tour} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
