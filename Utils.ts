//生成从minNum到maxNum的随机数
export function randomNum(minNum: number, maxNum?: number) {
  if (maxNum !== undefined) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  } else {
    Math.floor(Math.random() * (minNum + 1));
  }
}

export function cloneObject(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

// 判断是否为头条小游戏(区分微信)
export function isTTGame() {
  return window.tt != undefined
}