const fallUL = document.querySelector("#fallUL");
const fallInput = document.querySelector("#myInput");
const myButton = document.querySelector(".addBtn");
const getFallList = () => {
    axios
        .get("http://localhost:4080/api/fall")
        .then((res) => {
            console.log(res.data);
            let fallArr = res.data;

            for (let i = 0; i < fallArr.length; i++) {
                const newItem = document.createElement("li");
                newItem.innerHTML = `
                    <li class="item" id="${fallArr[i]}" onclick="addChecklist('${fallArr[i]}')">${fallArr[i]}</li>
                `;
                fallUL.appendChild(newItem);
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
                <s class="fall-item" id="${itemToRemove.textContent}" onclick="addChecklist('${itemToRemove.textContent}')">${itemToRemove.textContent}</s>
            `;
        })
        .catch((err) => {
            console.log(err);
            alert(err.response.data);
        });
};
const addItem = () => {
    const item = fallInput.value;

    const itemToAdd = {
        item: item,
    };
    axios.post("http://localhost:4080/api/falladded", itemToAdd).then((res) => {
        let fallArr = res.data;
        for (let i = 0; i < fallArr.length; i++) {
            const newItem = document.createElement("li");
            newItem.innerHTML = `
                    <li class="item" id="${fallArr[i]}" onclick="addChecklist('${fallArr[i]}')">${fallArr[i]}</li>
                `;
        }
    });
};
myButton.addEventListener("click", addItem);

getFallList();
