function access(){
    // event.preventDefault();
    let password = document.getElementById("password").value;

    if(password = "aishukamal"){
        let path = window.location.pathname;
        console.log(path)
        path = path.split("/");
        path.pop();
        console.log(path)
        path = path.join();

        let url = "";

        console.log(path);

        if(path){
            url = window.location.protocol + "//" + window.location.host + "/" + path;
            console.log(url)
        }
        else{
            url = window.location.protocol + "//" + window.location.host + "/" + "landing.html";
            console.log(url)
        }

        window.location.href = url;
    }
}