import { API_ROOT } from './../../constants/config';
import { normalize, Schema, arrayOf } from 'normalizr';
import { Schemas } from './../../utils/schema';
import { getUserToken } from './../../utils/storage';

import {
  MEDIA_FAVORITE,
} from '../../constants/actiontypes';

function toggleFavorite(payload) {
  console.log('payload',payload.isFavorited);
  const media = Object.assign({},payload,{isFavorited:!payload.isFavorited});
  console.log('payload after',media.isFavorited);
  const normalized = normalize(media,Schemas.MEDIA);
  return {
    type: MEDIA_FAVORITE,
    entities: normalized.entities
  }
}

/**
 * @returns {Function}
 * Favorite a media
 */
export function favoriteMedia() {
  return (dispatch,state) => {

    const params = {
      media:state().mediaReducer.current
    };

    const media = state().entities.medias[params.media];
    console.log('current med',media.isFavorited);
    dispatch(toggleFavorite(media));

    return getUserToken().then((token) => {
      const url = API_ROOT + `/medias/favorite?api_token=${token}`;
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
      })
        .then(response => response.json())
        .then(json => {
          console.log('json',json)
          //dispatch(fetchFavorites());
        }).catch((err)=> console.log(err))
    })
  }
}