export function onButtonPriceHover() {
  const priceButtons = document.querySelectorAll('.price__button');

  priceButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      const priceItem = button.closest('.price__item');
      if (priceItem) {
        priceItem.classList.add('price__item--hover');
      }
    });

    button.addEventListener('mouseleave', () => {
      const priceItem = button.closest('.price__item');
      if (priceItem) {
        priceItem.classList.remove('price__item--hover');
      }
    });
  });
}
