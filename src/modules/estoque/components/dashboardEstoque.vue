<template>
  <div class="z-10">
    <div class="flex justify-between">
      <p class="text-black font-semibold text-xl">Evolução de estoque</p>
      <q-select
        class="custom-select mb-1"
        v-model="periodo"
        transition-show="jump-up"
        transition-hide="jump-up"
        dropdown-icon="keyboard_arrow_down"
        color="grey"
        emit-value
        map-options
        :options="opcoesFiltro"
        style="width: 120px"
        outlined
        dense
        options-dense
      />
    </div>

    <div>
      <apexchart
        class="border-none"
        type="area"
        height="350"
        :options="chartOp"
        :series="dadosFiltrados"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type apexchart from 'vue3-apexcharts';
import { reactive, ref, computed } from 'vue';
import type * as InterfacesTypes from 'src/modules/estoque/types/InterfacesType';

const Valuess = reactive<InterfacesTypes.filter[]>([
  {
    name: 'Semana',
    data: [100000, 9999, 350000, 380000, 280000, 320000, 350000],
  },

  {
    name: 'Mês',
    data: [100000, 999, 530000, 360000],
  },

  {
    name: 'Ano',
    data: [
      150000, 99999, 390000, 380000, 300000, 350000, 310000, 580000, 150000, 99999, 390000, 380000,
    ],
  },
]);

const periodo = ref('Todos');

const dadosFiltrados = computed(() => {
  if (periodo.value === 'Todos') {
    return Valuess;
  }

  return Valuess.filter((item) => {
    return item.name === periodo.value;
  });
});

const opcoesFiltro = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Semana', value: 'Semana' },
  { label: 'Mês', value: 'Mês' },
  { label: 'Ano', value: 'Ano' },
];

const chartOp = computed(() => {
  let categories: string[] = [];
  let cores: string[] = [];

  switch (periodo.value) {
    case 'Todos':
      categories = [
        'Período 1',
        'Período 2',
        'Período 3',
        'Período 4',
        'Período 5',
        'Período 6',
        'Período 7',
        'Período 8',
        'Período 9',
        'Período 10',
        'Período 11',
        'Período 12',
      ];
      cores = ['#2B7FFF', '#31CC62', '#FFBB33'];

      break;
    case 'Semana':
      categories = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
      cores = ['#2B7FFF'];

      break;
    case 'Mês':
      categories = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
      cores = ['#31CC62'];

      break;
    case 'Ano':
      categories = [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ];
      cores = ['#FFBB33'];
      break;
  }
  return {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: { enabled: false },
    },
    colors: cores,
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    legend: {
      show: false, // Isso oculta a legenda (os pontinhos coloridos e nomes)
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    grid: {
      borderColor: '#e7e7e7',
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
    },
    xaxis: {
      categories: categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
      
        formatter: (val: number) => {
          if (val === undefined || val === null) return 'R$';
          return `R$ ${val.toLocaleString('pt-BR')}`;
        },
      },
      axisBorder: { show: false },
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '12px',
        fontFamily: 'inherit',
      },
      x: {
        show: true,
      },
      marker: {
        show: true,
      },
    },
  };
});
</script>
