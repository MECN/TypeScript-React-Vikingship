enum Gender{
  male=1,//男
  female=0,//女
  unknow=2//未知
}
let gender:Gender=Gender.male//这样就得到了1
console.log(gender);//1

//用对象也可以获取
let o2={
  gender:Gender.male//这样就得到了1
}
console.log(o2);//{gender:1}

