import React from 'react'
import styled from 'styled-components'
import { Upload,  message } from 'antd';
import Icon from '@ant-design/icons';
const { Dragger } = Upload;

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const ImageUpload = ()=>{

const props={
    name:'photo',
    multiple:false,
    action:'',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },

}

    return(
    <Container>
        <Dragger {...props}>
        <div style={{width: '100%'}}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                </div>
        </Dragger>
    </Container>
    )

}

export default ImageUpload