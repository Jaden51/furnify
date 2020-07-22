import React, { Component } from 'react';
import styled from 'styled-components';
import { storage } from './Firebase';

class FurnitureUpload extends Component {
    state = { image: null, url: '', progess: 0 };

    handleChange = e => {
        if (e.target.files[0]) {
            this.setState({ image: e.target.files[0] })
        }
    }

    handleUpload = () => {
        const uploadTask = storage
            .ref(`images/${this.state.image.name}`)
            .put(this.state.image);

        uploadTask.on('state_changed', (snapshot) => {
            const progess = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({ progess });
        },
            error => {
                console.log(error)
            },
            () => {
                storage.ref('images')
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                        this.setState({ url })
                    });
            });
    }

    render() {
        return (
            <StyledFurnitureUpload>
                <div>
                    <input type='file' onChange={this.handleChange}></input>
                    <div>
                        Type: <select name='furniture-types' className='dropdown'>
                            <option value='sofas'>Sofa</option>
                            <option value='sectional'>Sectional</option>
                            <option value='chair'>Chair</option>
                            <option value='loveseats'>Loveseats</option>
                            <option value='chaises'>Chaises</option>
                            <option value='recliners'>Recliners</option>
                            <option value='sectionals'>Sectionals</option>
                        </select>
                    </div>
                    <div>
                        Color: <input type='text'></input>
                    </div>
                    <button onClick={this.handleUpload}>Upload</button>
                    <div>
                        <progress value={this.state.progess} max='100' />
                    </div>
                    <div>
                        <img src={this.state.url} alt='upload' className='img' />
                    </div>
                </div>
            </StyledFurnitureUpload>
        )
    }
}

export default FurnitureUpload;

const StyledFurnitureUpload = styled.div`
    .img {
        width: 200px;
        height: 200px;
    }
`;