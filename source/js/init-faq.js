import { initAccordions } from './init-accordion';

export function initTabsAndAccordions() {
  const tabsButtons = document.querySelectorAll('.faq__tab-button');
  const faqContainers = document.querySelectorAll('.faq__accordion-container');

  faqContainers.forEach((container) => {
    if (container.classList.contains('faq__accordion-container--active')) {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }

    initAccordions(container);
  });

  tabsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const prevActiveItem = document.querySelector('.faq__accordion-container.faq__accordion-container--active');
      const prevActiveButton = document.querySelector('.faq__tab-button.faq__tab-button--active');

      if (prevActiveButton) {
        prevActiveButton.classList.remove('faq__tab-button--active');
      }

      if (prevActiveItem) {
        prevActiveItem.classList.remove('faq__accordion-container--active');
        prevActiveItem.style.display = 'none';
      }

      const nextActiveItemId = `#${button.getAttribute('data-tab')}`;
      const nextActiveItem = document.querySelector(nextActiveItemId);

      button.classList.add('faq__tab-button--active');
      nextActiveItem.classList.add('faq__accordion-container--active');
      nextActiveItem.style.display = 'block';

      initAccordions(nextActiveItem);
    });
  });
}
