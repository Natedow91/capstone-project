const springUL = document.querySelector("#springUL");
const springInput = document.querySelector("#myInput");
const myButton = document.querySelector(".addBtn");
const getSpringList = () => {
    axios
        .get("http://localhost:4080/api/spring")
        .then((res) => {
            console.log(res.data);
            let springArr = res.data;

            for (let i = 0; i < springArr.length; i++) {
                const newItem = document.createElement("li");
                newItem.innerHTML = `
                    <li class="item" id="${springArr[i]}" onclick="addChecklist('${springArr[i]}')">${springArr[i]}</li>
                `;
                springUL.appendChild(newItem);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

const addChecklist = (item) => {
    const itemToRemove = document.querySelector(`#${item}`);
    console.log(itemToRemove);

    const itemToAdd = {
        item: item,
    };

    axios
        .post("http://localhost:4080/api/add", itemToAdd)
        .then((res) => {
            console.log(res.data);
            itemToRemove.innerHTML = `
                <s class="spring-item" id="${itemToRemove.textContent}" onclick="addChecklist('${itemToRemove.textContent}')">${itemToRemove.textContent}</s>
            `;
        })
        .catch((err) => {
            console.log(err);
            alert(err.response.data);
        });
};
const addItem = () => {
    const item = springInput.value;

    const itemToAdd = {
        item: item,
    };
    axios
        .post("http://localhost:4080/api/springadded", itemToAdd)
        .then((res) => {
            let springArr = res.data;
            for (let i = 0; i < springArr.length; i++) {
                const newItem = document.createElement("li");
                newItem.innerHTML = `
                    <li class="item" id="${springArr[i]}" onclick="addChecklist('${springArr[i]}')">${springArr[i]}</li>
                `;
            }
        });
};
myButton.addEventListener("click", addItem);

getSpringList();
