const app = new Vue({
    el : '#app',

    data : {
        disks : null
    },

    created() {
        axios.get('http://localhost/Php/php-ajax-dischi/index.php')
            .then( (resp)=> {
                this.disks = resp.data;
            } )
    }
})