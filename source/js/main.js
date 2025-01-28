import { initVideo } from './init-video';
import { initPrice } from './init-price';
import { onButtonPriceHover } from './hovered-price';
import { initSlider, initSwiper } from './modules/slider';
import { initTabsAndAccordions } from './init-faq';
import { initialAccordion } from './init-accordion';
import { validateForm } from './modules/form-validate/form';


document.addEventListener('DOMContentLoaded', () => {
  initVideo();
  initPrice();
  onButtonPriceHover();
  initSlider();
  initSwiper();
  validateForm('.form__contacts');

  initTabsAndAccordions();
  initialAccordion();

});
