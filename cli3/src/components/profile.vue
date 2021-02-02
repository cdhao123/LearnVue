<template>
    <div>
        我是profile
        <!-- 同样通过这样取参数 -->
        <h2>{{$route.query.name}}</h2>
        <h2>{{$route.query.age}}</h2>
        </div>    
</template>

<script>
export default {
    name:'profile'
}
</script>