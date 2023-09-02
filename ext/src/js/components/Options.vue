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
                       type="text">
              </div>

              <div class="col-12 mt-2">
                <label class="form-label" for="openAiToken">Token </label>
                <input class="form-control" id="openAiToken" placeholder="OpenAI API Token" type="password">
              </div>

              <div class="col-12 mt-2">
                <div class="form-floating">
                  <label for="prompt">Prompt</label>
                  <textarea class="form-control" id="prompt" placeholder="The Word explain prompt"
                            style="height: 100px"></textarea>
                </div>
              </div>

              <div class="col-12 mt-2">
                <label for="prompt">Example Word</label>
                <button class="w-10 btn btn-primary btn-sm m-1" type="button">Check Prompt</button>
                <input class="form-control" placeholder="A Word ,such as Studentx" type="text">
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
                       type="text">
              </div>

              <div class="col-12 mt-2">
                <label class="form-label" for="azureToken">Token </label>
                <input class="form-control" id="azureToken" placeholder="Azure API Token" type="password">
              </div>

              <div class="col-sm-12 mt-2">

              </div>
              <div class="col-sm-6">
                <label class="form-label" for="area">Area</label>
                <input class="form-control" id="area" placeholder="Area name" required type="text" value="">

              </div>

              <div class="col-sm-6">
                <label class="form-label" for="voice">Voice</label>
                <input class="form-control" id="voice" placeholder="Voice name" required type="text"
                       value="">
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>


              <div class="col-12 mt-2">
                <label for="prompt">Example Word</label>
                <button class="w-10 btn btn-primary btn-sm m-1" type="button">Check Pronunciation</button>
                <input class="form-control" placeholder="A Word ,such as student" type="text">
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
              <input class="form-control" id="ankiHost" placeholder="Anki Host "
                     type="text">
            </div>
            <div class="col-sm-12 mt-2">

            </div>


            <div class="col-12 mt-2">
              <label for="prompt">Deck Name</label>
              <button class="w-10 btn btn-primary btn-sm m-1" type="button">Check Deck</button>
              <input class="form-control" placeholder="Deck Name" type="text">
            </div>


            <div class="col-12 mt-2">
              <div class="form-floating">
                <label for="wordModel">Word Model</label>
                <button class="w-10 btn btn-primary btn-sm m-1" type="button">Check Model</button>
                <textarea class="form-control" id="wordModel" placeholder="The model detail of word"
                          style="height: 100px"></textarea>
              </div>
            </div>

            <div class="col-12 mt-2">
              <div class="form-floating">
                <label for="sentenceModel">Sentence Model</label>
                <button class="w-10 btn btn-primary btn-sm m-1" type="button">Check Model</button>
                <textarea class="form-control" id="sentenceModel" placeholder="The model detail of sentence"
                          style="height: 100px"></textarea>
              </div>
            </div>


          </div>
          <hr class="my-4">
        </div>
      </div>


      <div>
        <button class="w-100 btn btn-primary btn-md" type="submit">Save</button>
      </div>
    </main>

    <footer class="my-5 pt-5 text-body-secondary text-center text-small">
      <p class="mb-1">&copy; 2023–2033 erzhiqianyi</p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  async created() {
    console.log("options")
  },
  methods: {
    saveSettings() {
      // 在这里添加保存设置的逻辑
      console.log("保存设置：");
    },
  },
};
</script>
