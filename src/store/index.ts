
import { User } from '@/models/user';
import { createStore } from 'vuex'
import cartModule from './cart';
import productsModule from './products';
import usersModule from './users';

export interface IState {
  authUser: User | null;
  greeting: string;
}

export default createStore({
  state: {
    authUser: null,
    greeting: 'Bienvenida',
    token: '',
  },
  getters: {
    saludo(state) {
      return state.greeting;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart: cartModule,
    users: usersModule,
    products: productsModule
  }
})