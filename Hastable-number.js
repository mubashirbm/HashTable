
    // HashTable-Number

class Hash{
    constructor(size){
        this.HashTable=new Array(size)
        this.size=size
    }
  hash(key){
    let total=0
    let string=String(key)
    for(let i=0;i<string.length;i++){
        total+=string.charCodeAt(i)
        
    }
    console.log(total,"ascii value")
    return total % this.size
  }
  
    set(key,value){
        const index=this.hash(key)
        this.HashTable[index]=value
    }
    display(){

        for(let i=0;i<this.HashTable.length;i++){
            if(this.HashTable[i]){
                console.log(i,this.HashTable[i])
            }
        }
    }
}
const HashTable=new Hash(20)
// console.log(HashTable)
HashTable.set(0,2)
HashTable.set(2,35)
HashTable.set(4,24)
HashTable.set(1,23)
HashTable.display()



// collision

// class Hash{
//     constructor(size){
//         this.Hashtable=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         let string=String(key)
//         for(let i=0;i<string.length;i++){
//             total += string.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index=this.hash(key)
//         const bucket=this.Hashtable[index]
//         if(!bucket){
//             this.Hashtable[index]=[[key,value]]
//         }else{
//             const sameItem=bucket.find(item=>item[0]===key)
//             if(sameItem){
//                 sameItem[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.Hashtable.length;i++){
//             if(this.Hashtable[i]){
//                 console.log(i,this.Hashtable[i])
//             }
//         }
//     }
// }

// const Hashtable=new Hash(10)
// Hashtable.set(1,2)
// // Hashtable.set(1,43)
// Hashtable.set(3,3)
// Hashtable.display()


