<template>
  <div class="search">
    <!-- 搜索首页表单 -->
    <el-autocomplete
       @select="goDetail"
      :trigger-on-focus="false"
      clearble
      placeholder="请入名称"
      v-model="hosname"
      :fetch-suggestions="fetchData"
    
    />
    <el-button type="primary" :icon="Search">搜索</el-button>
  </div>
</template>
<script setup lang="ts">
//引入图标
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
//引入请求方法
import { reqHospitalInfo } from "@/api/home";
import type { HospitalInfo } from "@/api/home/type";
import { useRouter } from 'vue-router';
//收集医院的关键字
let hosname = ref<string>("");
let $router=useRouter()
const fetchData = async (keyword: string, cb: any) => {
  //输入完关键字函数会执行一次
  let result: HospitalInfo = await reqHospitalInfo(keyword);
  //整理数据，变成人家组件需要数据格式
  let showData = result.data.map((item) => {
    return {
      value: item.hosname, //展示的医院的名字
      hoscode: item.hoscode, //存储医院的编码
    };
  });
  //给组件展示显示的数据
  cb(showData);
};
//点击某一个推荐项
const goDetail = (item: any) => {
  //点击推荐项目进入医院详情页,将来需要携带query参数(医院的编码)
  $router.push({ path: "/hospital/register",query:{hoscode:item.hoscode}});
};
</script>


<script lang="ts">
export default {
  name: "Search",
};
</script>


<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;

  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>