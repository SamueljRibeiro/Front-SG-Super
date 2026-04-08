<template>
  <q-layout view="lHh Lpr lFf">
    
    <app-header />

    <app-sidebar />

    <q-page-container class="flex-1 overflow-x-hidden lg:mx-12">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppSidebar from 'src/components/global/AppSidebar.vue';
import AppHeader from 'src/components/global/AppHeader.vue';
</script>
