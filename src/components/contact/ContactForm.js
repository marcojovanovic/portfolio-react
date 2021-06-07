import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderFirestore } from '../../firebase/config';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('Ime  mora imati bar 3 slovna karaktera')
    .min(3),
  lastName: yup
    .string()
    .required('Ime  mora imati bar 3 slovna karaktera')
    .min(3),
  subject: yup
    .string()
    .required('Subject mora imati bar 3 slovna karaktera')
    .min(3),
  email: yup.string().required('Niste pravilno popunili email'),
  message: yup.string().required('Pravilno popunite polje messege'),
});

function ContactForm() {
  // Firebase contact

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // contact page notification

  const notify = () => toast('Primio sam poruku');

  // push contact information to firestore

  const pushToFirebase = async (data) => {
    await orderFirestore
      .collection('contacts')
      .add({
        ...data,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    notify()
    reset();
  };

  return (
    <form onSubmit={handleSubmit(pushToFirebase)} className="form">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="form-field">
            <input
              type="text"
              name="firstName"
              placeholder="Name"
              required
              {...register('firstName')}

              
            />
         
            
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="form-field">
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              required
              {...register('lastName')}
            />
             
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="form-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              {...register('email')}
            />
           
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="form-field">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              {...register('subject')}
            />
         
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-field">
            <textarea
              name="message"
              placeholder="Message"
              required
              {...register('message')}
            ></textarea>
            
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-submit">
            <button type="submit" className="template-btn-s3">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
