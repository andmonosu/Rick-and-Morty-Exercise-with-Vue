<template>
  <header>
    <div class="header-icon">
    </div>
    <div class="header-banner">
    </div>
  </header>
  <main>
    <SideBar v-on:searchInput="setName" v-on:genderSelected="filterByGenderSelect" v-on:statusSelected="filterByStatusSelect"
             class="asideBar" :characters="charactersWithoutFiltering" v-on:genderChecked="filterByGenderChecked"
      v-on:statusChecked="filterByStatusChecked"></SideBar>
    <CardContainer class="container">
      <Card v-for="character in charactersVisible" :character="character"></Card>
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
      genderSelect:"",
      statusSelect:"",
      genderCheckbox:new Set(),
      statusCheckbox:new Set(),
      name:"",
      query:"",
      info:""
    }
  },computed: {
  charactersVisible(){
    let characters = this.characters;
      if (this.genderCheckbox.size!==0) {
        characters = characters.filter(character => this.genderCheckbox.has(character['gender']));
      }
      if (this.statusCheckbox.size!==0) {
        characters = characters.filter(character => this.statusCheckbox.has(character.status));
      }
    return characters;
    }
  },
  methods: {
    searchCharacters(){
      fetch(this.query).then(res => res.json()).then(results=>{
        this.characters = results.results;
        this.info = results.info;
      })
    },filterByGenderSelect(event){
      this.genderSelect = event;
    },filterByStatusSelect(event){
      this.statusSelect = event;
    },filterByGenderChecked(event){
      this.genderCheckbox = event;
    },filterByStatusChecked(event){
      this.statusCheckbox = event;
    },setName(event){
      this.name = event;
    },setQuery(event){
      this.query=event;
      this.searchCharacters();
    }

  },watch:{
    name(){
      this.query = `https://rickandmortyapi.com/api/character/?name=${this.name}&status=${this.statusSelect}&gender=${this.genderSelect}`
      this.searchCharacters();
      this.charactersWithoutFiltering = this.characters;
    },statusSelect(){
      this.searchCharacters();
    },genderSelect(){
      this.searchCharacters();
    }
  }
}
</script>
<style lang="css" scoped>
  main{
    height: fit-content;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-areas:
      "aside-bar card-container"
      "button-container button-container"
    ;
  }

  .asideBar{
    grid-area: aside-bar;
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



</style>
