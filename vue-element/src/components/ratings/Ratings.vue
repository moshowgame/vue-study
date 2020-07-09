<template>
	<div class="goods">
		<div class="foods-wrapper">
				<el-table
							:data="ratings"
							style="width: 100%">
							<el-table-column
								prop="score"
                                label="评分">
							</el-table-column>
							<el-table-column
								prop="text"
                                label="内容">
							</el-table-column>
                            <el-table-column
								prop="username"
                                label="用户名">
							</el-table-column>
						</el-table>
		</div>
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		created(){
			this.$store.dispatch('getRatings');
		},
		computed:mapGetters([
			'ratings'
		])
	}
</script>

<style lang="less" scoped>
</style>