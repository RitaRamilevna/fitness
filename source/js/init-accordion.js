export function initialAccordion() {
  const tabButtons = document.querySelectorAll('.faq__tab-button');
  const accordionContainers = document.querySelectorAll('.faq__accordion-container');

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      toggleTab(index, tabButtons, accordionContainers);
      initAccordions(accordionContainers[index]);
    });
  });
}

function toggleTab(index, tabButtons, accordionContainers) {
  tabButtons.forEach((button) => {
    button.classList.remove('faq__tab-button--active');
  });

  accordionContainers.forEach((container) => {
    container.classList.remove('faq__accordion-container--active');
  });

  tabButtons[index].classList.add('faq__tab-button--active');
  accordionContainers[index].classList.add('faq__accordion-container--active');
}

export function initAccordions(container) {
  const elements = Array.from(container.querySelectorAll('.faq__accordion-item'));

  elements.forEach((element, index) => {
    const button = element.querySelector('.faq__accordion-button');
    const content = element.querySelector('.faq__accordion-content');
    const icon = element.querySelector('.faq__accordion-icon');

    button.addEventListener('click', () => {
      toggleAccordion(button, content, icon);
    });

    if (index === 0) {
      openAccordion(button, content, icon);
    }
  });
}

function toggleAccordion(button, content, icon) {
  if (content.classList.contains('faq__accordion-content--active')) {
    closeAccordion(button, content, icon);
  } else {
    openAccordion(button, content, icon);
  }
}

function openAccordion(button, content, icon) {
  button.classList.add('faq__accordion-button--active');
  content.classList.add('faq__accordion-content--active');
  icon.classList.add('faq__accordion-icon--active');
  content.style.maxHeight = `${content.scrollHeight}px`;
}

function closeAccordion(button, content, icon) {
  button.classList.remove('faq__accordion-button--active');
  content.classList.remove('faq__accordion-content--active');
  icon.classList.remove('faq__accordion-icon--active');
  content.style.maxHeight = 0;
}
