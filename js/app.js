
Vue.component('headTitle', {
    props: ['nom-resto'],
    template:   `<div class="hero red is-small">
                    <div class="hero-body">
                        <h1 class="title has-text-centered has-text-white" id="title"><a class="has-text-white" href="index.html">Lib\'Resto {{ nomResto }}</a></h1>
                    </div>
                </div>`
})

Vue.component('foot',{
    props:['footer'],
    template:   `<footer class="footer red">
                    <div class="content has-text-centered has-text-white is-outlined is-paddingless-bottom">
                        <div class="columns">
                            <div class="column"><a class="has-text-white" href="legal.html">Mentions légales</a></div>
                            <div class="column"><a class="has-text-white" href="privacy.html">Politique de confidentialités</a></div>
                            <div class="column"><a class="has-text-white" href="auth.html">Administration</a></div>
                        </div>
                        <p>©Jérémy Duhamel - <a class="has-text-white" href="https://www.gnu.org/licenses/gpl-3.0.html">GPL 3.0 or Later</a></p>
                    </div>
                </footer>`
})

Vue.component('menuItem', {
    props: ['nomPlat', 'description'],
    template:   `<div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">{{ nomPlat }}</p>
                        <p class="subtitle">{{ description }}</p>
                    </article>
                </div>`
})

let vm = new Vue({
    el: '#app',
    data: {
        nomResto: "",
        titleIntro: "Choisissez votre restaurant !",
        paragraph: "En raison des mesures sanitaires nos restaurant passent au Click & Collect. Choisissez celui qui vous convient puis faites votre commande et venez la récupérer sur place ! Bon Appetit !",
        nomResto: "",
        description: "",
        footer:"Test"
    },
    methods: {
        menu: function(){
            fetch('http://127.0.0.1:8000/api/menus/')
                .then(resultat => resultat.json())
                .then(response=>{
                    this.nomPlat = resultat.json("hydra:member".Name)
                    this.description = resultat.json("hydra:member".Description)
                })
        }
    }
})
