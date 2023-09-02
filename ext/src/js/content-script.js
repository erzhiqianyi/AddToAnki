console.log("start content service")

//add message listener
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    const action = message.action
    switch (action) {
        case "AddToAnki":
            const selectedText = message.selectedText;
            showSelectedText(selectedText)
            break
    }
});

function showSelectedText(selectedText){
    const selectedWords = selectedText.trim().split(/\s+/);
    alert("selected text is: "+selectedWords.join("\n"));
}