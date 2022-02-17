const creatList = (value) => {
    return creatNode(value)
}
const appendList = (list, value) => {
    const node = creatNode(value)
    let x = list
    while (x.next) {
        x = x.next
    }
    // x是最后一个节点
    x.next = node
    return node
}
const removeFromList = (list, node) => {
    let x = list
    let p = node
    while (x !== node && x !== null) {
        p = x
        x = x.next
    }
    if (x === null) {
        return false
    } else if (x === p) {
        p = x.next
        return p
    } else {
        p.next = x.next
        return list
    }
}
// console.log(p === null || x 的上一个节点)
// console.log(x === node || x === null)
// if (list === node) {
//     //如果删除的是第一个节点
//     //list 指向第2个节点
//     list = node.next
// } else {
//     // 如果删除的是第二个节点
//     // 第1个节点.next = 第2个节点.next
//     if (list.next === node) {
//         list.next = node.next
//     } else {
//         //如果删除的是第三个节点
//         // 第2个节点.next = 第3个节点.next
//         if (list.next.next === node) {
//             (list.next).next = node.next
//         }
//     }
// }
const creatNode = (value) => {
    return {
        data: value,
        next: null
    }
}

const travellist = (list, fn) => {
    let x = list
    while (x !== null) {
        fn(x)
        x = x.next
    }
}

const list = creatList(10)
const node2 = appendList(list, 20)
const node3 = appendList(list, 30)
const node4 = appendList(list, 40)
removeFromList(list, node3)
travellist(list, node => {
    console.log(node.data)
})
