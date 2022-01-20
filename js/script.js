const app = new Vue({
    el : '#app',

    data : {
        dischi : []
    },

    created() {
        axios.get('http://localhost/Php/php-ajax-dischi/index.php')
            .then( (resp)=> {
                console.log(resp.data);
            } )
    }
})