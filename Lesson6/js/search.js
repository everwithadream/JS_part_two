Vue.component('searchfilter', {
    props: ['userSearch','filtered','products'],
    methods: {
        filter(){
            let regexp = new RegExp(this.$parent.userSearch, 'i');
            this.$parent.filtered = this.$parent.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `
    <form action="#" class="search-form" @submit.prevent="filter">
    <input type="text" class="search-field" v-model="$parent.userSearch">
    <button class="btn-search" type="submit">
        <i class="fas fa-search"></i>
    </button>
</form>
    `
});
