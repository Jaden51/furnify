import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Map, TileLayer } from 'react-leaflet';
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch'

class LocationUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {
                location: ''
            },
            lat: 44.0592,
            lng: -79.4613,
            zoom: 13,
        }
    }

    handleChange = ({ target }) => {
        const { fields } = this.state;
        fields[target.name] = target.value;
        this.setState({ fields });
        this.props.toProductUpload(this.state.fields);
    }

    render() {
        const prov = OpenStreetMapProvider();
        const GeoSearchControlElement = SearchControl;

        return (
            <div>
 <Formik>
                    <Form>
                        <h3>3. Location</h3>
                        <Field
                            type='text'
                            placeholder='Address'
                            name='location'
                            className='input address-input'
                            onChange={this.handleChange}
                        />
                    </Form>
                </Formik>
                <Map
                    center={[42.09618442380296, -71.5045166015625]}
                    zoom={2}
                    zoomControl={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                    <GeoSearchControlElement
                        provider={prov}
                        showMarker={true}
                        showPopup={false}
                        popupFormat={({ query, result }) => result.label}
                        maxMarkers={3}
                        retainZoomLevel={false}
                        animateZoom={true}
                        autoClose={false}
                        searchLabel={"Enter address, please"}
                        keepResult={true}
                    />
                </Map>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(LocationUpload);