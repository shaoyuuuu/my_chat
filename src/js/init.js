// 主题颜色
var rootStyle = document.documentElement.style;
// 红
function redStyle() {
  console.log(rootStyle);
  rootStyle.setProperty('--brand-1', '#fc4a47');
  rootStyle.setProperty('--brand-2', '#fc636b');
  rootStyle.setProperty('--brand-3', '#fec9c8');
}
const config = {
  // 主题颜色
  themeColor: {
    brand_1:'',
    brand_2:'',
    brand_3:''
  }
}
export {
  redStyle
}