(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-151ac6da","chunk-2d22b908","chunk-2d0b5f55","chunk-2d0b9626"],{"0fea":function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var s=a("b775"),r={user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function n(e){return Object(s["b"])({url:r.user,method:"get",params:e})}function o(e){return Object(s["b"])({url:r.service,method:"get",params:e})}function i(e){return Object(s["b"])({url:r.orgTree,method:"get",params:e})}},"1ab1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.emptyShow&&0===e.roles.length?a("a-empty",{attrs:{"image-style":{height:"60px"}}},[a("span",{attrs:{slot:"description"},slot:"description"},[e._v(" 暂无角色信息 "),a("a",{directives:[{name:"has-permission",rawName:"v-has-permission",value:e.actionName,expression:"actionName"}],on:{click:e.addRole}},[e._v("去添加")])])]):e._e(),a("description-list",{attrs:{title:"",size:"small",column:1}},[e.roles.length>0?a("description-list-item",{attrs:{label:"角色信息( "+e.roles.length+" )"}},e._l(e.roles,(function(t){return a("a-tag",{key:t.value,attrs:{color:"purple"}},[e._v(e._s(t.label))])})),1):e._e()],1)],1)},r=[],n=(a("4160"),a("c975"),a("159b"),a("2af9")),o=n["a"].Item,i={name:"RolePanel",components:{DescriptionList:n["a"],DescriptionListItem:o},props:{roleIds:{type:Array,default:function(){return[]}},emptyShow:{type:Boolean,default:!0},actionName:{type:String,default:""}},computed:{roles:function(){var e=[],t=this;return this.$store.getters.allRoles.forEach((function(a){t.roleIds.indexOf(a.value)>-1&&e.push(a)})),e}},created:function(){},methods:{addRole:function(){this.$emit("add-action")}}},l=i,c=a("2877"),u=Object(c["a"])(l,s,r,!1,null,"22ae9630",null);t["default"]=u.exports},"335e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("standard-drawer",{ref:"standardDrawer",attrs:{title:e.readOnly?"详情":e.form.id?"用户编辑":"新增操作",confirmLoading:e.confirmLoading,editable:!e.readOnly},on:{close:e.close,confirm:e.confirm}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{ref:"username",attrs:{label:"用户名",prop:"username"}},[a("a-input",{attrs:{disabled:!e.readOnly&&"undefined"!==typeof e.form.id,placeholder:"请输入菜单名称"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("a-form-model-item",{attrs:{label:"昵称",prop:"nickname"}},[a("a-input",{attrs:{placeholder:"请输入昵称或真实姓名"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),a("a-form-model-item",{attrs:{label:"邮箱地址",prop:"email"}},[a("a-auto-complete",{attrs:{"data-source":e.emailDataSource,placeholder:"请输入邮箱地址"},on:{change:e.handleEmailChange},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("a-form-model-item",{attrs:{label:"手机号",prop:"mobile"}},[a("a-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),a("a-form-model-item",{attrs:{label:"状态",prop:"status"}},[a("a-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.userStatus,(function(t){return a("a-radio-button",{key:t.value,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"角色分配",prop:"description"}},[a("a-select",{attrs:{mode:"multiple",placeholder:"请选择角色",allowClear:""},model:{value:e.form.roleIds,callback:function(t){e.$set(e.form,"roleIds",t)},expression:"form.roleIds"}},e._l(e.allRoles,(function(t){return a("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"独立权限",prop:"resourceIds"}},[a("a-tree",{staticStyle:{width:"100%"},attrs:{checkable:"","auto-expand-parent":!0,"default-expand-all":!0,multiple:!0,"check-strictly":!0,"default-expanded-keys":e.defaultExpandedKeys,"tree-data":e.treeData,replaceFields:{title:"name",key:"id",value:"id"}},model:{value:e.form.resourceIds,callback:function(t){e.$set(e.form,"resourceIds",t)},expression:"form.resourceIds"}})],1)],1)],1)},r=[],n=(a("c975"),a("4d63"),a("ac1f"),a("25f0"),a("b775")),o=a("2af9"),i={name:"UserEditPanel",components:{StandardDrawer:o["h"],IconSelector:o["d"]},data:function(){return{userStatus:this.$dic.query("sys_user_state"),emailDataSource:[],confirmLoading:!1,defaultExpandedKeys:[],treeData:[],readOnly:!1,labelCol:{span:4},wrapperCol:{span:18},form:{username:"",nickname:"",resourceIds:[],status:void 0,roleIds:[]},rules:{username:[{required:!0,message:"此项为必输项",trigger:"blur"},{max:20,message:"最多输入20个字符",trigger:"change"}],nickname:[{required:!0,message:"此项为必输项",trigger:"blur"},{max:50,message:"最多输入50个字符",trigger:"change"}],status:[{required:!0,message:"此项为必选项",trigger:"change"}],mobile:[{pattern:new RegExp("^[1][3-8][0-9]{9}$"),message:"格式不合法",trigger:"change"}],email:[{type:"email",message:"格式不合法",trigger:"change"}]}}},computed:{allRoles:function(){return this.$store.getters.allRoles}},methods:{show:function(e,t){e&&(this.form=Object.assign({},e)||{}),this.readOnly="undefined"!==typeof t&&!0===t,this.defaultExpandedKeys=this.form.resourceIds,this.loadMenuTree(),this.$refs.standardDrawer.show()},confirm:function(){var e=this;this.confirmLoading=!0,this.$refs.ruleForm.validate((function(t){var a=Object.assign({},e.form);if(a.resourceIds instanceof Array||!a.resourceIds.checked||(a.resourceIds=a.resourceIds.checked),!t)return e.confirmLoading=!1;(e.form.id?e.$http.put:e.$http.post)("user",a).then((function(t){e.$message.success("操作成功！"),e.$emit("handle-success"),e.$refs.standardDrawer.close()})).catch((function(t){e.confirmLoading=!1}))}))},close:function(){this.form={name:"",resourceIds:[],nickname:"",status:void 0,roleIds:[]},this.confirmLoading=!1,this.$refs.ruleForm.resetFields()},loadMenuTree:function(){var e=this;Object(n["b"])({url:"resource/tree?status=1",method:"get"}).then((function(t){e.treeData=t.data||[]}))},handleEmailChange:function(e){this.emailDataSource=!e||e.indexOf("@")>=0?[]:["".concat(e,"@gmail.com"),"".concat(e,"@163.com"),"".concat(e,"@qq.com")]}}},l=i,c=a("2877"),u=Object(c["a"])(l,s,r,!1,null,"18598f1a",null);t["default"]=u.exports},"6eff":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-view",{attrs:{avatar:"",title:!1,"header-disabled":!0}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"用户名/昵称"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.queryParam.searchWord,callback:function(t){e.$set(e.queryParam,"searchWord",t)},expression:"queryParam.searchWord"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"状态"}},[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.queryParam.status,callback:function(t){e.$set(e.queryParam,"status",t)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:"-1"}},[e._v("全部")]),a("a-select-option",{attrs:{value:"0"}},[e._v("禁用")]),a("a-select-option",{attrs:{value:"1"}},[e._v("正常")]),a("a-select-option",{attrs:{value:"2"}},[e._v("锁定")])],1)],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.reset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-page-operator-wrapper"},[a("a-button",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"sys:user:save",expression:"'sys:user:save'"}],attrs:{type:"primary",ghost:""},on:{click:function(t){return e.$refs.editPanel.show()}}},[e._v("新增")]),a("a-button",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"sys:user:delete",expression:"'sys:user:delete'"}],attrs:{disabled:0===e.selectedRowKeys.length},on:{click:function(t){return e.batchDelete(e.selectedRowKeys)}}},[e._v("删除")]),a("a-dropdown",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"sys:user:export",expression:"'sys:user:export'"}]},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"export-data",on:{click:e.exprotExcel}},[e._v("导出Excel")])],1),a("a-button",[e._v(" 更多操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1)],1),a("s-table",{ref:"table",attrs:{columns:e.columns,data:e.loadData,"row-selection":e.rowSelection,"row-key":"id"},scopedSlots:e._u([{key:"expandedRowRender",fn:function(t){return a("div",{staticStyle:{margin:"0"}},[a("role-panel",{attrs:{"role-ids":t.roleIds||[],"action-name":"sys:user:update"},on:{"add-action":function(a){return e.$refs.editPanel.show(t)}}}),a("a-divider",{staticStyle:{"margin-bottom":"6px","margin-top":"6px"},attrs:{type:"horizontal",dashed:!0}}),a("resource-panel",{attrs:{resourceIds:t.resourceIds||[],"action-name":"sys:user:update"},on:{"add-action":function(a){return e.$refs.editPanel.show(t)}}})],1)}},{key:"status",fn:function(t){return[2===t?a("a-tag",{attrs:{color:"red"}},[e._v(e._s(e._f("getLabel")(t,"sys_user_state")))]):1===t?a("a-tag",{attrs:{color:"green"}},[e._v(e._s(e._f("getLabel")(t,"sys_user_state")))]):a("a-tag",[e._v(e._s(e._f("getLabel")(t,"sys_user_state")))])]}},{key:"action",fn:function(t,s){return a("span",{},[a("a",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"sys:user:update",expression:"'sys:user:update'"}],on:{click:function(t){return e.$refs.editPanel.show(s)}}},[e._v("编辑")]),a("a-divider",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"sys:user:update",expression:"'sys:user:update'"}],attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v(" 更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.$refs.editPanel.show(s,!0)}}},[e._v("详情")])]),0===s.status?a("a-menu-item",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"sys:user:useable",expression:"'sys:user:useable'"}]},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.updateStatus(s,1)}}},[e._v("启用")])]):e._e(),1===s.status?a("a-menu-item",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"sys:user:disabled",expression:"'sys:user:disabled'"}]},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.updateStatus(s,0)}}},[e._v("禁用")])]):e._e(),1===s.status?a("a-menu-item",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"sys:user:locked",expression:"'sys:user:locked'"}]},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.updateStatus(s,2)}}},[e._v("锁定")])]):e._e(),2===s.status?a("a-menu-item",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"sys:user:unlock",expression:"'sys:user:unlock'"}]},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.updateStatus(s,1)}}},[e._v("解锁")])]):e._e(),a("a-menu-item",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"sys:role:delete",expression:"'sys:role:delete'"}]},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.deleteRecord(s)}}},[e._v("删除")])])],1)],1)],1)}}])}),a("user-edit-panel",{ref:"editPanel",on:{"handle-success":e.formHandleSuccess}})],1)],1)},r=[],n=(a("a15b"),a("680a")),o=a("2af9"),i=a("0fea"),l=a("335e"),c=a("1ab1"),u=a("f008"),d=o["a"].Item,m={name:"TableList",components:{PageView:n["c"],STable:o["g"],DescriptionList:o["a"],DescriptionListItem:d,UserEditPanel:l["default"],RolePanel:c["default"],ResourcePanel:u["default"]},data:function(){var e=this;return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},form:null,advanced:!1,queryParam:{status:"-1"},columns:[{title:"昵称",dataIndex:"nickname"},{title:"用户名",dataIndex:"username"},{title:"邮箱",dataIndex:"email"},{title:"手机号",dataIndex:"mobile"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",width:"150",dataIndex:"action",scopedSlots:{customRender:"action"}}],loadData:function(t){var a=Object.assign({},e.queryParam);return"-1"===a.status&&delete a.status,Object(i["c"])(Object.assign(t,a)).then((function(e){return{data:e.page.records,pageSize:e.page.limit,pageNo:e.page.pageNo,totalCount:e.page.total}}))},selectedRowKeys:[],selectedRows:[],rowSelection:{onChange:function(t,a){e.selectedRowKeys=t,e.selectedRows=a},onSelect:function(e,t,a){},onSelectAll:function(e,t,a){}}}},created:function(){},methods:{search:function(){this.$refs.table.refresh(!0)},reset:function(){this.queryParam={status:"-1"},this.$refs.table.refresh(!0)},updateStatus:function(e,t){var a=this;this.$http.put("/user/updateStatus",{id:e.id,status:t}).then((function(e){e.data&&a.$refs.table.refresh()}))},deleteRecord:function(e){var t=this;this.$confirm({title:"警告",content:"真的要删除 ".concat(e.nickname," 吗?"),okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){t.handleDelete([e.id],{success:function(){},done:function(){}})}})},batchDelete:function(e){var t=this;this.$confirm({title:"警告",content:"真的要删除这 ".concat(e.length," 位用户吗?"),okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){t.handleDelete(e,{success:function(){},done:function(){}})}})},handleDelete:function(e,t){var a=this;e.length>0&&this.$http.delete("user/"+e.join(",")).then((function(e){a.$message.success("已成功删除"),a.$refs.table.refresh(),t&&("function"===typeof t.done&&t.done.call(a),"function"===typeof t.success&&t.success.call(a,e))})).catch((function(e){t&&("function"===typeof t.done&&t.done.call(a),"function"===typeof t.fail&&t.fail.call(a,e))}))},exprotExcel:function(){},toggleAdvanced:function(){this.advanced=!this.advanced},formHandleSuccess:function(){this.$refs.table.refresh()}},watch:{}},f=m,p=a("2877"),h=Object(p["a"])(f,s,r,!1,null,null,null);t["default"]=h.exports},f008:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.emptyShow&&0===e.resourcesTree.menus.length&&0===e.resourcesTree.mix.length?a("a-empty",{attrs:{"image-style":{height:"60px"}}},[a("span",{attrs:{slot:"description"},slot:"description"},[e._v(" 无独立权限 "),a("a",{directives:[{name:"has-permission",rawName:"v-has-permission",value:e.actionName,expression:"actionName"}],on:{click:e.addPermission}},[e._v("去添加")])])]):e._e(),a("description-list",{attrs:{title:"",size:"small",column:1}},[e.resourcesTree.menus.length>0?a("description-list-item",{attrs:{label:"独立菜单( "+e.resourcesTree.menus.length+" )"}},e._l(e.resourcesTree.menus,(function(t){return a("a-tag",{key:t.id,attrs:{color:"orange"}},[e._v(e._s(t.label))])})),1):e._e()],1),e.resourcesTree.mix.length>0?a("description-list",{attrs:{title:"",size:"small",column:2}},e._l(e.resourcesTree.mix,(function(t){return a("description-list-item",{key:t.id,attrs:{label:t.label}},e._l(t.btns,(function(t){return a("a-tag",{key:t.id,attrs:{color:"cyan"}},[e._v(e._s(t.label))])})),1)})),1):e._e()],1)},r=[],n=(a("4160"),a("c975"),a("45fc"),a("159b"),a("2af9")),o=n["a"].Item,i={name:"ResourcePanel",components:{DescriptionList:n["a"],DescriptionListItem:o},props:{resourceIds:{type:Array,default:function(){return[]}},emptyShow:{type:Boolean,default:!0},actionName:{type:String,default:""}},computed:{resourcesTree:function(){var e=this,t=[],a=[],s=[],r={},n={};if(this.resourceIds&&this.resourceIds.length>0)for(var o in this.$store.getters.allResources.forEach((function(t){if(e.resourceIds.indexOf(t.id)>-1){var a=Object.assign({},t);r[t.id]=a,2===t.category&&"undefined"===typeof n[t.id]&&(n[t.id]=a,s.push(a))}})),s.some((function(e){r[e.parentId]&&("undefined"===typeof r[e.parentId].btns&&(r[e.parentId].btns=[]),r[e.parentId].btns.push(e),delete r[e.id])})),r){var i=r[o];i.btns?a.push(i):t.push(i)}return{menus:t,mix:a}}},created:function(){},methods:{addPermission:function(){this.$emit("add-action")}}},l=i,c=a("2877"),u=Object(c["a"])(l,s,r,!1,null,"e6805158",null);t["default"]=u.exports}}]);