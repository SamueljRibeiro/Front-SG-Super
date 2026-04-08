<template>
  <router-link :to="to" class="rounded-lg transition-all duration-500 group">
    <div
      class="relative transition-all duration-500 w-[66.15px] h-14 flex justify-center items-center rounded-xl"
      :class="
        isActive
          ? 'bg-white  transition-all duration-500  shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]'
          : 'hover:bg-[#4377f6]   transition-all duration-500  hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]'
      "
    >
      <div
        class="absolute left-0 group-hover:opacity-100 transition-all duration-500 w-1 h-9 rounded-r"
        :class="
          isActive
            ? 'bg-[#0036BC] opacity-100 transition-all duration-500'
            : 'bg-white opacity-0 transition-all duration-500'
        "
      ></div>

      <component class="md:w-6"   :is="icon" :class="isActive ? 'text-[#1556F5]' : 'text-white'" />
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  to: { type: String, required: true },
  icon: { type: Object, required: true },
});

const router = useRoute();

const isActive = computed(() => {
  return router.path.startsWith(props.to);
});
</script>
