<template>
  <v-app>
    <!-- <v-app-bar elevation="0">
      <template #prepend>
        <v-icon>mdi-plus</v-icon>
      </template>
      <v-app-bar-title>Episode 備份站</v-app-bar-title>

      <v-spacer />

      <v-avatar image="/headshot.png"> </v-avatar>
    </v-app-bar> -->

    <v-main>
      <RouterView />
    </v-main>

    <v-footer>
      <span class="copyright"> © 2024 jellyfish.xin </span>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts"></script>
