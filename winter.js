const winterUL = document.querySelector("#winterUL");
const winterInput = document.querySelector("#myInput");
const myButton = document.querySelector(".addBtn");
const getWinterList = () => {
    axios
        .get("http://localhost:4080/api/winter")
        .then((res) => {
            console.log(res.data);
            let winterArr = res.data;

            for (let i = 0; i < winterArr.length; i++) {
                const newItem = document.createElement("li");
                newItem.innerHTML = `
                    <li class="item" id="${winterArr[i]}" onclick="addChecklist('${winterArr[i]}')">${winterArr[i]}</li>
                `;
                winterUL.appendChild(newItem);
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
                <s class="winter-item" id="${itemToRemove.textContent}" onclick="addChecklist('${itemToRemove.textContent}')">${itemToRemove.textContent}</s>
            `;
        })
        .catch((err) => {
            console.log(err);
            alert(err.response.data);
        });
};

const addItem = () => {
    const item = winterInput.value;

    const itemToAdd = {
        item: item,
    };
    axios.post("http://localhost:4080/api/itemadded", itemToAdd).then((res) => {
        let winterArr = res.data;
        for (let i = 0; i < winterArr.length; i++) {
            const newItem = document.createElement("li");
            newItem.innerHTML = `
                    <li class="item" id="${winterArr[i]}" onclick="addChecklist('${winterArr[i]}')">${winterArr[i]}</li>
                `;
        }
    });
};
myButton.addEventListener("click", addItem);

getWinterList();
