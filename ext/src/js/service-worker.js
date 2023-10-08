import config from "./defaultConfig"

let anki = {}
let azure = {}
let openAi = {}

const wordPlaceHolder = "${WORD}"
const ignoreHolder = "```"

initSetting()
const ID_AddToAnki = "AddToAnki"
//add a context action called AddToAnki
chrome.contextMenus.create({
    id: ID_AddToAnki,
    title: ID_AddToAnki,
    contexts: ["selection"]
});

// add context action listener
chrome.contextMenus.onClicked.addListener(async function (info, tab) {
    const menuId = info.menuItemId
    switch (menuId) {
        case "AddToAnki":
            const selectedText = info.selectionText
            const explain = await explainSelectedText(selectedText)
            const wordExplain = formatExplain(explain)
            const notes = explainToNotes(wordExplain)
            addToAnki(notes)
            const message = buildMessage(selectedText, wordExplain)
            chrome.tabs.sendMessage(tab.id, {action: ID_AddToAnki, message});
            break
    }
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
    initSetting()
});

function initSetting() {
    console.log("init setting.")
    chrome.storage.sync.get(
        (items) => {
            if (items.openAi) {
                openAi = items.openAi
            }
            if (items.azure) {
                azure = items.azure
            }
            if (items.anki) {
                anki = items.anki
            }
        }
    );
}


async function explainSelectedText(selectedText) {
    console.log("selected text " + selectedText)
    const word = selectedText.trim().split(/\s+/);
    const prompt = openAi.prompt.replaceAll(
        wordPlaceHolder, ignoreHolder + word + ignoreHolder
    )
    const parameters = {
        "model": openAi.model,
        "messages": [{
            "role": "system",
            "content": openAi.system
        },
            {
                "role": "user",
                "content": prompt
            }
        ],
        "temperature": openAi.temperature,
        "max_tokens": openAi.maxToken,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    }
    const headers = {
        "Authorization": openAi.token,
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(parameters)
    }
    const response = await fetch(openAi.host, requestOptions);
    const data = await response.json();
    const content = data.choices[0].message.content
    console.log("explain is\n" + content)
    return content
}

function formatExplain(content) {
    try {
        const formatContent = JSON.parse(content)
        return formatContent
    } catch (error) {
        console.log(error)
    }
}

function buildMessage(word, explain) {
    const message = word + " explain "
    if (explain) {
        return message + ':' + explain.word[0].definition
    } else {
        return message + 'fail'
    }
}

function explainToNotes(explain) {
    console.log("explain is")
    console.log(explain)
    const word = explain.word
    let wordNotes = Array()
    if (Array.isArray(word)) {
        wordNotes = word.map(buildWordNote)
    } else {
        wordNotes = Array(buildWordNote(word, 0, []))
    }
    const sentences = explain.sentences
    const sentenceNotes = sentences.map(buildSentenceNote)
    const notes = wordNotes.concat(sentenceNotes)
    return notes
}


function buildWordNote(wordExplain, index, array) {
    const note = noteTemplate()
    const word = wordExplain.input
    const voice = buildVoice(word)
    const hiragana = buildHiragana(word, wordExplain.hiragana)
    const fields = {
        sort: buildSortByDate(),
        word: hiragana,
        definition: wordExplain.definition,
        translation: wordExplain.translation,
        speech: "[" + wordExplain.speech + "]"
    }
    note.params.note.fields = fields
    note.params.note.audio = [voice]
    note.params.note.modelName = config.defaultWordModel.params.modelName
    return note
}

function buildHiragana(kanji, kana) {
    return kanji + "[" + kana + "]"
}

function buildVoice(kanji) {
    const url = azure.host + "?kanji=" + kanji + "&token=" + azure.token
    const fileName = "AddToAnki_" + kanji + ".mp3"
    const audio = {
        url: url,
        filename: fileName,
        skipHash: fileName,
        fields: [
            "audio"
        ]
    }
    return audio
}

function buildSentenceNote(sentence, index, array) {
    console.log(sentence)
    const note = noteTemplate()
    const kanji = sentence.sentence
    const voice = buildVoice(kanji)
    const hiragana = buildHiragana(kanji, sentence.hiragana)
    const fields = {
        sort: buildSortByDate(),
        sentence: hiragana,
        translation: sentence.translation,
        kana: sentence.hiragana
    }
    note.params.note.fields = fields
    note.params.note.audio = [voice]
    note.params.note.modelName = config.defaultSentenceModel.params.modelName
    return note
}

function addToAnki(notes) {
    notes.forEach((note) => sendToAnki(note))
}

function sendToAnki(note) {
    console.log("note is ")
    console.log(note)
    const headers = {
        "Content-Type": "application/json"
    }
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(note)
    }
    fetch(anki.host, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("Server response:", data);
        })
        .catch(error => {
            console.error("Error sending request:", error);
        });
}

function buildSortByDate() {
    const sort = new Date().toISOString().slice(0, 13).replaceAll("-", "")
        .replace("T", "");
    return sort

}

function noteTemplate() {
    const note = JSON.parse(JSON.stringify(config.createNote))
    return note
}