import { normalize, Schema, arrayOf } from 'normalizr';

const media = new Schema('medias');
const user = new Schema('users');
const comment = new Schema('comments');

media.define({
  user:user,
  comments:arrayOf(comment),
});

user.define({
  medias:arrayOf(media),
  comments:arrayOf(comment)
});

comment.define({
  user:user
});

export const mediaSchema = media;
export const userSchema = user;
export const commentSchema = comment;
