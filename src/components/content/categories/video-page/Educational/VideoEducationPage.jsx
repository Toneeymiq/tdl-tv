import { VideoFirebase } from "../video-firebase/video-firebase";

export function VideoEducationalPage() {

  return (
   <VideoFirebase category="Educational videos" firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoEducationLinks.json"/>
  );
}