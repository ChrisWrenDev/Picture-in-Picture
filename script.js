const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    //Waiting to select which screen to share media in
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    //Pass media screen into video object
    videoElement.srcObject = mediaStream;
    //Play the video when it has loaded
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //Catch Error Here
    console.log("selectMediaStream Error:", error);
  }
}

button.addEventListener("click", async () => {
  //Disabled Button
  button.disabled = true;
  //Start Picture in Picture
  await videoElement.requestPictureinPicture();
  //Reset Button
  button.disabled = false;
});

//On Load
selectMediaStream();
