// const api = jQuery(".test"); //不返回元素，返回api对象
// api.addClass("red"); //遍历所有刚才获取的元素，添加.red
// api.addClass("red").addClass("blue").addClass("green");
//this就是api
//链式操作
//api调用了函数，返回的为api，这样的话可以继续调用addClass

// obj.fn(p1)  //函数里的this就是obj
// obj.fn.call(obj,p1)

jQuery(".test").addClass("red").addClass("blue").addClass("green");

// const x1 = jQuery(".test").find(".child");
// console.log(x1);

// const api1 = jQuery(".test");
// api1.addClass("black");
// const api2 = api1.find(".child").addClass("red");
// api1.addClass("white");

// jQuery(".test")
//   .find(".child")
//   .addClass("red")
//   .addClass("blue")
//   .addClass("yellow")
//   .end()
//   .addClass("pink");
const x = jQuery(".test");
// .find(".child");
// x.each((div) => console.log(div));

x.parent().print();
x.children().print();

const $div = $("<div><span>1</span></div>");
const $childList = $(".child");
$("body").append($childList);
