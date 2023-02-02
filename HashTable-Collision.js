

// Hashtable COLLISION


class Hash{
    constructor(size){
        this.Hashtable=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        const index=this.hash(key)
        const bucket=this.Hashtable[index]
        if(!bucket){
            this.Hashtable[index]=[[key,value]]
        }else{
            const sameItem=bucket.find(item=>item[0]===key)
            if(sameItem){
                sameItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index=this.hash(key)
        const bucket=this.Hashtable[index]
        if(bucket){
            const sameItem=bucket.find(item=>item[0]===key)
            if(sameItem){
                return sameItem[1]
            }
        }
        return undefined
    }
    display(){
        
        for(let i=0;i<this.Hashtable.length;i++){
            if(this.Hashtable[i]){
                console.log(i,this.Hashtable[i])
            }
        }

    }
    remove(key){
        const index=this.hash(key)
        const bucket=this.Hashtable[index]
        if(bucket){
            const sameItem=bucket.find(item=>item[0]===key)
            if(sameItem){
                bucket.splice(bucket.indexOf(sameItem),1)
            }
        }
    }
   
}

const Hashtable=new Hash(20)
Hashtable.set("name","mubashir")
Hashtable.set("anme","mubashir")
Hashtable.set("na","mub")
Hashtable.set("nam","mubash")
console.log(Hashtable.get("name"))
Hashtable.remove("name")

Hashtable.display()
