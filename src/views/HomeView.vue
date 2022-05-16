<template>
  <main>
    <!-- <TheWelcome /> -->
    <!-- <div>
      Test 1
      <input
        type="text"
        v-model="this.word"
        @change="remplaceWord(this.word, this.words)"
      />
    </div> -->
    <div>
      Test 2
      <input
        type="text"
        v-model="this.word"
        @change="remplaceWord(this.word, this.words)"
      />
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      word: "",
      words: {
        a: "b",
        Alcol: "alcohol",
        canbio: "Cambio",
        corason: "corazón",
      },
    };
  },

  methods: {
    inWords(text, words): boolean {
      let keys = Object.keys(words);
      if (keys.find((i) => i == text)) {
        return true;
      }
      return false;
    },
    remplaceWord(text, words): void {
      if (this.inWords(text, words)) {
        this.word = words[text];
      }
    },
  },
};
</script>
