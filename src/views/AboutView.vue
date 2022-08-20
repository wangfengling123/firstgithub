<template>
  <div class="about">
    <!-- 搜索按钮 -->
    <div class="ax_default_shape">
      <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
    </div>
    <!-- 树形图 -->
    <div class="ax_default_text">
      <el-tree 
        :data="data" 
        :props="defaultProps" 
        @node-click="handleNodeClick" 
      />
    </div>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input2 = ref('')

export default {
  data() {
    return {
      input2,
      Search,
      data:[
        {
          label: 'Level one 1',
          children: [
            {
              label: 'Level two 1-1',
              children: [
                {
                  label: 'Level three 1-1-1',
                  children:[
                    {
                      label:'Level four 1-1-1-1'
                    }
                  ]
                },
              ],
            },
          ],
        }
      ],
      defaultProps:{
        children: 'children',
        label: 'label'
      }
    }
  },
  methods:{
   handleNodeClick:(data) => {
  console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.ax_default_shape{
    border-width: 0px;
    position: absolute;
    left: 289px;
    top: 79px;
    width: 240px;
    height: 32px;
    display: flex;
    font-family: 'Microsoft YaHei Regular', 'Microsoft YaHei';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.247058823529412);
    text-align: left;
    line-height: 22px;
    .text{
    position: absolute;
    align-self: flex-start;
    padding: 5px 0px 5px 12px;
    box-sizing: border-box;
    width: 100%;
}
}
.ax_default_text{
      border-width: 0px;
    position: absolute;
    left: 295px;
    top: 120px;
    width: 138px;
    height: 38px;
    display: flex;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.647058823529412);
    line-height: 22px;
}
</style>