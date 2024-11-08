import { useEffect } from "react"
import { videoSourceList } from "../api"
import {VideoSourceStore} from "../stores/video_source_store"

const videoListHook = () => {
  const { setVideoSourceArray } = VideoSourceStore();
  useEffect(()=> {
    const getVideoSourceList = async () => {
      const videoSource = await videoSourceList();
      setVideoSourceArray(videoSource)
    }
    getVideoSourceList();

    return () => {
      setVideoSourceArray(null)
    }
  }, [setVideoSourceArray])
}

export default videoListHook