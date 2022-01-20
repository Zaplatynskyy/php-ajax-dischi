const app = new Vue({
    el : '#app',

    data : {
        disks : null,
        genres : [],
        genreSelected : ""
    },

    methods : {
        // funzione per individuare i generi disponibili nell'array disk dopo la chiamata axios
        takeGenres: function() {
            this.disks.forEach(element => {
                if(!this.genres.includes(element.genre)) {
                    this.genres.push(element.genre)
                }
            });
        },

        // funzione di chiamata axios al cambio della option selezionata, quindi al cambio del genere , cambia l'array disks con nuovi elementi
        filterGenre: function() {
            axios.get('http://localhost/Php/php-ajax-dischi/index.php', {
                params : {
                    genre : this.genreSelected
                }
            })
                .then( (resp)=> {
                    this.disks = resp.data;
                } )
        }
    },

    created() {
        axios.get('http://localhost/Php/php-ajax-dischi/index.php')
            .then( (resp)=> {
                this.disks = resp.data;
                this.takeGenres();
            } )
    }
})