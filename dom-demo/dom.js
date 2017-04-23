window.$ = function(selectorOrNode){
    let array = []
    if(typeof selectorOrNode === 'string'){
        let items = document.querySelectorAll(selectorOrNode)
        for(var i = 0;i<items.length;i++){
            array.push(items[i])
        }
    }else if(selectorOrNode instanceof Element){
        array.push(selectorOrNode)
    }else if(selectorOrNode instanceof Array){
        for(var i = 0;i<selectorOrNode.length;i++){
            array.push(selectorOrNode[i])
        }
    }
    //给array的每一项添加事件监听
    array.on = function(eventType,fn){
        for(var i = 0;i<array.length;i++){
            array[i].addEventListener(eventType,fn)
        }
    }
    //给array的每一项添加或移除class
    array.addClass = function(ClassName){
        for(var i = 0;i<array.length;i++){
            array[i].classList.add(ClassName)
        }
        return array    
    }
    array.removeClass = function(ClassName){
        for(var i = 0;i<array.length;i++){
            array[i].classList.remove(ClassName)
        }
        return array    
    }
    //value不为空则将value赋值给textContent
    //否则就将array的每项取出
    array.text = function(value){
        if(value !== undefined){
            for(var i = 0;i<array.length;i++){
            array[i].textContent = value
            }
            return array    
        }else{
            let result = []
            for(var i=0;i<items.length;i++){
                result.push(array[i].textContent)
            }
            return result
        }        
    }
    array.get = function(index){
        return array[index]
    }
    array.end = function(){
        return array.previousSelection
    }
    
    //获取array的所有兄弟元素
    array.siblings = function(){
        let children = array[0].parentNode.children //得到其父元素的的所有子元素
        let resultArray = []
        for(var i=0;i<children.length;i++){         //遍历所有子元素，通过判断得到其兄弟元素
            if(children[i] !== array[0]){
                resultArray.push(children[i])
            }
        }
        let items = $(resultArray) //复用$函数
        items.previousSelection = array
        return items
    }
    return array
}