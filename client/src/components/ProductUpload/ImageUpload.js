import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storage, database } from '../Firebase';
import placeholder from '../../assets/placeholder.png';

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
            this.setState({ image: files[0] }, this.handleUpload)
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
            <div className='mb-3'>
                <h5 htmlFor='formFile' className='form-label'>2. Media</h5>
                <input className='form-control' id='formFile' type='file' onChange={this.handleChange} required></input>
                <div>
                    <progress value={progress} max='100' />
                </div>
                <div>
                    {url === '' ? (
                        <div>
                            <img src={placeholder} className='img-thumbnail' alt={'responsive'} width='500' height='400'></img>
                        </div>
                    ) : (
                        <div>
                            <img src={url} className='img-thumbnail' alt={'poop]'} width='500' height='400'></img>
                        </div>)}
                </div>
                <hr />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(ImageUpload);