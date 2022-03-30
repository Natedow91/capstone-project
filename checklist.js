var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
        click(ev.target.textContent);
        console.log(ev.target.textContent);
    },
    false
);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}
// let myChecklistClick = (event) => {
//     let item = event;
//     console.log("myChecklistClick1" + item);
//     let checklistObj = {
//         item: item,
//     };
// };
// let myChecklistClick1 = function () {
//     axios.get("http://localhost:4080/api/winter/").then((res) => {
//         for (let i = 0; i < res.data.length; i++) {
//             finalArr = (item) => {
//                 const p = document.createElement("p");
//                 const t = document.createTextNode(res.data[i]);
//                 p.appendChild(res.data[i]);

//                 responseSection.appendChild(p);
//             };
//         }
//     });
// };
module.exports = {
let click = function () {
    axios.get("http://localhost:4080/api/winter/").then((res) => {
        // for (let i = 0; i < res.data.length; i++) {
        dataArr.forEach((item) => {
            const p = document.createElement("p");
            const t = document.createTextNode(res.data[i]);
            p.appendChild(res.data[i]);

            responseSection.appendChild(p);
        });
        // }
    });
}
}