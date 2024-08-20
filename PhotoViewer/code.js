

let folder;
let commonName;
let start;
let end;
let lst;
let index;

/*LAMBDA */
const img = () => {return document.querySelector("#photos")};

let animationId;



function loadPhotos(){

    
    folder = String(document.querySelector("#folder").value);
    commonName = String(document.querySelector("#commonName").value);
    start = Number(document.querySelector("#startPhoto").value);
    end = Number(document.querySelector("#endPhoto").value);


    if (folder == "" || commonName == "") {
        document.querySelector("#pg").innerHTML = "Error: You Must Load Data First";
    } else if (end < start) {
        document.querySelector("#pg").innerHTML = "Error: Invalid Range";
    } else {
        lst = new Array();
        let str = "";
        str += folder;
        str += commonName;
        
        for (let i = start; i <= end; i++) {
            lst.push(str + i + ".jpg");
        }

        index = 0;
        img().src = lst[index];
        document.querySelector("#display").value = lst[index];
        document.querySelector("#pg").innerHTML = "Photo Viewer System"
    }
}

function loadJSON(){
    let url = document.querySelector("#jsonURL").value;

    if (url == "") {
        document.querySelector("#pg").innerHTML = "Error: You Must Load Data First";
    } else {
        lst = new Array();
        fetch(url)
            .then(response => response.json())
            .then(json => {           
                for (x in json.images) {
                    lst.push(json.images[x].imageURL);
                }

                index = 0;
                img().src = lst[index];
                document.querySelector("#display").value = lst[index];
                document.querySelector("#pg").innerHTML = "Photo Viewer System"
          });
    }   
}

function previous() {

    if (lst != null && lst.length > 0) {
        index = index - 1;
        if (index < 0) {
            index = lst.length - 1;
        }
        img().src = lst[index];
        document.querySelector("#display").value = lst[index];
        document.querySelector("#pg").innerHTML = "Photo Viewer System"
    } else {
        document.querySelector("#pg").innerHTML = "Error: You Must Load Data First";
    } 

}

function next() {
    if (lst != null && lst.length > 0) {
        index = index + 1;
        if (index == lst.length) {
            index = 0;
        }
        img().src = lst[index];
        document.querySelector("#display").value = lst[index];
        document.querySelector("#pg").innerHTML = "Photo Viewer System"
    } else {
        document.querySelector("#pg").innerHTML = "Error: You Must Load Data First";
    } 

}


function first() {
     
    if (lst != null && lst.length > 0) {
        index = 0;
        img().src = lst[index];
        document.querySelector("#display").value = lst[index];
        document.querySelector("#pg").innerHTML = "Photo Viewer System"
    } else {
        document.querySelector("#pg").innerHTML = "Error: You Must Load Data First";
    } 

}

function last() {
     
    if (lst != null && lst.length > 0) {
        index = lst.length - 1;
        img().src = lst[index];
        document.querySelector("#display").value = lst[index];
        document.querySelector("#pg").innerHTML = "Photo Viewer System"
    } else {
        document.querySelector("#pg").innerHTML = "Error: You Must Load Data First";
    }  
}

function SS() {
    if (lst == null) {
        document.querySelector("#pg").innerHTML = "Error: You Must Load Data First";
    } else {
        animationId = setInterval("next()" , 1000);
    }
}

function stopSS() {
    clearInterval(animationId);
}

function randomSS() {
    if (lst == null) {
        document.querySelector("#pg").innerHTML = "Error: You Must Load Data First";
    }
    else {
        animationId = setInterval("random()" , 1000);
    }
}




function random() {

    index = Math.floor(Math.random() * lst.length);
    img().src = lst[index];
    document.querySelector("#display").value = lst[index];
}   


function reset() {
    document.querySelector("#display").value = "";
    document.querySelector("#folder").value = "umcp/";
    document.querySelector("#commonName").value = "college";
    document.querySelector("#startPhoto").value = "2";
    document.querySelector("#endPhoto").value = "4";
    document.querySelector("#jsonURL").value = "http://www.cs.umd.edu/~nelson/classes/resources/cmsc335/images/imagesSet1.json";
    lst = null;
}
