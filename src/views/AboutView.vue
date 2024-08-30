<template>
  <v-container fluid class="about-page">
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="about-title">About</h1>

        <v-card
          class="about"
          :prepend-avatar="'/' + props.account + '.jpg'"
          title="衍蘊"
          :subtitle="'@' + props.account"
        >
          <v-card-text>
            <p>
              小的時候總想抓住公車上的吊環，再多的讓位空位都坐不住。
              <br />
              長大之後也沒有人會讓位了，連空位都搶不到一個，卻還是握不住吊環。
            </p>

            <p>願所有傷痛有天都會不值一提。</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="directory">
        <v-tabs class="category" v-model="tab">
          <v-tab v-for="(item, index) in categoryItems" :key="index" value="one">{{ item }}</v-tab>
        </v-tabs>

        <v-tabs-window class="books" v-model="tab">
          <v-tabs-window-item value="one"> One </v-tabs-window-item>
          <v-tabs-window-item value="two"> Two </v-tabs-window-item>
          <v-tabs-window-item value="three"> Three </v-tabs-window-item>
        </v-tabs-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{ account: string }>()

const tab = ref<string>('one')

const categoryItems = ['部落格', '相簿', '短篇小說', '長篇小說', '評論']
</script>
