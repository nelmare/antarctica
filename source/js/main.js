import {iosVhFix} from './utils/ios-vh-fix';
import {toggleMenu} from './modules/mobile-menu';
import {anchorsScroll} from './modules/anchors-scroll';
import {localStorageDataSet} from './modules/form';
import {userPhoneInputValidate} from './modules/phone-validate';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  iosVhFix();

  // Modules
  toggleMenu();
  anchorsScroll();
  localStorageDataSet();
  userPhoneInputValidate();
});
