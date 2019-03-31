<template>
    <div class="error">
        <h3>Error</h3>
        Error
        Error
        Error
    </div>
</template>

<style>
.error{height: 5rem;}
</style>
<script>
export default {
    mounted(){
        this.$root.headerdisplay = false;
        this.$root.footerdisplay = false
    }
}
</script>

