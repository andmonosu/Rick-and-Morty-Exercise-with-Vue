<template>
  <header>
    <div class="header-icon">
    </div>
    <div class="header-banner">
    </div>
  </header>
  <main>
    <SideBar v-on:searchInput="setName" v-on:genderSelected="setFilterByGender" v-on:statusSelected="setFilterByStatus"
             class="asideBar" :characters="charactersWithoutFiltering"></SideBar>

      <CardContainer class="container">
        <TransitionGroup name="list">
          <Card v-for="character in characters" :character="character"></Card>
        </TransitionGroup>
      </CardContainer>

    <ButtonContainer class="buttons" :info="info"  v-on:sendQuery="setQuery"></ButtonContainer>
  </main>
  <footer>
  </footer>
</template>
<script lang="js">
import SideBar from "./components/SideBar.vue";
import CardContainer from "./components/CardContainer.vue";
import ButtonContainer from "./components/ButtonContainer.vue";
import Card from "@/components/Card.vue";

export default {
  components: { Card, ButtonContainer, CardContainer, SideBar },
  data(){
    return {
      characters: [],
      charactersWithoutFiltering:[],
      gender:"",
      status:"",
      name:"",
      query:"",
      info:""
    }
  },
  methods: {
    searchCharacters(){
      fetch(this.query).then(res => res.json()).then(results=>{
        if(results.error==="There is nothing here"){
          this.characters = [];
          this.info = "";
        }else{
          this.characters = results.results;
          this.info = results.info;
        }
      })
    },setFilterByGender(event){
      this.gender = event;
    },setFilterByStatus(event){
      this.status = event;
    },setName(event){
      this.name = event;
    },setQuery(event){
      this.query=event;
      this.searchCharacters();
    }

  },watch:{
    name(){
      this.query = `https://rickandmortyapi.com/api/character/?name=${this.name}&status=${this.status}&gender=${this.gender}`;
      this.searchCharacters();
      this.charactersWithoutFiltering = this.characters;
    },status(){
      this.query = `https://rickandmortyapi.com/api/character/?name=${this.name}&status=${this.status}&gender=${this.gender}`;
      this.searchCharacters();
    },gender(){
      this.query = `https://rickandmortyapi.com/api/character/?name=${this.name}&status=${this.status}&gender=${this.gender}`;
      this.searchCharacters();
    },
    },mounted() {
      this.query = `https://rickandmortyapi.com/api/character`
      this.searchCharacters()
    }
}
</script>
<style lang="css" scoped>
  main{
    height: fit-content;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 3fr;
    grid-row-gap: 6rem;
    grid-template-areas:
      "aside-bar card-container"
      "button-container button-container"
    ;
  }

  .asideBar{
    grid-area: aside-bar;
    object-fit: contain;
  }

  .container{
    grid-area: card-container;
  }

  .buttons{
    grid-area: button-container;
    display: flex;
    justify-content: space-around;
  }

  header{
    height: 6rem;
    max-height: 6rem;
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: auto;
    grid-template-areas:
      "icon banner"
  ;
    margin: 0.5rem;
    border-radius: 0.5rem;
    border-color: black;
  }


  .header-icon{
    background-image: url('https://wallpapers-clan.com/wp-content/uploads/2021/08/rick-and-morty-portal-background-scaled.jpg');
    grid-area: icon;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0.5rem;
    border-color: black;
    border-width: 0.5rem;
    border-style: solid;
    box-shadow: 10px 5px 5px lightgreen;
  }

  .header-banner{
    grid-area: banner;
    background-image: url('https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png');
    background-size:contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: lightgray;
    height: 70%;
    margin-top: 0.6rem;
    border-bottom-right-radius:0.5rem;
    border-top-right-radius:0.5rem;
    border-color: black;
    border-width: 0.35rem;
    border-style: solid;
    box-shadow: 10px 5px 5px lightgray;
  }

  @media only screen and (max-width: 800px) {
    main {
      grid-template-columns: 30% 70%;
    }
  }
  @media only screen and (max-width: 500px) {
    main {
      grid-template-columns: auto;
      grid-template-rows: 1fr auto 1fr;
      grid-template-areas: "aside-bar" "card-container" "button-container";
    }
  }

  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 1.0s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .list-leave-active {
    position: absolute;
  }


</style>
