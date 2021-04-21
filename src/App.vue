<template>
  <div id="app">
    <h1>ToDoList</h1>
    <input type="text" v-model="value" @keydown="enterAdd" placeholder="请在此处输入">>
    <br>
    <button @click="addMatter">增加</button>
    <hr>
    <h2>正在进行</h2>
    <ul>
      <li v-for="(item,index) in list" :key="item.id" v-if="!item.flag" class="nobg">
        <label><input type="checkbox" v-model="item.flag" @change="zd">{{item.title}}</label>
        <a href="javascript:;" @click="del(index)" :index="index">删除</a>
      </li>
    </ul>
     <h2>已完成</h2>
    <ul>
      <li v-for="item in list" :key="item.id" v-if="item.flag" class="yesbg">
        <label><input type="checkbox" v-model="item.flag" @change="zd">{{item.title}}</label>
        <a href="javascript:;" @click="del(index)">删除</a>
      </li>
    </ul>
  </div>
</template>

<script>
const save = require('./save')
export default {
  name:'app',
  data() {
    return {
      value:'',
    list:[]
    }
  },
  methods:{
    //增加事情
    addMatter(){
      this.value = this.value.trim()
      if(this.value == ''){
        alert('请输入')
      }else{
        this.list.push({
        title:this.value,
        flag:false
      })
      this.value = ''
      }
      //localStorage.setItem('list',JSON.stringify(this.list))
      save.bc('list',this.list)
    },
    //回车键触发
    enterAdd(e){
      if(e.keyCode == 13){
        this.addMatter()
      }
    },
    //删除
    del(index){
      this.list.splice(index,1)
      //localStorage.setItem('list',JSON.stringify(this.list))
      save.bc('list',this.list)
    },
    //表单组件发送改变时触发
    zd(){
      //localStorage.setItem('list',JSON.stringify(this.list))
      save.bc('list',this.list)
    }
  },
  mounted:function(){
    if(JSON.parse(localStorage.getItem('list'))){
    //this.list = JSON.parse(localStorage.getItem('list'))
    this.list = save.dq('list')
    }
  }
}

</script>
<style>
a{
  text-decoration: none;
  color: darkgray;
  margin-left: 20px;
}
li{
  list-style: none;
  margin: 10px 0;
  font-size: 25px;
}
input[type="checkbox"]{
  vertical-align: middle;
  zoom:300%;
}
input[type="text"]{
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  zoom: 200%;
}
button{
  margin-top:10px;
  width: 500px;
  border:solid 5px #4d4e53;
  border-radius:40px;
  outline:none;
}
button:hover{
  background-color:#778899;
  color: aliceblue;
  } 
.nobg{
  background-color: #f5f5dc;
}
.yesbg{
  background-color: #F7EED6;
}
h1{
  padding: 0 187px;
}
#app{
  width: 500px;
  margin: 50px auto;
}
</style>
