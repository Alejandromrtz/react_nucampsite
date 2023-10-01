import { createSlice } from '@reduxjs/toolkit';
import {CAMPSITES} from '../../app/shared/CAMPSITES';

const initialState = {
        campsitesArray: CAMPSITES
};

const campsiteSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsiteReducer = campsiteSlice.reducer;

export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
}

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};


// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length*Math.random())]
// }