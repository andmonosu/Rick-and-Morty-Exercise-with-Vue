import { createStore } from "vuex";
import { searchModule } from "./searchModule.module";
import { charactersModule } from "./charactersModule.module"

export const store = createStore({
    modules:{
        search:searchModule,
        characters:charactersModule
    }
})
