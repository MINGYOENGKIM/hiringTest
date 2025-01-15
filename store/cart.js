/**
 * B포인트 관련 store
 */
import { defineStore } from 'pinia';

let defaultState = {
  productList: []
};

export const useCartStore = defineStore('cart', {
    state: () => {
        return JSON.parse(JSON.stringify(defaultState));
    },
    actions: {
      addProductList(data) {
        this.productList.push(data);
      },
      delProductList(data) {
        this.productList.push(data);
      },
    }
});
