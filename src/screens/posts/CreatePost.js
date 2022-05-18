import React, { useState } from 'react'
import { Container, Box, Typography, Divider, IconButton, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import pic from '../profile/lunch.jpg'


function CreatePost() {
    const [titlePost, setTitlePost] = useState('')
    const [description, setDescription] = useState(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam`)
    const [partOfPost, setPartOfPost] = useState([
        {
            title: 'Nooif chieen khong dau la gi ?',
            img: 'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
            paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam`
        },
        {
            title: 'hue',
            img: 'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
            paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam`

        }
    ])

    const navigate = useNavigate()

    const onBack = () => {
        navigate(-1)
    }

    const previewPicture = (e) => {
        console.log(e.target.files[0])
        const file = e.target.files[0];
        const preview = document.getElementById('preview-picture')
        console.log(preview)

        preview.removeChild(preview.firstChild)

        const reader = new FileReader()

        reader.onload = e => {
            const img = document.createElement('img')
            img.src = e.target.result
            img.id = 'preview-img'
            img.style = "object-fit: cover; width : 100% ; height : 100%"
            preview.appendChild(img)
        }
        reader.readAsDataURL(file)
    }

    const handleTitle = () => {
        console.log('click')
    }

    return (
        <Container style={{
            width: 900,
        }}>
            <Box style={{
                border: '1px solid rgb(232 234 235)',
                marginTop: 20,
                marginBottom: 20,
                paddingBottom: 20,
            }} >
                <IconButton style={{
                    position: 'absolute',
                    left: 5,
                }} onClick={onBack}>Cancel</IconButton>
                <Typography variant='h6'>Tạo bài viết mới</Typography>

                <Box style={{
                    border: '1px solid rgb(232 234 235)',
                    // borderRadius: 20,
                    margin: 20,

                    padding: 30,
                    textAlign: 'left'

                }} >
                    <Box style={{
                        marginBottom: 30
                    }}>
                        <input type='text' style={{
                            border: 'none',
                            outline: 'none',
                            fontSize: 30,
                            width: '100%',
                        }}
                            placeholder="Nhập tiêu đề bài viết ..."
                            // value={titlePost}
                            // onChange={handleTitle}
                        />
                    </Box>

                    <Box style={{
                        height: 300,
                        width: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(232 234 235)',
                        position: 'relative',
                        marginBottom: 20
                    }}>

                        <Box style={{
                            zIndex: 0,
                            postion: 'absolute',
                        }} id={"preview-picture"}>
                            <img src={pic} />
                        </Box>
                        <Box style={{
                            zIndex: 1000,
                            postion: 'absolute',
                        }}>
                            <input
                                id="create-post-picture"
                                type={'file'}
                                accept="image/png, image/jpeg"
                                style={{
                                    // display: 'none'
                                }}
                                onChange={previewPicture}
                            />
                            <label htmlFor="create-post-picture" style={{
                                postion: 'absolute',
                                left: '50%'
                                // left: 0
                            }}><CameraAltIcon /></label>
                        </Box>

                    </Box>
                    <Typography>{description}</Typography>

                    <Box>
                        {
                            partOfPost.map((item, index) => (<Box key={index}>
                                <Typography variant='h6' style={{
                                    color: 'grey',
                                    marginTop: 20,
                                    paddingBottom: 20
                                }}>{item.title}</Typography>
                                {
                                    item.img ? <img src={item.img} style={{width: '100%'}}/> : ''
                                }
                                <Typography>{item.paragraph}</Typography>
                            </Box>))
                        }

                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default CreatePost