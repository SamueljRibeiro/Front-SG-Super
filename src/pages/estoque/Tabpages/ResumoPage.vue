<template>
  <div class="grid grid-cols-12 gap-6 w-full items-start">
    <section class="col-span-12 lg:col-span-9 flex flex-col gap-6">
      <div class="bg-white rounded-xl p-4 shadow-2 gap-2 flex z-10">
        <div class="flex items-center gap-2">
          <q-icon name="warning" color="warning" class="text-xl"></q-icon>
          <p class="font-semibold text-xl">Alertas críticos de estoque</p>
        </div>

        <alertProdutos />
      </div>

      <div class="bg-white rounded-xl p-6 flex-grow text-white shadow-2 z-10">
        <dashboardEstoque />
      </div>
    </section>

    <aside class="col-span-12 lg:col-span-3 bg-white rounded-xl h-[700px]  overflow-hidden p-4 shadow-2 pl-4 z-10">
      <div class="flex justify-between items-center">
        <p class="font-semibold text-xl pl-5">Atividades recentes</p>
        <q-icon name="more_horiz" class="text-3xl" />
      </div>
      <AtividadeRece/>
    </aside>
  </div>
</template>

<script setup lang="ts">
import alertProdutos from 'src/modules/estoque/components/AlertProdutos.vue';
import dashboardEstoque from 'src/modules/estoque/components/dashboardEstoque.vue';
import AtividadeRece from 'src/modules/estoque/components/AtividadeRece.vue';
</script>
