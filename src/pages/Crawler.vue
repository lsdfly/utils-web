<template>
<div>
   <el-container>
          

            <el-main>
                <el-collapse>
                    <el-collapse-item v-for="(item,index) in tasks" :name="index">
                        <el-row slot="title">
                            <el-col :span="19">
                                任务{{(index+1)+item.action}}
                            </el-col>
                            <el-col :span="4">
                                <el-button @click.stop="editAction(index)" size="small" icon="el-icon-edit"></el-button>
                                <el-button @click.stop="delAction(index)" size="small" icon="el-icon-delete"></el-button>
                            </el-col>
                        </el-row>

                        <div>
                            </span>

                            {{item.value}}</div>

                    </el-collapse-item>
                </el-collapse>

                <el-button type="primary" @click="dialogVisible = true">增加任务</el-button>
                <el-button type="primary" @click="next">执行</el-button>

            </el-main>
        </el-container>
        <el-container>
            {{result}}
        </el-container>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="60%">


            <el-form ref="form" :model="task" label-width="80px">

                <el-form-item label="任务名称">
                    <el-select v-model="task.action" placeholder="">

                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="请求规则" v-show="task.action=='request'">
                    <el-select v-model="task.request ='get'" placeholder="">
                        <el-option value="get">get</el-option>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="匹配规则" v-show="task.action!='request'">
                    <el-input v-model="task.selector"></el-input>
                </el-form-item>
                <el-form-item label="添加前缀"  v-show="task.action=='selector'">
                    <el-input v-model="task.prefix"></el-input>
                </el-form-item>
                <el-form-item label="任务值" >
                    <el-input v-model="task.value"></el-input>
                </el-form-item>

                <el-form-item label="添加后缀"  v-show="task.action=='selector'">
                    <el-input v-model="task.suffix"></el-input>
                </el-form-item>
                <el-form-item label="排除"  v-show="task.action=='selector'">
                    <el-input v-model="task.exclude"></el-input>
                </el-form-item>
            </el-form>


            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addTask">确 定</el-button>
  </span>
        </el-dialog>
        </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Crawler',
   created() {

            },
            computed: {
                comValue: function() {
                    return this.task.value.split(',');
                }
            },
            methods: {
                editAction(index){
                    this.dialogVisible = true;
                    this.$set(this,'task',this.tasks[index]);
                    // this.task= this.tasks[index];
                },
                delAction(index){

                },
                addTask() {
                    this.dialogVisible = false
                    console.log(this.comValue)
                    this.tasks.push({
                        action: this.task.action,
                        request: this.task.request,
                        selector: this.task.selector,
                        type: this.task.type,
                        value: this.comValue
                    })
                },
                next() {
                    axios.post('/api', this.tasks).then((res) => {
                        //   console.log(res.data)
                        this.result = res.data;
                    })

                }
            },
            data(){
              return {

                result: '',
                task: {
                    new:true,
                    action: 'request',
                    type: '',
                    prefix: '',
                    suffix: '',
                    exclude: '',
                    excludeReg: '',
                    extend: '',
                    value: ''
                },
                tasks: [],
                dialogVisible: false,
                options: [{
                    value: 'request',
                    label: '添加URL'
                }, {
                    value: 'selector',
                    label: '增加选择器过滤'
                }, {
                    value: 'regexp',
                    label: '正则过滤'
                }, {
                    value: 'download',
                    label: '增加下载任务'
                }, {
                    value: '111',
                    label: '下载筛选'
                }, {
                    value: 'write',
                    label: '将结果写入文件'
                }],
                value: 'request'
            
            }}

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
