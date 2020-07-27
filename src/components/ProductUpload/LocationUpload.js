import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import styled from 'styled-components';
// import { SearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

class LocationUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
            lat: 44.0592,
            lng: -79.4613,
            zoom: 13,
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];

        return (
            <StyledLocationUpload>
                <Formik>
                    <Form>
                        <h3>3. Location</h3>
                        <Field
                            type='text'
                            placeholder='Postal Code'
                            name='title'
                            className='input location-input'
                            onChange={this.handleChange}
                        />
                    </Form>
                </Formik>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
            </StyledLocationUpload>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(LocationUpload);

const StyledLocationUpload = styled.div`
    .leaflet-container {
        width: 400px;
        height: 400px;
    }
`;