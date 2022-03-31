const summerUL = document.querySelector("#summerUL");
const summerInput = document.querySelector("#myInput");
const myButton = document.querySelector(".addBtn");
const getSummerList = () => {
    axios
        .get("http://localhost:4080/api/summer")
        .then((res) => {
            console.log(res.data);
            let summerArr = res.data;

            for (let i = 0; i < summerArr.length; i++) {
                const newItem = document.createElement("li");
                newItem.innerHTML = `
                    <li class="item" id="${summerArr[i]}" onclick="addChecklist('${summerArr[i]}')">${summerArr[i]}</li>
                `;
                summerUL.appendChild(newItem);
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
                <s class="summer-item" id="${itemToRemove.textContent}" onclick="addChecklist('${itemToRemove.textContent}')">${itemToRemove.textContent}</s>
            `;
        })
        .catch((err) => {
            console.log(err);
            alert(err.response.data);
        });
};
const addItem = () => {
    const item = summerInput.value;

    const itemToAdd = {
        item: item,
    };
    axios
        .post("http://localhost:4080/api/summeradded", itemToAdd)
        .then((res) => {
            let summerArr = res.data;
            for (let i = 0; i < summerArr.length; i++) {
                const newItem = document.createElement("li");
                newItem.innerHTML = `
                    <li class="item" id="${summerArr[i]}" onclick="addChecklist('${summerArr[i]}')">${summerArr[i]}</li>
                `;
            }
        });
};
myButton.addEventListener("click", addItem);

getSummerList();
