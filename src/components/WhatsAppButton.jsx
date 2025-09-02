import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../config";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I want to book a Kashmir tour.`}
      className="whatsapp-main-cta"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp /> Book via WhatsApp
    </a>
  );
}
