var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 0] = "female";
    Gender[Gender["unknow"] = 2] = "unknow"; //未知
})(Gender || (Gender = {}));
var gender = Gender.male; //这样就得到了1
console.log(gender, "11111");
//用对象也可以获取
var o2 = {
    gender: Gender.male //这样就得到了1
};
console.log(o2, "22222");
