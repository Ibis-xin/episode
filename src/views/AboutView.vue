<template>
  <v-container fluid class="about-page">
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="about-title">About</h1>
        <v-card
          class="about"
          :prepend-avatar="'/' + props.account + '.jpg'"
          title="不思量"
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
        <v-row class="filter">
          <v-col>
            <span v-for="(item, index) in filterItems" :key="index" class="filter-list">
              {{ item }}
            </span>
          </v-col>
          <v-col>
            <v-text-field
              v-model="search"
              label="Search"
              append-inner-icon="mdi-magnify"
              variant="outlined"
              hide-details
              single-line
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="table">
          <v-col>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              :search="search"
              v-model:page="page"
            >
              <template v-slot:bottom>
                <v-pagination
                  show-first-last-page
                  :length="pageCount"
                  v-model="page"
                ></v-pagination>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps<{ account: string }>()

const search = ref<string>('')

const page = ref<number>(1)

const filterItems = ['新詩', '新詩 II', '新詩 III']

const headers = [
  { key: 'title', title: '作品名稱', align: 'start', sortable: false },
  { key: 'updateTime', title: '更新時間', align: 'end', sortable: false }
]

const pageCount = computed(() => {
  return Math.ceil(desserts.length / 5)
})

const desserts = [
  {
    title: '用一整個星期的晴天來踐别',
    updateTime: '2020/04/08'
  },
  {
    title: '因為我也是如此灰暗的人所以才能若無其事地微笑著',
    updateTime: '2020/04/08'
  },
  {
    title: '將世界寫入詩',
    updateTime: '2020/04/08'
  },
  {
    title: '遺詩',
    updateTime: '2020/04/08'
  },
  {
    title: '集世界的所有苦澀於其中',
    updateTime: '2020/04/08'
  },
  {
    title: '每個遺憾都可能蒸發',
    updateTime: '2020/04/08'
  },
  {
    title: '活到世界末日前',
    updateTime: '2020/04/08'
  },
  {
    title: '如果我在哭的時候你剛好經過請不要擁抱我',
    updateTime: '2020/04/08'
  },
  {
    title: '心悸在今天也一樣很完美',
    updateTime: '2020/04/08'
  },
  {
    title: '匿名的時候常常覺得自己像是死的',
    updateTime: '2020/04/08'
  },
  {
    title: '沉默的一群為何沉默',
    updateTime: '2020/04/08'
  },
  {
    title: '請允許我借用二十四個名字',
    updateTime: '2020/04/08'
  }
]
</script>
