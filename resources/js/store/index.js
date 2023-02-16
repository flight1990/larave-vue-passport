import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from '@/store/modules/auth';
import loader from '@/store/modules/loader';
import errors from '@/store/modules/errors';

export default createStore({
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth,
        loader,
        errors
    }
});
