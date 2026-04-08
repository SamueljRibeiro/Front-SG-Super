<template>
  <q-drawer
    show-if-above
    v-model="leftDrawerOpen"
    side="left"
    elevated
    :width="85"
    class="meu-gradiente overflow-x-hidden"
    style="box-shadow: none"
  >
    <div class="flex justify-between h-full w-full items-center scroll">
      <div class="flex flex-col items-center justify-center w-full">
        <q-avatar rounded size="65px" class="shadow-md mb-9">
          <img :src="iconSidebar" alt="img" />
        </q-avatar>

        <nav class="flex flex-col gap-2 items-center w-full">
          <sidebarItens :to="'/dashboard'" :icon="IconDashboard" />
          <sidebarItens :to="'/estoque'" :icon="IconEstoque" />
          <sidebarItens :to="'/#'" :icon="IconPasta" />
          <sidebarItens :to="'/#'" :icon="IconDesenvolvimento" />
          <sidebarItens :to="'/#'" :icon="IconAviso" />
          <sidebarItens :to="'/#'" :icon="IconConfiguracoes" />
        </nav>
      </div>

      <div class="flex flex-col items-center gap-4 mb-5 w-full mt-auto">
        <q-separator dark class="w-16 bg-[#2B7FFF] opacity-50" />

        <q-avatar size="md" class="bg-[#436eed]">
          <p class="text-xs text-white m-0 font-bold">GM</p>
        </q-avatar>

        <div class="flex justify-center w-full cursor-pointer hover:opacity-80">
          <component :is="IconSair" class="text-white" />
        </div>
      </div>
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
import iconSidebar from 'src/assets/imgGlobal/IconSidebar.png';
import IconDashboard from 'src/assets/imgGlobal/IconDashboard.vue';
import IconEstoque from 'src/assets/imgGlobal/IconEstoque.vue';
import IconPasta from 'src/assets/imgGlobal/IconPasta.vue';
import IconDesenvolvimento from 'src/assets/imgGlobal/IconDesenvolvimento.vue';
import IconAviso from 'src/assets/imgGlobal/IconAviso.vue';
import IconConfiguracoes from 'src/assets/imgGlobal/IconConfiguracoes.vue';
import IconSair from 'src/assets/imgGlobal/IconSair.vue';
import sidebarItens from 'src/components/global/SidebarItens.vue';
import { useLayout } from 'src/composable/UseLayout';

const { leftDrawerOpen } = useLayout();
</script>
