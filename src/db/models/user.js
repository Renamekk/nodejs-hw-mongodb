import { model, Schema } from 'mongoose';
import { emailRegEx } from '../../constants/auth.js';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: emailRegEx, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UserCollection = model('users', userSchema);