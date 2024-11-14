import { create } from 'zustand'
import { VideoSourceInterface } from '../interfaces/video_source.interface';

type VideoSourceStoreType = {
    videoSourceArray: VideoSourceInterface[] | undefined
    setVideoSourceArray: ( videoSourceArray: VideoSourceInterface[] | undefined ) => void
};
const VideoSourceStore = create<VideoSourceStoreType>((set) => ({
    videoSourceArray: undefined,
    setVideoSourceArray: (videoSourceArray: VideoSourceInterface[] | undefined) => set({videoSourceArray: videoSourceArray})
}))

export { VideoSourceStore }