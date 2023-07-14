import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type UserDocuments = mongoose.HydratedDocument<User>;

@Schema()
export class User {
 
  @Prop()
  email: string;

  @Prop()
  name: string;

  
  @Prop()
  avatar: string;

 
  
}

export const UserSchema = SchemaFactory.createForClass(User);

