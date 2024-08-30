<template>
  <v-container fluid class="home-page">
    <v-row>
      <v-col cols="12" md="8" class="about">
        <v-row>
          <v-col cols="12" sm="5">
            <h1 class="about-title">Episode</h1>
          </v-col>
          <v-col cols="12" sm="7" class="tag">
            <span v-for="(item, index) in tagItems" :key="index" class="tag-list">{{ item }}</span>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <p>嗨，這是我用來備份於 Episode 發表過的作品的網站。</p>

            <p></p>

            <p>如果你想要聯繫我，可以透過下方的平台。</p>

            <div class="social-platform">
              <v-btn
                v-for="(item, index) in socialPlatformItems"
                :key="index"
                icon
                class="social-platform-list"
              >
                <v-avatar :image="item.logo" @click="openInNew(item.url)" />
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4" class="world">
        <v-row>
          <v-col cols="12" md="12" sm="6" v-for="(item, index) in worldItems" :key="index">
            <v-card
              class="world-list"
              :prepend-avatar="item.prependAvatar"
              :title="item.title"
              :subtitle="item.subtitle"
            >
              <v-card-actions>
                <v-btn
                  icon="mdi-open-in-new"
                  @click="router.push({ name: routeName.about, params: { account: item.account } })"
                />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { routeName } from '@/router'
import { useRouter } from 'vue-router'

const router = useRouter()

const tagItems = ['小說', '散文', '新詩']

const worldItems = [
  {
    prependAvatar: '/sinping328.jpg',
    title: '衍蘊',
    subtitle: '@sinping328',
    account: 'sinping328'
  },
  {
    prependAvatar: '/deliberate.jpg',
    title: '不思量',
    subtitle: '@deliberate',
    account: 'deliberate'
  }
]

const socialPlatformItems = [
  {
    logo: '/plurk-logo.png',
    url: 'https://www.plurk.com/jellyfish_xin'
  },
  {
    logo: '/clibo-logo.png',
    url: 'https://clibo.tw/users/xin'
  },
  {
    logo: '/github-logo.png',
    url: 'https://github.com/jellyfish-xin'
  }
]

function openInNew(url: string) {
  window.open(url, '_blank')
}
</script>
