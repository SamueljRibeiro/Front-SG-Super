<template>
  <q-header :elevated="false" class="bg-white text-black pt-12 px-7 lg:ml-2" height-hint="51">
    <q-toolbar style="min-height: 51px; height: 51px">
      <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />-->

      <q-toolbar-title class="font-semibold text-2xl">
        {{ router.meta.title || 'Nome Padrão App' }}
      </q-toolbar-title>

      <q-input
        dense
        outlined
        v-model="pesProduto"
        class="q-ml-md w-[361px] custom-input mr-3 bg-slate-100 rounded-lg"
        input-class="rounded-xl"
        label="Pesquisar produtos..."
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-btn flat round class="relative">
        <IconSino />
        <q-badge
          color="red"
          rounded
          floating
          class="absolute top-2 right-3 w-2 h-2 min-h-0 p-0 hover:scale-[0.95] transition-transform duration-300"
        />
      </q-btn>

      <q-separator vertical inset class="mx-3" />

      <q-item-section side class="flex flex-col items-center">
        <q-item-label class="text-black font-semibold">Cauã Azeredo</q-item-label>
        <q-item-label caption>Administrador</q-item-label>
      </q-item-section>

      <q-avatar flat size="45px" rounded class="rounded-xl mr-4">
        <img :src="iconeUsuario" />
      </q-avatar>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
//import { useLayout } from 'src/composable/UseLayout';
import { useRoute } from 'vue-router';
import iconeUsuario from 'src/assets/imgGlobal/discord-2024 1.png';
import { ref } from 'vue';
import IconSino from 'src/assets/imgGlobal/IconSino.vue';

const pesProduto = ref();
const router = useRoute();
//const { toggleLeftDrawer } = useLayout();
</script>
