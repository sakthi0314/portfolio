import React, { useRef, useState } from "react";
import splash from "../../assets/images/splash-three.svg";
import donut from "../../assets/images/donut.png";
import "./contact.scss";
import { db } from "../../config/firebase";
import PulseLoader from "react-spinners/PulseLoader";
import Notification from "../../components/notification/notification";
import { toast } from "react-toastify";

function Contact() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const creds = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    if (
      creds.fullName !== "" &&
      creds.message !== "" &&
      creds.email !== "" &&
      creds.phone !== ""
    ) {
      db.collection("contacts")
        .add(creds)
        .then(() => {
          setLoading(false);
          const notify = () =>
            toast.dark("Thank you contact me, As soon I will catch you", {
              style: {
                fontSize: 16,
              },
            });
          notify();
        });
    } else {
      setLoading(false);
      const notify = () =>
        toast.error("Please fill all the inputs", {
          style: {
            fontSize: 16,
          },
        });
      notify();
    }

    fullNameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <div id="contact" className="contact">
      <div
        className="contact__spash"
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-delay="200"
        data-sel-easinng="ease-out-bounce"
      >
        <img src={splash} alt="splash" />
      </div>
      <div
        className="contact__donut"
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-delay="800"
        data-sel-easinng="ease-out-bounce"
      >
        <img src={donut} alt="donut" />
      </div>

      <div className="container">
        <div
          className="contact__text"
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="1000"
          data-sal-easing="ease-out-bounce"
        >
          <h1>Let's get in touch today!</h1>
        </div>
        <div
          className="contact__form"
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="1000"
          data-sal-easing="ease-out-bounce"
        >
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__wrapper">
              <div className="form__wrapper--box">
                <input
                  type="text"
                  placeholder="Full name"
                  ref={fullNameRef}
                  name="fullname"
                />
              </div>
              <div className="form__wrapper--box">
                <input
                  type="email"
                  placeholder="Email address"
                  ref={emailRef}
                  name="email"
                />
              </div>
            </div>

            <div className="form__wrapper">
              <div className="form__wrapper--box">
                <input
                  type="text"
                  placeholder="Phone number"
                  ref={phoneRef}
                  name="phone"
                />
              </div>
              <div className="form__wrapper--box">
                <input
                  type="text"
                  placeholder="Subject"
                  ref={subjectRef}
                  name="subject"
                />
              </div>
            </div>

            <div className="form__wrapper">
              <div className="form__wrapper--box">
                <textarea
                  type="text"
                  placeholder="How can I help you"
                  ref={messageRef}
                  name="message"
                />
              </div>
            </div>

            <div className="form__wrapper--btn">
              <button className="primary">
                {!loading ? (
                  "Submit"
                ) : (
                  <PulseLoader
                    color={"hsl(266, 100%, 50%)"}
                    loading={true}
                    size={12}
                  />
                )}
              </button>
            </div>
          </form>
        </div>

        <Notification />
      </div>
    </div>
  );
}

export default Contact;
