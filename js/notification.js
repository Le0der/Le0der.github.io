// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
  if (TT !== null) clearTimeout(TT);
  TT = setTimeout(fn, time);
}

// 常用的提示信息 https://blog.csdn.net/weixin_53791978/article/details/124169067
// 复制提醒
document.addEventListener("copy", function () {
  debounce(function () {
    new Vue({
      data: function () {
        this.$notify({                                                   // 弹窗类型 notify(提示弹窗) message（信息提示）confirm（二次确认提示）
          title: "哎嘿！复制成功🍬",                                     // 弹窗标题，可以改为自定义标题
          message: "若要转载最好保留原文链接哦，给你一个大大的赞！",       // 弹窗信息，可以改为自定义内容
          position: 'top-left',                                          // 弹出位置，bottom、top和left、right两两组合
          offset: 50,                                                    // 偏移量，简单可以理解为与边界的距离
          showClose: true,                                               // 是否显示关闭按钮
          type: "success",                                               // 提示类型，可选success/warning/info/error等
          duration: 5000                                                 // 停留时间，弹出停留至消失的时间，单位ms
        });
      }
    })
  }, 300);
})

// f12提醒但不禁用
document.onkeydown = function (e) {
  if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) {
    debounce(function () {
      new Vue({
        data: function () {
          this.$notify({
            title: "你已被发现😜",
            message: "小伙子，扒源记住要遵循GPL协议！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 5000
          });
        }
      })
    }, 300);
  }
};
/* 禁用f12与按键防抖 end */