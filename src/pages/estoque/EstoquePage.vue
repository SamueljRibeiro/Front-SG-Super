<template>
  <q-tabs
    align="left"
    indicator-color="transparent"
    class="text-black border-b-2 mb-5 fixed bg-white w-[90%] z-20"
  >
    <HeaderTabs :to="'/estoque/resumo'" :lebal="'Resumo'" />
    <HeaderTabs :to="'/estoque/cadastro'" :lebal="'Cadastro'" />
    <HeaderTabs :to="'/estoque/lojas'" :lebal="'Lojas'" />
    <HeaderTabs :to="'/#'" :lebal="'Gestão de separação'" />
    <HeaderTabs :to="'/#'" :lebal="'MD-e/Compras'" />
    <HeaderTabs :to="'/#'" :lebal="'Relatórios'" />
  </q-tabs>

  <div class="mt-12">
    <router-view class="py-2 px-2" v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import HeaderTabs from 'src/components/global/HeaderTabs.vue';
</script>
