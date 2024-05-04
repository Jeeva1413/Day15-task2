const form = document.getElementById("form");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Prevent the form from submitting

    // Gather form data
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;  
    const gender = [];
    if (document.getElementById("male").checked) {
        gender.push(document.getElementById("male").value);
    }
    if (document.getElementById("female").checked) {
        gender.push(document.getElementById("female").value);
    }
    const address = document.getElementById("address").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const pincode = document.getElementById("pincode").value;

    const foodChoices = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        foodChoices.push(checkbox.value);
    });

    // Create a new table row
    const tr = document.createElement("tr");

    // Add cells to the table row
    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = tableBody.children.length + 1;
    tr.appendChild(serialNumberCell);

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = firstName;
    tr.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = lastName;
    tr.appendChild(lastNameCell);

    const genderCell = document.createElement("td");
    genderCell.textContent = gender.join(", ");
    tr.appendChild(genderCell);

    const addressCell = document.createElement("td");
    addressCell.textContent = address;
    tr.appendChild(addressCell);

    const stateCell = document.createElement("td");
    stateCell.textContent = state;
    tr.appendChild(stateCell);

    const countryCell = document.createElement("td");
    countryCell.textContent = country;
    tr.appendChild(countryCell);

    const pincodeCell = document.createElement("td");
    pincodeCell.textContent = pincode;
    tr.appendChild(pincodeCell);

    const foodChoicesCell = document.createElement("td");
    foodChoicesCell.textContent = foodChoices.join(", ");
    tr.appendChild(foodChoicesCell);

    // Add the table row to the table body
    tableBody.appendChild(tr);

    // Reset the form
    form.reset();
});