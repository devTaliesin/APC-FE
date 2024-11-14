import { AxiosInstance } from "axios";

const event = (api: AxiosInstance) => {

  const dailyVideoRead = async () => {
    try{
        const response = await api.get('/event/daily_video_read');
        return response.data
    } catch (error){
        console.error('dailyVideoRead failed:', error);
        throw error;
    }
  }

  const dailyFaceIdRead = async () => {
    try{
        const response = await api.get('/event/daily_face_id_read');

        return response.data
    } catch (error){
        console.error('dailyFaceIdRead failed:', error);
        throw error;
    }
  }

  return {
    dailyVideoRead,
    dailyFaceIdRead
  }
}

export default event