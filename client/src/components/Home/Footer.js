import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center text-muted' style={{position: 'relative', bottom: 0, width: '100%'}}>
            <section className='d-flex justify-content-center justify-content-lg-between p-4'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us</span>
                </div>
                <div>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer;