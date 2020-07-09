<template>
	<div class="goods">
<!-- 		<div class="menu-wrapper">
			<ul>
				<li v-for="item in goods">
					{{item.name}}
				</li>
			</ul>
		</div> -->
		<div class="foods-wrapper">
				<el-card class="box-card" v-for="item in goods" :key="item.name">
					<div slot="header" class="clearfix">
					 	<span><el-tag>------ {{item.name}} ------</el-tag></span>
					</div>
					<el-table
							:data="item.foods"
							style="width: 100%">
							<el-table-column
								prop="name"
								width="480">
							</el-table-column>
							<el-table-column
								width="480">
							<template slot-scope="scope">
								<span style="margin-left: 20px"><img :src="scope.row.icon" alt="" style="width:200px;height:200px;"></span>
							</template>
							</el-table-column>
						</el-table>
					<div v-for="food in item.foods" :key="food.name" class="text item">
						<!-- {{food.name}}<img :src="food.icon" alt=""> -->
						
					</div>
					<br><br>
				</el-card>
				<hr>
		</div>
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		created(){
			this.$store.dispatch('getGoods');
		},
		computed:mapGetters([
			'goods'
		])
	}
</script>

<style lang="less" scoped>
  /* .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  } */
</style>