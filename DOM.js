window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    style(node, attribute, value) {
        if (arguments.length === 3)
            // dom.style(div, 'color', 'red')
            node.style[attribute] = [value]
        else if (arguments.length === 2) {
            if (typeof attribute === 'string')
                // dom.style(div, 'color')
                return node.style[attribute]
            else if (attribute instanceof Object) { // dom.style(div, {color: 'red'})
                const object = attribute
                for (let key in object)
                    node.style[key] = object[key]
            }
        }
    },

    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++)
            fn.call(null, nodeList[i])
    }
}