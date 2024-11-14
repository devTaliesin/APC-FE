import { useEffect } from "react"
// import { videoSourceList } from "../api"
import {VideoSourceStore} from "../stores/video_source_store"
import { videoSourceArraySchema } from "../schemas/video_source.schema";

const videoListHook = () => {
  const { setVideoSourceArray } = VideoSourceStore();

  useEffect(()=>{
    const eventSource = new EventSource(`${'http://localhost:3000'}/video_source/sse`);

    eventSource.onmessage = async (event) => {
      try {
        const validData = await videoSourceArraySchema.validate(JSON.parse(event.data));
        setVideoSourceArray(validData)
        console.log('New message:', validData);
      } catch( error ) {
        console.error(error)
      }
    };

    let isManuallyClosed = false;

// 새로고침이나 페이지 이동 시 EventSource를 수동으로 닫기
    const handleBeforeUnload = () => {
      isManuallyClosed = true;
      eventSource.close();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    eventSource.onerror = (error) => {
      // 수동 종료가 아닌 경우에만 실제 오류로 처리
      if (!isManuallyClosed) {
        console.error('Error receiving SSE:', error);
      }
    };
    return () => {
      isManuallyClosed = true;
      eventSource.close();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [])

}

export default videoListHook