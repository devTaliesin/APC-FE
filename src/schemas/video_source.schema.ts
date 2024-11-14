import { Schema, array, number, object, string } from "yup";
import { VideoSourceInterface } from "../interfaces/video_source.interface";

export const videoSourceSchema: Schema<VideoSourceInterface> = object({
  id: number().required() ,
  onvif: string().required(),
  name:  string().optional(),
  rtsp:  string().optional(),
})

export const videoSourceArraySchema = array().of(videoSourceSchema);