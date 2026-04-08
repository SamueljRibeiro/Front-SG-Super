<template>
  <div class="rounded-t-lg transition-all duration-500 group">
    <q-route-tab
      :to="to"
      dense
      no-caps
      :ripple="false"
      class="rounded-t-xl mr-8 min-h-0 py-1 font-medium text-[16px]"
      :label="lebal"
      :class="
        isActive
          ? 'bg-[#155DFC] text-white transition-all duration-500'
          : 'hover:bg-[#4377f6]  hover:text-white  transition-all duration-500'
      "
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  to: { type: String, required: true },
  lebal: { type: String, required: true },
});

const router = useRoute();

const isActive = computed(() => {
  return router.path === props.to;
});
</script>
