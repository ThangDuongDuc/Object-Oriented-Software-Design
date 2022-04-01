import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../../components/header';
import Map from '../../../../components/Map'
import NewsLetter from '../../../../components/NewsLetter';
import Footer from '../../../../components/Footer';
import Banner from '../../../../components/Banner';
import ContentContact from '../../components/ContentContact'

Contact.propTypes = {

};

function Contact(props) {
    window.scrollTo(0, 0)
    return (
        <>
            <Banner arrHeading={['Contact']} />
            <ContentContact />
        </>
    );
}

export default Contact;