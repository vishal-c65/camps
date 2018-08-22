import {Comment} from './comment';

export class Campground
{
    public campName:String;
    public campImage:String;
    public campDescription: String;
    public author : {
        id:String,
        username:String
    };
    public comments: Comment[];
}