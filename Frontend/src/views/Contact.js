import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

function Contact({id}) {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fetchedData,setFetchedData] = useState([]);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/about`
        );
        const { data } = await response.json();
        setFetchedData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <section id={id} className="py-5 vh-100">
      <div className="container">
        <h1 className="mb-4">Contact</h1>
        <div className="row">
          <div className="col-md-6">
            <form className="needs-validation" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="40a26cc4-87a3-4645-b54f-ede78f98d067" />
              <div className="mb-3">
                <label htmlFor="sender_email" className="form-label float-start">Email</label>
                <input type="email" className="form-control" id="sender_email" name='email' placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label float-start">Subject</label>
                <input type="text" className="form-control" id="subject" name='subject' placeholder="Enter subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                <div className="invalid-feedback">
                  Please enter a subject.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label float-start">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" placeholder="Enter message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <div className="invalid-feedback">
                  Please enter a message.
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-6 mt-4 mt-md-0 mb-5">
            <div className="text-center text-md-end">
              <h3 className="mb-4">Email</h3>
              <a href="mailto:karishmapatel273@gmail.com" className="font-weight-bold text-blue-700 d-block text-decoration-none"><FontAwesomeIcon icon={faEnvelope} />&nbsp;suyashkulkarni43@gmail.com</a>
              <h3 className="mt-4 mb-4">Address</h3>
              <p className="font-weight-bold text-blue-700 d-block">
                <FontAwesomeIcon icon={faMapLocationDot} className="text-danger"/> 42 leadership dr., Brampton <br />
                Canada, On
              </p>
              <h3 className="mt-4 mb-4">Social</h3>
              <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-md-end">
                {fetchedData.map((el, index) => (
                  <li key={index} className="mx-4 my-4">
                    <a href={el.link} className="d-block text-black">
                      <img src={el.iconUrl} alt="" className="img-fluid hover-scale-125" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;