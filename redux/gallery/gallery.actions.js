import { galleryActionTypes } from './gallery.types';

export const addToImageGallery = (file) => ({
  type: galleryActionTypes.ADD_TO_IMAGE_GALLERY,
  payload: file
});

export const addToVideoGallery = (file) => ({
  type: galleryActionTypes.ADD_TO_VIDEO_GALLERY,
  payload: file
});