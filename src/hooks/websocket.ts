import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const SOCKET_SERVER_URL = 'http://localhost:3000';

const webSocket = (onvif:string, quality:string) => {
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL, {
      query: {
        type: 'client',
        onvif,
        quality, 
      },
    });

    socket.on('connect', async () => {
      const pc = new RTCPeerConnection();
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      socket.emit('clientOffer', offer);
      setPeerConnection(pc)
    });

    return () => {
      if (socket) {
        socket.disconnect();
      }
      if (peerConnection) {
        peerConnection.close()
      }
    }
  }, [])
}

export default webSocket