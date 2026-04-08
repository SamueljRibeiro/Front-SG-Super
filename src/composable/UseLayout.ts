import { ref } from 'vue';

const leftDrawerOpen = ref(false);

export function useLayout() {
  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  };

  return { leftDrawerOpen, toggleLeftDrawer };
}
