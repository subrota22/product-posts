import { Button, TextField } from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import Head from 'next/head';
import React from 'react';
const contact = () => {
    return (
        <>
            <Head><title> Contact page </title></Head>
                <h2 style={{fontSize:"48px", fontWeight:"bolder", margin:"2px 14px", color:"white", textAlign:"center"}}> Contact us </h2>
                <form action="https://formsubmit.co/itinfobd24@gmail.com"  className='contact_form' method="post">
                    <TextField fullWidth label="Full name"  name="full-name"  style={{margin:"8px 0px"}} required/>
                    <TextField fullWidth label="Email"  name="email"  style={{margin:"8px 0px"}} required/>
                    <Textarea minRows={6} style={{margin:"8px 0px"}} placeholder='Enter your message here...'  required />
                    <Button  type='submit' style={{backgroundColor:"green", color:"white", width:"100%", margin:"5px 0"}}>Send Message</Button>
                </form>
              {/* Google map */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67517.45041236593!2d10.283791066021571!3d51.03217785886148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sbd!4v1687988446433!5m2!1sen!2sbd" 
             data-aos="zoom-in"
             style={{width:"98%", height:"410px", borderRadius:"12px", margin:"25px 12px"}} 
              allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </>
    );
};

export default contact;