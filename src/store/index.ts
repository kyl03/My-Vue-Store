
import { User } from '@/models/user';
import { createStore } from 'vuex'
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
    users: usersModule,
    products: productsModule
  }
})