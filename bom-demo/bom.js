window.$ = function(){
    let array = []
    return array 
}

$.bom = {
    openAtCenter:function(width,height,url){
        window.open(url,'_blank',
        `width=${width}px,height=${height}px,
        screenX = ${screen.width / 2 - width / 2}px,
        screenY = ${screen.height / 2 - height / 2}px`)
    },
    search : function(name,value){
        let searchAll = function(){
            let result = {}
            let search = window.location.search
            //去掉？号
            if(search[0] === '?'){
                search = search.split(1)
            }
            //用&分割数组
            let searchAcrray = search.split('&')
            //遍历数组
            for(var i = 0;i<searchAcrray.length;i++){
               let parts = searchAcrray[i].split('=')
               result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[i] || '')
            }
            return result
        }
        let result = searchAll()
        if(value === undefined){
            return result[name]
        }else{
            if(result[name] === undefined){
                location.search += `&${encodeURIComponent(name)}=${encodeURIComponent(value)}`
            }else{
                result[name] = encodeURIComponent(value)
                let newSearch = '?'
                for(let key in result){
                    console.log(typeof result[key])
                    console.log(result[key])
                    newSearch += `${encodeURIComponent(ey)}=${encodeURIComponent(result[key])}&`
                }
            }
        }
    }
}

    
