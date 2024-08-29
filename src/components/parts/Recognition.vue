<script setup lang="ts">
    import IWindow from '../../ts/i_window';
    import { useUnchiStore } from '../../ts/stores/unchi';

    declare const window: IWindow;
    const unchiStore = useUnchiStore();
    function startSound() {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();

      let recogFinalCounts = 0;

      recognition.lang = 'ja-JP';
      recognition.interimResults = true;
      recognition.continuous = true;

      recognition.onerror = (e) => {
        // 放置していると勝手に音声認識をやめるので、関数を呼んで再開する
        console.log(e.error);
        startSound();
      }

      recognition.onsoundend = () => {
        startSound();
      }

      recognition.onresult = (event) => {
        unchiStore.interimTranscript = '';
        for (let i=event.resultIndex; i<event.results.length; i++) {
          let transcript = event.results[i][0].transcript;
          if (transcript !== undefined) {
            if (event.results[i].isFinal) {
                unchiStore.finalTranscript += transcript;
                unchiStore.countUnchi(transcript);
            } else {
              unchiStore.interimTranscript = transcript;
            }
          }
        }
        recogFinalCounts++;
        if (recogFinalCounts > 3) {
          recogFinalCounts = 0;
          unchiStore.finalTranscript = '';
        }
      }
      recognition.start();
    }
    startSound();
</script>

<template>
  <div class="card">
    <button @click="startSound">Start</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
