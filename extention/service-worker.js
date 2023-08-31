const  ID_AddToAnki = "AddToAnki"
//add a context action called AddToAnki
chrome.contextMenus.create({
    id: ID_AddToAnki,
    title: ID_AddToAnki ,
    contexts: ["selection"]
});

// add context action listener
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    const menuId = info.menuItemId
    switch (menuId){
        case "AddToAnki":
            //send message to context js , the action is AddToAnki
            const  selectedText =info.selectionText
            chrome.tabs.sendMessage(tab.id, { action: ID_AddToAnki, selectedText });
            break
    }
})




