import Validator from '../utils/validator.js';
import { MIN_PRICE, DIVISION, ERR_MESSAGE } from '../data/constant.js';

export const getNotValidPriceMessage = input => {
  if (!Validator.isGreater(input, MIN_PRICE)) {
    return ERR_MESSAGE.LESS_INPUT;
  }

  if (!Validator.isdivided(input, DIVISION)) {
    return ERR_MESSAGE.DIVISIBLE_BY;
  }

  return null;
};

export const getNotValidNameMessage = (list, input) => {
  if (Validator.isDuplicated(list, 'name', input)) {
    return ERR_MESSAGE.DUPLICATED_NAME;
  }

  return null;
};

export const getErrorMessage = (productList, name, price) => {
  if (getNotValidNameMessage(productList, name) !== null) {
    return getNotValidNameMessage(productList, name);
  }

  if (getNotValidPriceMessage(price) !== null) {
    return getNotValidPriceMessage(price);
  }

  return null;
};