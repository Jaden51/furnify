import React, { Component } from 'react';
import styled from 'styled-components';

class FurnitureUpload extends Component {
    state = { selectedFile: null}

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHander = () => {

    }

    render() {
        return (
            <StyledFurnitureUpload>
                <div>
                    <input type='file' onChange={this.fileSelectedHandler}></input>
                    <button onClick={this.fileUploadHander}>Upload</button>
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