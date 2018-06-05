//creates a new Mongo collection and exports it 
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
