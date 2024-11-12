import { AxiosInstance } from "axios";

const videoSource = (api: AxiosInstance) => {
  const videoSourceList = async () => {
    try{
        const response = await api.get('/video_source/read');
        if (response.status === 200) {
          return response.data
        } else if (response.status === 204) {
          console.log(response) // 결과가 없을 때 행동 구현
        }
    } catch (error){
        console.error('videoSourceList failed:', error);
        throw error;
    }
  }
  return {
    videoSourceList,
  }
}

export default videoSource