<template>
  <div class="w-full rounded-lg flex items-center gap-2 py-4 bg-red-100 border-2 border-[#ED3D45]">
    <component :is="iconAlert" class="ml-4" />
    <q-item-section side class="flex flex-col">
      <q-item-label class="text-[#82181A] font-semibold">1 produto SEM ESTOQUE</q-item-label>
      <q-item-label caption class="text-[#C10007]">Café Torrado 500g</q-item-label>
    </q-item-section>
  </div>

  <div
    class="w-full rounded-lg flex items-center bg-orange-50 gap-2 py-4 border-2 border-[#FFD6A7]"
  >
    <component :is="iconAlert" class="ml-4" />
    <q-item-section side class="flex flex-col">
      <q-item-label class="text-[#82181A] font-semibold">5 produtos com ESTOQUE BAIXO</q-item-label>
      <q-item-label caption class="text-[#C10007] truncate"
        >Feijão Preto 1Kg, Óleo de Soja 900Ml, Café Torrado 500g e mais 2</q-item-label
      >
    </q-item-section>
  </div>
</template>

<script setup lang="ts">
import iconAlert from 'src/assets/imgGlobal/iconAlert.vue';
</script>
