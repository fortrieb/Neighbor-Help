import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import Help from './Help.vue';
import { IHelpState } from '../state';
import { HelpModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Help.vue', () => {
  let store: Store<IHelpState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        help: HelpModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Help, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    Help.prefetch({});

    expect(wrapper.find('h1').text()).toBe('Help');
  });
});
