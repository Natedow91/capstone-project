const checklistUL = document.querySelector("#checklistUL");

const getchecklist = () => {
    axios
        .get("http://localhost:4080/api/checklist")
        .then((res) => {
            console.log(res.data);
            let finalArr = res.data;

            for (let i = 0; i < finalArr.length; i++) {
                const newItem = document.createElement("li");
                newItem.innerHTML = `
                    <li class="item" id="${finalArr[i]}" onclick="addChecklist('${finalArr[i]}')">${finalArr[i]}</li>
                `;
                checklistUL.appendChild(newItem);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

getchecklist();
