const div = dom.find('#test>.red')[0] //find()获得数组，方括号获得元素
// console.log(div);
dom.style(div, 'color', 'red')

const divList = dom.find('.red')
dom.each(divList, (n) => console.log(n))