import React from 'react';
import ContactForm from '../../components/ContactForm';
import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';

class Contact {
    render () {
        return (
            <div className="page contact">
                <CustomNavbar />
                <ContactForm />
                <Footer />
            </div>
        );
    }
}

export default Contact;