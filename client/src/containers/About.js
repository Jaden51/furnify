import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='container' style={{marginBottom: '7rem'}}>
                <div>
                    <h2 className='h1-responsive font-weight-bold text-center my-4'>
                        About Us
                    </h2>
                    <p>
                        We are an online furniture refurbishing store which allows consumers to sell us their old furniture. We take that old furniture, refurbish
                        it and than sell it.
                    </p>
                    <p>
                        You can upload your old furniture to our database. Based on the images, we decide weather to buy it or not. We than post the newly refurbished
                        furniture on our site for other users to buy.
                    </p>
                    <p>
                        We are currently a small team based in Newmarket, Ontario.
                        Please feel free to contact us about anything. We want to hear from you weather it be feedback, a feature you wish to be added,
                        a business who wants to work with us or a customer with furniture to sell.
                    </p>
                </div>
                <div></div>
            </div>
        )
    }
}

export default About;