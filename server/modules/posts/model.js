/** @flow */
import mongoose, { Schema } from 'mongoose';

export type PostType = {
  title: string,
  text: string
}

const PostSchema: PostType = new Schema({
  title: {
    type: String,
    unique: true,
    minlength: [5, 'Title need to be at least 5 characters'],
    required: true,
  },
  text: {
    type: String,
    minlength: [30, 'Title need to be at least 30 characters'],
    required: true,
  },
});

export default mongoose.model('Post', PostSchema);
