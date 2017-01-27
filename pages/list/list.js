
var time = require("../../utils/util");
Page({
    data:{
        lists:[{
            content:"helloworld",
            time:Date.now(),
            id: 1
        }]
    },
    onload(){
        initData(this);
    },
    onShow(){
        initData(this); 
    },
    edit(e){
        // console.log(e.type)
        // if(e.type == "bindlongtap"){
        //    return;
        // }else{
            var id = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: '../add/add?id='+id,      
            })
        //}   
    },
    addButton(){
        wx.navigateTo({
          url: '../add/add',      
        })
    },
    deleteButton(e){
        var id = e.currentTarget.dataset.id;
        console.log(id);
        deleteValue(id,this);
    }
})
function initData(page){
    var arr = wx.getStorageSync("txt");
    if(arr.length){
        arr.forEach((item,i) => {
            var t = new Date(Number(item.time));
            item.time = time.formatTime(t)
        })
    }
    page.setData({
        lists:arr
    })
}
//删除函数
function deleteValue(id,page){
    var arr = wx.getStorageSync("txt");
    //var data = [],flag = true;    
    arr.forEach((item) =>{
        if(item.id == page.data.id){
            wx.deleteStorageSync("txt",data)
        }         
    })
}