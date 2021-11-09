import React from 'react';
import Image from 'next/image';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectImageGallery, selectVideoGallery } from '../redux/gallery/gallery.selectors';
import { addToImageGallery, addToVideoGallery } from '../redux/gallery/gallery.actions';

const Gallery = ({imageGallery, videoGallery, addImg, addVideo}) => {
    const [file, setFile] = React.useState({
        fileUrl: '',
        fileType: ''
    })

    const handleChange = (e) => {
        const { files } = e.target;
        if (imageGallery.length <= 3 && videoGallery.length <= 3) {
            setFile({
                fileUrl: URL.createObjectURL(files[0]),
                fileType: files[0].type
            });
        };
        
    }

    const handleUpload = () => {
        if (file.fileType[0] === 'i' && imageGallery.length <= 2){
            addImg(file);
        } else if (file.fileType[0] === 'v' && videoGallery.length <= 2) {
            addVideo(file);
        }
    }

    return (
        <div className='pb-8'>
            <div className='w-full h-16 bg-pink-500 text-3xl text-white py-4 flex justify-center items-center mb-4'>Gallery</div>
            {imageGallery.length <= 3 && videoGallery.length <= 3 ? (
                <>
                    <label className='mx-4'>Upload media file:</label>
                    <input type="file" id="upload_file" name="upload_file" accept="image/*, video/*" capture onChange={handleChange} />
                    <button className='mt-4 py-3 ml-3 px-10 rounded-full bg-pink-300 text-white' onClick={handleUpload}>Upload</button>
                </>
            ) : (
                <div className='my-12 flex justify-center w-full items-center text-pink-300'>
                    YOU REACHED UPLOAD LIMIT
                </div>
            )}

                

            <div className='mb-4 my-8 px-4'>
                <p className='text-2xl my-4'>IMAGES</p>
                
                    {
                        imageGallery.length > 0 ? (
                            <div className='grid md:grid-cols-3 gap-4 grid-rows-1 px-4 my-8'>
                                {
                                    imageGallery.map(({fileUrl}) => (
                                        <div>
                                            <img src={fileUrl} width={300} height={300} />
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div className='my-12 flex justify-center w-full md:text-3xl items-center text-pink-300'>
                                YOU CURRENTLY NO IMAGES IN YOUR GALLERY
                            </div>
                        )
                    }
            </div>
            <div className='my-4 px-4'>
                <p className='text-2xl my-4'>VIDEOS</p>
                
                {
                    videoGallery.length > 0 ? (
                        <div className='grid md:grid-cols-3 gap-4 grid-rows-1 px-4 my-8'>
                            {
                                videoGallery.map(({fileUrl}) => (
                                    <div >
                                        <video src={fileUrl} width="320" height="240" controls></video>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div className='my-12 flex justify-center w-full md:text-3xl items-center text-pink-300'>
                            YOU CURRENTLY NO VIDEOS IN YOUR GALLERY
                        </div>
                    )
                }
                
            </div>
            
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    imageGallery: selectImageGallery,
    videoGallery: selectVideoGallery,
});

const mapDispatchToProps = (dispatch) => ({
    addImg: (imgFile) => dispatch(addToImageGallery(imgFile)),
    addVideo: (videoFile) => dispatch(addToVideoGallery(videoFile))
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
