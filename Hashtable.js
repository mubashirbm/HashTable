

        // Hashtable

class Hash{
    constructor(size){
        this.Hashtable=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        const index=this.hash(key)
        this.Hashtable[index]=value
    }
    get(key){
        const index=this.hash(key)
        return this.Hashtable[index]
    }
    remove(key){
        const index=this.hash(key)
        return this.Hashtable[index]=undefined
    }
    display(){
        for(let i=0;i<this.Hashtable.length;i++){
            if(this.Hashtable[i]){
                console.log(i,this.Hashtable[i])
            }
        }
    }
}
const Hashtable=new Hash(20)
Hashtable.set("name","mubashir")
Hashtable.set("nae","ubashir")
Hashtable.set("nam","mashir")
console.log(Hashtable.get("name"))
Hashtable.remove("name")
Hashtable.display()
// console.log(Hashtable)
