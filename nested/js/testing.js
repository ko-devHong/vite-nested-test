function getUserPlatform() {
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
    }
    return isMobile.Android() ? "android" : isMobile.iOS() ? "ios" : "web"
}

function openAlert() {
  const platform  = getUserPlatform()
    if(platform === "android") {
       alert("android")
         return
    }
    if(platform === "ios"){
      alert("ios")
         return
    }
    alert("none")
}