function launch() {
    chrome.app.window.create('konversisuhu.html',{
        id: "convSUHU",
        state: "normal",
        innerBounds: {
          top: 25,
          left: 25,
          width: 800,
          height: 500,
          minHeight: 300,
          maxWidth: 800,
          minWidth: 500
        },
        frame: 'chrome'
    });      
}

chrome.app.runtime.onLaunched.addListener(function() {
    launch();
});

chrome.runtime.onSuspend.addListener(function() {

});