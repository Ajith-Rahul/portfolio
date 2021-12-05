import React from 'react';
import emailjs from 'emailjs-com';
import  "./contactme.css";
function contactme() {

  function sendEmail(e) {
    e.preventDefault();    

    emailjs.sendForm('service_rdsd6ya', 'template_vk7b9qf', e.target, 'user_2jUKRYGzcIQ2jZXPq67Lo')
      .then((result) => {
        console.log('success')
        window.location.reload()   
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
<div class="container">
    <form className="contact-form" onSubmit={sendEmail}>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" name="from_name" class="form-control" id="exampleInputName" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" name="from_email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Subject</label>
        <input type="text" name="from_subject" class="form-control" id="exampleInputSubject" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}

export default contactme;