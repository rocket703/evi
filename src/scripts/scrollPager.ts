/** Syncs simple pager dots with a horizontal snap-scroll track. */
export function initScrollPager(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-scroll-pager]').forEach((pager) => {
    const track = pager.querySelector<HTMLElement>('[data-scroll-track]');
    const slides = [...pager.querySelectorAll<HTMLElement>('[data-scroll-slide]')];
    const dots = [...pager.querySelectorAll<HTMLButtonElement>('[data-scroll-dot]')];
    if (!track || slides.length === 0 || dots.length === 0) return;

    let index = 0;
    let raf = 0;

    const goTo = (i: number, behavior: ScrollBehavior = 'smooth') => {
      index = Math.max(0, Math.min(i, slides.length - 1));
      const slide = slides[index];
      const left = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
      track.scrollTo({ left, behavior });
      updateDots();
    };

    const updateDots = () => {
      dots.forEach((dot, i) => {
        const active = i === index;
        dot.classList.toggle('is-active', active);
        if (active) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    };

    const syncFromScroll = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let min = Infinity;
      slides.forEach((slide, i) => {
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const dist = Math.abs(center - slideCenter);
        if (dist < min) {
          min = dist;
          closest = i;
        }
      });
      if (closest !== index) {
        index = closest;
        updateDots();
      }
    };

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const i = Number(dot.dataset.scrollDot);
        if (!Number.isNaN(i)) goTo(i);
      });
    });

    track.addEventListener(
      'scroll',
      () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(syncFromScroll);
      },
      { passive: true },
    );

    updateDots();
  });
}
