import {createSelector} from 'reselect';

const selectGallery = state => state.gallery;

export const selectImageGallery = createSelector(
    [selectGallery],
    (gallery) => gallery.imageGallery
);

export const selectVideoGallery = createSelector(
    [selectGallery],
    (gallery) => gallery.videoGallery
);