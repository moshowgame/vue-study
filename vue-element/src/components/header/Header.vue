<template>

	<el-row class="header">
		<el-col :span="6"><div class="grid-content bg-purple">{{seller.name}}</div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple-light"><img :src="seller.avatar" alt="" @click="showDetail"></div></el-col>
		<el-col :span="12"><Detail></Detail></el-col>
	</el-row>
		
</template>

<script>	
	import {mapGetters} from 'vuex'
	import Detail from '../detail/Detail.vue'

	export default {
		created(){
			this.$store.dispatch('getSeller');
		},
		computed:{
			...mapGetters([
				'seller'
			]),
			msg(){
				return 'hello world';
			}
		},
		components:{
			Detail
		},
		methods:{
			showDetail(){
				this.$store.dispatch('showDetail');
			}
		}
	}
</script>

<style lang="less" scoped>
	.header{
		//height: 134px;
		background-color: rgba(7,17,27,0.1);
		font-size: 24px;
		img{
			width: 64px;
			height:64px;
			//border-radius: 2px;
		}
	}
	  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>