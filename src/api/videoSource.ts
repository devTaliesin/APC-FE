import { AxiosInstance } from "axios";

interface videoSourceForm {
  ip: string;
  port: number | undefined;
  name: string;
  user: string;
  pass: string;
}

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

  const addVideoSource = async (data:videoSourceForm) => {
    try{
        const response = await api.post('/video_source/create', data);
        if (response.status === 201) {
          return response.data
        } else if (response.status === 502) {
          console.error(response.data.message);
        } else if (response.status === 401) {
          console.error(response.data.message);
        } else if (response.status === 503) {
          console.error(response.data.message);
        } else if (response.status === 500) {
          console.error(response.data.message);
        }
    } catch (error){
        console.error('addVideoSource failed:', error);
        throw error;
    }
  }

  return {
    videoSourceList,
    addVideoSource,
  }
}

export {videoSource, type videoSourceForm} 