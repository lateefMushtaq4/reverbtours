import { useState } from "react";
import emailjs from "emailjs-com";
import { EMAILJS_CONFIG } from "../config";

export default function BookingForm({ tour }) {
  const [status, setStatus] = useState(""); // "loading" | "success" | "error"
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        e.target,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setMessage("✅ Your booking request was sent successfully! We’ll contact you soon.");
        e.target.reset();
      })
      .catch((err) => {
        setStatus("error");
        setMessage("❌ Failed to send booking. Please try again later.");
        console.error("EmailJS error:", err);
      });
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Book {tour.name}</h3>

      <input type="hidden" name="tour" value={tour.name} />
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="tel" name="phone" placeholder="Phone Number" required />
      <input type="date" name="date" required />
      <textarea name="message" placeholder="Your Message (optional)" rows="4" />

      <button type="submit" className="btn" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Booking"}
      </button>

      {status === "success" && <p className="form-success">{message}</p>}
      {status === "error" && <p className="form-error">{message}</p>}
    </form>
  );
}
