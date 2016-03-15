import { normalize, Schema, arrayOf } from 'normalizr';

const mediaSchema = new Schema('medias');
const userSchema = new Schema('users');
const commentSchema = new Schema('comments');
const favoriteSchema = new Schema('favorites');
const downloadSchema = new Schema('downloads');

mediaSchema.define({
  user:userSchema,
  comments:arrayOf(commentSchema),
});

userSchema.define({
  medias:arrayOf(mediaSchema),
  comments:arrayOf(commentSchema),
  favorites:arrayOf(favoriteSchema),
  downloads:arrayOf(downloadSchema)
});

commentSchema.define({
  user:userSchema,
  media:mediaSchema
});

favoriteSchema.define({
  user:userSchema,
  media:mediaSchema
});

downloadSchema.define({
  user:userSchema,
  media:mediaSchema
});

export const Schemas = {
  MEDIA:mediaSchema,
  MEDIA_ARRAY:arrayOf(mediaSchema),
  USER:userSchema,
  USER_ARRAY:arrayOf(userSchema),
  COMMENT:commentSchema,
  COMMENT_ARRAY:arrayOf(commentSchema),
  FAVORITE:favoriteSchema,
  FAVORITE_ARRAY:arrayOf(favoriteSchema),
  DOWNLOAD:downloadSchema,
  DOWNLOAD_ARRAY:arrayOf(downloadSchema),
};
