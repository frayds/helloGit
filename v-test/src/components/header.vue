<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" :to="{name:'main'}">{{logo}}</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="nav in navs">
                    <router-link class="nav-link" :to="{name:nav.name}">{{nav.li}}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default{
        name:'headerDiv',
        data(){
            return{
                navs:[
                    {li:'主页',name:'HelloWorld'},
                    {li:'登陆',name:'login'},
                    {li:'信息',name:'info'},
                    {li:'相册',name:'login'},
                    {li:'设置',name:'login'}
                ]
            }
        },
        props:['logo'],
        methods: {
            
        }
    }
</script>
