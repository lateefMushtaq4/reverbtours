export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Reverb Tours. All Rights Reserved.</p>
        <p>
          Made with ❤️ in Kashmir | Contact:{" "}
          <a href="mailto:lateefmushtaq4@gmail.com">
       Contact Us
          </a>
        </p>
      </div>
    </footer>
  );
}
