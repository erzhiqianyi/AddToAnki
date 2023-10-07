export default {
    defaultMaxToken: 2048,
    defaultTemperature: 1,
    defaultSystem: "あなたは優れた日本語のコーチです",
    defaultModel: "gpt-3.5-turbo",
    defaultWord: "エラー",
    defaultArea: 'eastasia',
    defaultVoice: 'ja-JP-MayuNeural',
    defaultAnkiHost: 'http://127.0.0.1:8765',
    defaultDeckName:'日语单词本',
    defaultWordModel:'{ "action": "createModel", "version": 6, "params": { "modelName": "日语单词", "inOrderFields": [ "sort", "word", "speech", "translation", "definition", "audio" ], "css": "@font-face {\\n font-family: IPAexMincho; src: url(\'_ipaexm.ttf\');\\n}\\n\\n.jp {\\n  font-family: IPAexMincho;\\n}\\n\\n.card {\\n font-family: arial;\\n font-size: 20px;\\n text-align: center;\\n color: black;\\n background-color: white;\\n}", "isCloze": false, "cardTemplates": [ { "Name": "Definition", "Front": "<span class=\\"jp\\">{{furigana:word}}</span> {{speech}}", "Back": "{{FrontSide}}\\n\\n<hr id=answer>\\n\\n<span class=\\"jp\\">{{furigana:word}}</span> {{audio}}<hr>{{definition}}<hr>{{translation}}" } ] } }',
    defaultSentenceModel:'{ "action": "createModel", "version": 6, "params": { "modelName": "日语句子", "inOrderFields": [ "sort", "sentence", "translation", "kana", "audio" ], "isCloze": false, "cardTemplates": [ { "Name": "Sentence", "Front": "<span class=\\"jp\\">{{furigana:sentence}}</span>", "Back": "{{FrontSide}}\\n\\n<hr id=answer>\\n\\n<span class=\\"jp\\">{{kana}}</span> {{audio}} <hr>{{furigana:translation}}" } ] } }',
    defaultPrompt: "あなたには日本語の単語${WORD}が提供され、あなたのタスクは\n" +
        "1. 日本語の単語に対する日本語の定義を提供し、その単語、ひらがな、ローマ字、定義、中国語の翻訳、品詞を出力します。\n" +
        "2. N1レベルの例文5つを提供し、それぞれの例文にひらがなと中国語訳を含めてください\n" +
        "3. output format to json like below\n" +
        "```\n" +
        "word:\n" +
        "- input:学生\n" +
        "- hiragana: がくせい\n" +
        "- romaji: gakusei\n" +
        "- definition: 学びを行う人、勉強している人のことを指す。\n" +
        "- translation: 学生\n" +
        "- speech: 名詞\n" +
        "sentences：\n" +
        "1. - sentence: 学生は毎日たくさんの宿題をします。\n" +
        "   - hiragana: がくせいはまいにちたくさんのしゅくだいをします。\n" +
        "   - translation: 学生们每天都要做很多的作业。\n" +
        "```",

}