import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export function useScrollNavigation(pages, pageContainerRef) {
  const router = useRouter();
  const route = useRoute();
  
  const isNavigating = ref(false);
  const transitionName = ref('slide-up');

  // Variable untuk menyimpan posisi awal sentuhan jari
  let touchStartY = 0;

  const goToPage = (index, direction) => {
    isNavigating.value = true;
    transitionName.value = direction;
    router.push({ name: pages[index] });

    setTimeout(() => {
      isNavigating.value = false;
    }, 1200);
  };

  // --- LOGIKA INTI NAVIGASI ---
  const attemptNavigation = (deltaY) => {
    if (isNavigating.value || !pageContainerRef.value) return;

    const container = pageContainerRef.value.$el || pageContainerRef.value;
    const currentIndex = pages.indexOf(route.name);

    // Hitung batas scroll (Boundary)
    // Toleransi 5px untuk mobile karena pixel layar beda-beda
    const isAtBottom = Math.abs(container.scrollHeight - container.clientHeight - container.scrollTop) < 5;
    const isAtTop = container.scrollTop <= 0;
    const hasNoScroll = container.scrollHeight <= container.clientHeight;

    if (deltaY > 0) {
      // === SWIPE/SCROLL KE BAWAH (Next Page) ===
      if ((hasNoScroll || isAtBottom) && currentIndex < pages.length - 1) {
        goToPage(currentIndex + 1, 'slide-up');
      }
    } else {
      // === SWIPE/SCROLL KE ATAS (Prev Page) ===
      if ((hasNoScroll || isAtTop) && currentIndex > 0) {
        goToPage(currentIndex - 1, 'slide-down');
      }
    }
  };

  // --- 1. HANDLE MOUSE WHEEL (DESKTOP) ---
  const handleWheel = (event) => {
    attemptNavigation(event.deltaY);
  };

  // --- 2. HANDLE TOUCH (MOBILE) ---
  const handleTouchStart = (event) => {
    // Simpan posisi awal jari saat menyentuh layar
    touchStartY = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    // Ambil posisi akhir jari saat dilepas
    const touchEndY = event.changedTouches[0].clientY;
    
    // Hitung jarak geser (Swipe Distance)
    const distance = touchStartY - touchEndY;

    // Tambahkan Threshold (Ambang Batas) minimal 50px
    // Agar sentuhan kecil tidak dianggap ganti halaman
    if (Math.abs(distance) > 50) {
      // Jika distance positif = Swipe Up (mirip scroll down mouse)
      // Jika distance negatif = Swipe Down (mirip scroll up mouse)
      attemptNavigation(distance);
    }
  };

  onMounted(() => {
    // Listener Mouse
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Listener Sentuhan Jari
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('wheel', handleWheel);
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchend', handleTouchEnd);
  });

  return {
    transitionName
  };
}