/**
 * Function to handle the form submission and send the email using email.js
 */
const sendEmail = function (form, emailParams) {
    emailjs.init('8u_FhiR9-z_goSvQI'); // Replace 'YOUR_USER_ID' with your actual email.js user ID
  
    return emailjs.send('service_n86fsfk', 'template_vkxm3no', emailParams);
  };
  