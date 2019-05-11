import MemberStore from './member.store';
import ShopStore from './shop.store';

const memberStore = new MemberStore();
const shopStore = new ShopStore();

export default {
  memberStore: memberStore,
  shopStore: shopStore
};