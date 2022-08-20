<template>
  <div class="demo-input-suffix">
    <el-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Using attributes</span
      >
      <el-input
        v-model="input1"
        class="w-50 m-2"
        placeholder="Pick a date"
        :suffix-icon="Calendar"
      />
      <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
    </el-row>
  </div>
  <div class="demo-input-suffix">
    <el-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Using slots</span
      >
      <el-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
        <template #suffix>
          <el-icon class="el-input__icon"><calendar /></el-icon>
        </template>
      </el-input>
      <el-input v-model="input4" class="w-50 m-2" placeholder="Type something">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
    </el-row>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
