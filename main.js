function access(){
    // event.preventDefault();
    let password = document.getElementById("password").value;

    if(password = "aishukamal"){
        let path = window.location.pathname;
        path = path.split("/");
        path.pop();
        path = path.join();

        let url = "";

        if(path){
            url = window.location.protocol + "//" + window.location.host + "/" + path;
        }
        else{
            url = window.location.protocol + "//" + window.location.host + "/" + "landing.html";
        }

        window.location.href = url;
    }
}