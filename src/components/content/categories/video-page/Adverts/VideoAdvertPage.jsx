import { VideoFirebase } from "../video-firebase/video-firebase";

export function VideoAdvertPage() {

  return (
   <VideoFirebase category="Adverts" firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoAdvertLinks.json"/>
  );
}