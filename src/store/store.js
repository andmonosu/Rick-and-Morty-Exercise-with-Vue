// Create a new store instance.
import { createStore } from "vuex";
import { searchModule } from "@/store/searchModule.module";
import { charactersModule } from "@/store/charactersModule.module";

export const store = createStore({
  modules:{
    search:searchModule,
    characters:charactersModule
  }
})

