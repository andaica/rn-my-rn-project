import MemberStore from './member.store';
import ShopStore from './shop.store';
import UIStore from './ui.store';

const memberStore = new MemberStore();
const shopStore = new ShopStore();
const uiStore = new UIStore();

export default {
  memberStore: memberStore,
  shopStore: shopStore,
  uiStore: uiStore
};