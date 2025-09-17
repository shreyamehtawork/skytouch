import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./WaitlistPopup.css"; // custom styles

function WaitlistPopup({ show, onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subscribe: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wbblf8b",
        "template_2zu7wl8",
        {
          name: formData.name,
          email: formData.email,
          signup_date: new Date().toLocaleDateString(),
          newsletter_subscribe: formData.subscribe ? "Yes" : "No", // Pass the subscription status
        },
        "ujOdlGoJ4RBbGcoqC"
      )
      .then(
        () => {
          alert("🎉 You're on the Skytouch waitlist!");
          setFormData({ email: "", name: "", subscribe: false });
          onClose();
        },
        (err) => {
          console.error(err);
          alert("❌ Something went wrong. Check console for details.");
        }
      )
      .finally(() => setLoading(false));
  };

  if (!show) return null;

  return (
    <div className="waitlist-overlay">
      <div className="waitlist-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-title">SIGN UP NOW!</h2>
        <p className="popup-subtitle">
          And be the first to know when we go live.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name here *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email here *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            <label htmlFor="subscribe">
              Yes, subscribe me to your newsletter.
            </label>
          </div>
          <button type="submit" className="subscribe-btn" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default WaitlistPopup;
