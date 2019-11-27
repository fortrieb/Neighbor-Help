import { Module } from 'vuex';
import { IState } from '@/app/state';
import { HelpDefaultState, IHelpState } from './state';
import { HelpActions } from './actions';
import { HelpGetters } from './getters';
import { HelpMutations } from './mutations';

export const HelpModule: Module<IHelpState, IState> = {
  namespaced: true,
  actions: {
    ...HelpActions,
  },
  getters: {
    ...HelpGetters,
  },
  state: {
    ...HelpDefaultState(),
  },
  mutations: {
    ...HelpMutations,
  },
};
