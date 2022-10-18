
function kadooba(){
   var namboo = ["i share my cookies with you",
"im not a kidnapper<br>anymore",
"my mom makes good meaatloaf",
"i like good music",
"creator of mombe de monke",
'good green screen editor',
'i play de geetar',
'#juan gamer',
'i know that jaun plus jaun equals horse',
'i make good eggs',
'i know what mems are and how to use them',
'i know how to pronunce saskackspank',
'i know how to cure LIGMA',
'i can get ggrapes from a lemonade stand',
'i watch sesame street on wekends',
'i can make a good websit',
'i know magic here is spell<br>siggity soggity turn her in to a froggity',
'i get baba greels',
'i can use the potty<br>sometimes',
'i watch little einstein',] 

var text = ""
for(let i=0;i<namboo.length;i++){

text+=i+1
text+=":"
text+=namboo[i]
text+="<br>"

}
    document.getElementById("reasons-to-be-friends-with-me").innerHTML=text







}







function boobkooba(){
    
    
    var doc = document.getElementById("reasons-to-be-friends-with-me")
    doc.scrollTop += 1

    //console.log("Cur " + (getDocHeight(doc) - doc.scrollTop) + " Act " + doc.clientHeight)
    if ( getDocHeight(doc) - doc.scrollTop -5 < doc.clientHeight) {
        doc.scrollTop = 0
        setTimeout(boobkooba, 1000)

    }
    else {
        setTimeout(boobkooba, 50)
    
    }



    



    









}
function getDocHeight(doc) {
    return Math.max(
        doc.scrollHeight,
        doc.offsetHeight,
        doc.clientHeight
    );
}




