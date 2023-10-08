console.log("start content service")

//add message listener
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    const action = message.action
    switch (action) {
        case "AddToAnki":
            const explainMessage = message.message ;
            showMessage(explainMessage)
            break
    }
});

function showMessage(message){
    alert(message);
}