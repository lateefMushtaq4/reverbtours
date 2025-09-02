import emailjs from "emailjs-com";
import { EMAILJS_CONFIG } from "../config";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
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
        setMessage("✅ Message sent successfully! We’ll reply soon.");
        e.target.reset();
      })
      .catch((err) => {
        setStatus("error");
        setMessage("❌ Failed to send. Please try again.");
        console.error(err);
      });
  }

  return (
    <section className="section">
      <div className="container">
     <h2>Contact Us</h2>
<p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 20px" }}>
  Have questions about tours, pricing, or availability?  
  Fill out the form below and we’ll get back to you quickly.
</p>


       <form className="contact-form" onSubmit={sendEmail}>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <input type="tel" name="phone" placeholder="Phone Number" />

  {/* Hidden fields so template never breaks */}
  <input type="hidden" name="tour" value="N/A" />
  <input type="hidden" name="date" value="N/A" />

  <textarea name="message" placeholder="Your Message" rows="5" required />

  <button type="submit" disabled={status === "loading"}>
    {status === "loading" ? "Sending..." : "Send Message"}
  </button>
</form>

      </div>
    </section>
  );
}
