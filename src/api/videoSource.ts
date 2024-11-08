import { AxiosInstance } from "axios";

const videoSource = (api: AxiosInstance) => {
  const videoSourceList = async () => {
    try{
        const response = await api.get('/video_source/read');
        console.log(response)
        return response.data
    } catch (error){
        console.error('videoSourceList failed:', error);
        throw error;
    }
  }
  return {
    videoSourceList
  }
}

export default videoSource