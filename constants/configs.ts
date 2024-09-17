
import { Dimensions } from "react-native";

//Get original with and height of platform
export const { width, height } = Dimensions.get("window");

//get calculation width for this app
export const setWidth = (val: number) => width * val/100;

export const setHeight = (val: number) => height * val/100;

//Get the current stored screen/stack for this app or preview 

//Important Note always end all url with a slash
//Don't start any url with slash 

export const origin = ''; 

export const v1 = 'api/v1/';

export const cloudinary_cdn_url = `https://res.cloudinary.com/dpdodsnm0/`;

export const appEmail = `info@kamphaus.com`;
