<template>
  <div class="container">
    <main>
      <div class="py-3 text-center">
        <img alt="" class="d-block mx-auto mb-4" height="57" src="../../images/icon128.png"
             width="72">
        <h2>Options</h2>
        <p class="lead">Before you proceed with your setup, please ensure that you have already set up both the
          Azure TTS proxy service and the OpenAI proxy service.
        </p>
      </div>

      <div class="row g-5">
        <div class="col-sd-7 col-mg-10">
          <div>
            <h4 class="mb-3">OpenAI Proxy</h4>
            <div class="row g-3">

              <div class="col-12">
                <label class="form-label" for="openAiHost">Host</label>
                <input class="form-control" id="openAiHost" placeholder="OpenAI API Host Address"
                       type="text" v-model="openAi.host">
              </div>

              <div class="col-12">
                <label class="form-label" for="openAiModel">Model</label>
                <input class="form-control" id="openAiModel" placeholder="Model Name"
                       type="text" v-model="openAi.model">
              </div>


              <div class="col-12 mt-2">
                <label class="form-label" for="openAiToken">Token </label>
                <input class="form-control" id="openAiToken" placeholder="OpenAI API Token"
                       type="password" v-model=openAi.token>
              </div>

              <div class="col-12 mt-2">
                <div class="form-floating">
                  <label for="prompt">Prompt</label>
                  <textarea class="form-control" id="prompt" placeholder="The Word explain prompt"
                            style="height: 200px" v-model=openAi.prompt
                  ></textarea>
                </div>
              </div>

              <div class="col-12 mt-2">
                <label for="word">Example Word</label>
                <button class="w-10 btn btn-primary btn-sm m-1" type="button" @click="checkPrompt">Check Prompt</button>
                <input class="form-control" placeholder="A Word ,such as 学生" id="word"
                       type="text" v-model=openAi.word>
              </div>
              <div class="col-12 mt-2">
                <div class="card" style="width: 60rem;">
                  <div class="card-body">
                    <h5 class="card-title">Explain</h5>
                    <p class="card-text">
                    <pre v-highlightjs="sourcecode"><code class="javascript">{{ openAi.explain }}</code></pre>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4">
        </div>
      </div>


      <div class="row g-5">
        <div class="col-sd-7 col-mg-10">
          <div>
            <h4 class="mb-3">Azure TTS Proxy</h4>
            <div class="row g-3">

              <div class="col-12">
                <label class="form-label" for="azureHost">Host</label>
                <input class="form-control" id="azureHost" placeholder="Azure API Host Address"
                       type="text" v-model="azure.host">
              </div>

              <div class="col-12 mt-2">
                <label class="form-label" for="azureToken">Token </label> <input class="form-control" id="azureToken"
                                                                                 placeholder="Azure API Token"
                                                                                 type="password" v-model="azure.token">
              </div>

              <div class="col-sm-12 mt-2">

              </div>
              <div class="col-sm-6">
                <label class="form-label" for="area">Area</label>
                <input class="form-control" id="area" placeholder="Area name"
                       type="text" v-model="azure.area">

              </div>

              <div class="col-sm-6">
                <label class="form-label" for="voice">Voice</label>
                <input class="form-control" id="voice" placeholder="Voice name"
                       type="text" v-model="azure.voice">
              </div>


              <div class="col-12 mt-2">
                <label for="prompt">Example Word</label>

                <input class="form-control" placeholder="A Word ,such as student"
                       type="text" v-model="azure.word">

              </div>

              <div class="col-12 mt-2">
                <div class="input-group mb-3">
                  <audio id="audio-player" controls>
                    <source :src="azure.voiceUrl" type="audio/mpeg">
                  </audio>
                  <button class="w-10 btn btn-primary  m-1" type="button" @click="checkPronunciation">Check
                    Pronunciation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-4">

      <div class="row g-5">
        <div class="col-sd-7 col-mg-10">
          <h4 class="mb-3">Anki</h4>
          <div class="row g-3">

            <div class="col-12">
              <label class="form-label" for="ankiHost">Host </label>
              <button class="w-10 btn btn-primary btn-sm m-1" type="button" @click="checkAnkiConnect">Check Anki
                Connect
              </button>
              <input class="form-control" id="ankiHost" placeholder="Anki Host "
                     type="text" v-model="anki.host">
            </div>

            <div class="col-12 mt-2">
              <label for="prompt">Deck Name</label>
              <input class="form-control" placeholder="Deck Name"
                     type="text" v-model="anki.deckName">
            </div>


            <div class="col-12 mt-2">
              <div class="form-floating">
                <label for="wordModel">Word Model</label>
                <button class="w-10 btn btn-primary btn-sm m-1" type="button" @click="checkWordModel">Check Word
                </button>
                <textarea class="form-control" id="wordModel" placeholder="The model detail of word"
                          style="height: 500px" v-model="anki.wordModel"></textarea>
              </div>
            </div>

            <div class="col-12 mt-2">
              <div class="form-floating">
                <label for="sentenceModel">Sentence Model</label>
                <button class="w-10 btn btn-primary btn-sm m-1" type="button" @click="checkSentenceModel">Check
                  Sentence
                </button>
                <textarea class="form-control" id="sentenceModel" placeholder="The model detail of sentence"
                          style="height: 500px" v-model="anki.sentenceModel"></textarea>
              </div>
            </div>


          </div>
          <hr class="my-4">
        </div>
      </div>


      <div>
        <button class="w-50 btn btn-primary btn-md" type="submit" @click="addToAnki">Test Add To Anki</button>
        <hr class="my-4">
        <button class="w-100 btn btn-primary btn-md" type="submit" @click="saveSettings">Save</button>
      </div>
    </main>

    <footer class="my-5 pt-5 text-body-secondary text-center text-small">
      <p class="mb-1">&copy; 2023–2033 erzhiqianyi</p>
    </footer>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'ExtOptions',
  data() {
    return {
      openAi: {
        host: '',
        token: '',
        prompt: '日本語の単語に対して日本語の定義を提供し、その後単語、ひらがな、ローマ字、定義、中国語訳、品詞を出力してください。定義はできるだけ詳細に、N1レベルの語彙を参考にしてください。定義は日本語で出力してください。また、N1レベルの例文5つを提供し、それぞれの例文にひらがなと中国語訳を含めてください。出力はJSON形式です。JSON形式\'\'\'{ word: 学生, kana: がくせい, romaji: gakusei, definition: student, translation: 学生, speech: noun, sentences: [ { sentence: 私は大学生です, kana: わたしはだいがくせいです, translation: 我是大学生 } ] }\'\'\'',
        model: 'gpt-3.5-turbo',
        word: "学生",
        explain: ""
      },
      azure: {
        host: '',
        token: '',
        area: 'eastasia',
        voice: 'ja-JP-MayuNeural',
        word: '学生',
        voiceUrl: this.host + "?kanji="+this.word + "&token="+this.token
      },
      anki: {
        host: 'http://127.0.0.1:8765',
        deckName: '日语单词',
        wordModel: ' {\n' +
            '    "action": "createModel",\n' +
            '    "version": 6,\n' +
            '    "params": {\n' +
            '      "modelName": "日语单词",\n' +
            '      "inOrderFields": [\n' +
            '        "sort",\n' +
            '        "word",\n' +
            '        "speech",\n' +
            '        "translation",\n' +
            '        "definition",\n' +
            '        "audio"\n' +
            '      ],\n' +
            '      "css": "@font-face {\\n font-family: IPAexMincho; src: url(\'_ipaexm.ttf\');\\n}\\n\\n.jp {\\n  font-family: IPAexMincho;\\n}\\n\\n.card {\\n font-family: arial;\\n font-size: 20px;\\n text-align: center;\\n color: black;\\n background-color: white;\\n}",\n' +
            '      "isCloze": false,\n' +
            '      "cardTemplates": [\n' +
            '        {\n' +
            '          "Name": "Definition",\n' +
            '          "Front": "<span class=\\"jp\\">{{furigana:word}}</span> {{speech}}",\n' +
            '          "Back": "{{FrontSide}}\\n\\n<hr id=answer>\\n\\n<span class=\\"jp\\">{{furigana:word}}</span> {{audio}}<hr>{{definition}}<hr>{{translation}}"\n' +
            '        }\n' +
            '      ]\n' +
            '    }\n' +
            '  }',
        sentenceModel: '  {\n' +
            '    "action": "createModel",\n' +
            '    "version": 6,\n' +
            '    "params": {\n' +
            '      "modelName": "日语句子",\n' +
            '      "inOrderFields": [\n' +
            '        "sort",\n' +
            '        "sentence",\n' +
            '        "translation",\n' +
            '        "kana",\n' +
            '        "audio"\n' +
            '      ],\n' +
            '      "isCloze": false,\n' +
            '      "cardTemplates": [\n' +
            '        {\n' +
            '          "Name": "Sentence",\n' +
            '          "Front": "<span class=\\"jp\\">{{furigana:sentence}}</span>",\n' +
            '          "Back": "{{FrontSide}}\\n\\n<hr id=answer>\\n\\n<span class=\\"jp\\">{{kana}}</span> {{audio}} <hr>{{furigana:translation}}"\n' +
            '        }\n' +
            '      ]\n' +
            '    }\n' +
            '  }'
      }

    };
  },
  async created() {
    console.log("restore options")
    chrome.storage.sync.get(
        (items) => {
          this.openAi = items.openAi
          this.azure = items.azure
          this.anki = items.anki
        }
    );
  },
  methods: {
    saveSettings() {
      chrome.storage.sync.set(
          {openAi: this.openAi, azure: this.azure, anki: this.anki}
      );
    },
    async checkPrompt() {
      const parameters = {
        "model": this.openAi.model,
        "messages": [
          {
            "role": "system",
            "content": this.openAi.prompt
          },
          {
            "role": "user",
            "content": this.openAi.word
          }
        ]
      }
      const headers = {
        Authorization: this.openAi.token
      }
      const explain = await axios.post(this.openAi.host, parameters, {
        headers: headers
      }).then(function (response) {
        if (response.status == 200) {
          const content = response.data.choices[0].message.content
          return JSON.parse(content)
        }
        return response
      }).catch(function (error) {
        if (error.response.status == 401) {
          alert("Invalid token")
        }
      });
      this.openAi.explain = explain
    },
    checkPronunciation() {
      alert("check Pronunciation")
    },
    async checkAnkiConnect() {
      const parameters = {
        "action": "deckNames",
        "version": 6
      }
      const decks = await axios.post(this.anki.host, parameters, {crossdomain: true})
          .then(function (response) {
            return response
          }).catch(function (error) {
            if (error.code == 'ERR_NETWORK') {
              alert("Anki is not running , please Start Anki")
            }
          });
      console.log(decks)
    },
    checkWordModel() {
      alert("check Word  Model")
    },
    checkSentenceModel() {
      alert("check Sentence Model")
    },
    addToAnki() {
      alert("Test add to anki ")
    }

  },
};
</script>
