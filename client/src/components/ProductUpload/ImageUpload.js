import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storage, database } from '../Firebase';
import { Formik } from 'formik';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
        };
    }

    handleChange = e => {
        const { files } = e.target;

        if (files[0]) {
            this.setState({ image: files[0] })
        }
    }

    handleUpload = () => {
        const { name } = this.state.image;

        const uploadTask = storage
            .ref(`images/${name}`)
            .put(this.state.image);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({ progress });
        },
            error => {
                console.log(error)
            },
            () => {
                storage.ref('images')
                    .child(name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ url })
                        database.ref('furniture').push({
                            image: url
                        })
                        this.props.toProductUpload(url);
                    });
            });
    }

    render() {
        const { url, progress } = this.state;

        return (
            <Formik initialValues={this.state}>
                <div>
                    <h3>2. Add Media</h3>
                    <input type='file' onChange={this.handleChange}></input>
                    <button onClick={this.handleUpload}>Upload</button>
                    <div>
                        <progress value={progress} max='100' />
                    </div>
                    <div>
                        <img src={url} alt='upload' className='img' />
                    </div>
                </div>
            </Formik>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(ImageUpload);