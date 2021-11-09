import { galleryActionTypes } from './gallery.types';

const INITIAL_STATE = {
  imageGallery: [],
  videoGallery: []
};

const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case galleryActionTypes.ADD_TO_IMAGE_GALLERY:
      return {
        ...state,
        imageGallery: [...state.imageGallery, action.payload]
      };

    case galleryActionTypes.ADD_TO_VIDEO_GALLERY:
      return {
        ...state,
        videoGallery: [...state.videoGallery, action.payload]
      };
    
    default:
      return state;
  }
}

export default galleryReducer;