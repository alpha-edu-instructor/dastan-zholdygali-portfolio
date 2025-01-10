import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Input from "@components/shared/Input";
import Submit from "@components/shared/Submit";
import SocialMediaLink from "@components/shared/SocialMediaLink";
import axiosInstance from "@services/axios";

const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [response, setResponse] = useState<{ state: number; message: string }>({
    state: 0,
    message: ""
  });

  function validateForm() {
    const newErrors: { [key: string]: string | null } = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!email.trim()) {
      newErrors.email = "E-mail is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "E-mail is not valid.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmitContactForm(e: React.FormEvent) {
    e.preventDefault();

    if (validateForm()) {
      try {
        setResponse({
          state: 1,
          message: "Loading..."
        });
        await axiosInstance.post("/send", {
          fullName,
          email,
          subject,
          message
        });
        setResponse({
          state: 2,
          message: "Email sent successfully"
        });
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } catch (error) {
        console.error("Error sending email:", error);
        setResponse({
          state: 3,
          message: "Failed to send email. Please try again later."
        });
      } finally {
        setErrors({});
      }
    }
  }

  return (
    <div className="contact">
      <div className="contact-part">
        <h1 className="page-title">Get in touch</h1>
        <p className="page-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          incidunt soluta eius quibusdam tempora officiis illo, itaque, nostrum
          nihil obcaecati assumenda. Modi distinctio iure temporibus ratione
          nesciunt magnam quae consequatur!
        </p>
        <div className="contact-links">
          <SocialMediaLink socialMedia="linkedin" hasBackground={false} />
          <SocialMediaLink socialMedia="twitter" hasBackground={false} />
        </div>
      </div>

      <div className="contact-part">
        <form className="contact-form" onSubmit={handleSubmitContactForm}>
          <Input
            title="Full Name"
            name="fullName"
            value={fullName}
            setValue={setFullName}
            error={errors.fullName}
          />
          <Input
            title="E-mail"
            name="email"
            value={email}
            setValue={setEmail}
            error={errors.email}
          />
          <Input
            title="Subject"
            name="subject"
            isRequired={false}
            value={subject}
            setValue={setSubject}
          />
          <Input
            title="Message"
            name="message"
            isTextarea={true}
            value={message}
            setValue={setMessage}
            error={errors.message}
          />
          {response.state !== 0 && (
            <div className="contact-form__response">
              {response.state === 1 && (
                <span className="contact-form__loader"></span>
              )}
              {response.state === 2 && <FiCheckCircle />}
              {response.message}
            </div>
          )}
          <div>
            <Submit title="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
