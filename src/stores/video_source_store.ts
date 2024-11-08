import { create } from 'zustand'

interface VideoSourceArray {
  id:number;
  onvif: string;
  name: string;
  rtsp: string;
}
type VideoSourceStoreType = {
    videoSourceArray: VideoSourceArray[] | null
    setVideoSourceArray: ( videoSourceArray: VideoSourceArray[] | null ) => void
};
const VideoSourceStore = create<VideoSourceStoreType>((set) => ({
    videoSourceArray: null,
    setVideoSourceArray: (videoSourceArray: VideoSourceArray[] | null) => set({videoSourceArray: videoSourceArray})
}))

export { VideoSourceStore, type VideoSourceArray }