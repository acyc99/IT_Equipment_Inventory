// Checkbox Values 
const laptop = document.getElementById('laptop');
const monitor = document.getElementById('monitor');
const dockingStation = document.getElementById('dockingStation');
const adaptor = document.getElementById('adaptor');
const mouse = document.getElementById('mouse');
const keyboard = document.getElementById('keyboard');
const lock = document.getElementById('lock'); 
const phone = document.getElementById('phone');
const other = document.getElementById('otherEquipment'); 

// Radio Button Values 
const oneMonitor = document.getElementById("oneMonitor");
const twoMonitors = document.getElementById("twoMonitors"); 
const mouseAvailable = document.getElementById("mouseYes");
const keyboardAvailable = document.getElementById("keyboardYes");
const lockAvailable = document.getElementById("lockYes");

// div Containers 
const monitor1InfoContainer = document.getElementById('monitor1InfoContainer'); 
const monitor2InfoContainer = document.getElementById('monitor2InfoContainer'); 
const standardEquipmentInfoContainer = document.getElementById('standardEquipmentInfoContainer'); 
const laptopInfoContainer = document.getElementById('laptopInfoContainer'); 
const monitorInfoContainer = document.getElementById('monitorInfoContainer'); 
const dockingStationInfoContainer = document.getElementById('dockingStationInfoContainer'); 
const adaptorInfoContainer = document.getElementById('adaptorInfoContainer');
const mouseInfoContainer = document.getElementById('mouseInfoContainer');
const keyboardInfoContainer = document.getElementById('keyboardInfoContainer');
const lockInfoContainer = document.getElementById('lockInfoContainer');
const phoneInfoContainer = document.getElementById('phoneInfoContainer');
const otherEquipmentInfoContainer = document.getElementById('otherEquipmentInfoContainer'); 

const itEquipcheckboxes = [laptop, monitor, dockingStation, adaptor, mouse, keyboard, lock, other];
const checkboxes = [laptop, monitor, dockingStation, adaptor, mouse, keyboard, lock, other, phone];

const workOrderInput = document.getElementById('workOrderInput');
const phoneWorkOrderInput = document.getElementById('phoneWorkOrderInput'); 

resetAll = () => {
    document.querySelectorAll('[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    document.querySelectorAll('input[type="checkbox"][name="DockingStation"], input[type="checkbox"][name="Adaptor"]').forEach(checkbox => checkbox.disabled = false);
    document.querySelectorAll('input').forEach(input => input.value = ''); 
    document.querySelectorAll('[id$="InfoContainer"]').forEach(container => container.style.display = "none"); 
}

updateFullName = () => {
    let firstName = document.getElementById('firstName').value;
    let middleName = document.getElementById('middleName').value;
    let lastName = document.getElementById('lastName').value;
    
    let fullName = `${firstName} ${middleName} ${lastName}`
    document.getElementById('fullName').textContent = fullName;
    document.getElementById('hiddenFullName').value = fullName;
} 

updateEquipName = () => {
    let ITEquipmentName = document.getElementById('ITEquipmentName').value; 
    document.getElementById('ITequipmentNameAT').textContent = `${ITEquipmentName} Asset Tag:`; 
    document.getElementById('ITequipmentNameSN').textContent = `${ITEquipmentName} Serial Number:`; 
    document.getElementById('ITequipmentNameMB').textContent = `${ITEquipmentName} Model and Brand:`; 
}

handleCheckboxSelection = () => { 
    // Requires Global Variables (Checkbox Values, div Containers, and checkboxes) 
    const checkedCount = itEquipcheckboxes.filter(checkbox => checkbox.checked).length;
    // console.log(checkedCount);
    standardEquipmentInfoContainer.style.display = checkedCount >= 1 ? "block" : "none"; 

    const allowNull = checkedCount <= 0 ? true : false; // If > 0 = allowNull is False and if <= 0 = allowBull is True 
    if (allowNull) {
        // const workOrderInput = document.getElementById('workOrderInput'); 
        workOrderInput.value = ""; 
    } 
    // console.log(workOrderInput.value);

    laptopInfoContainer.style.display = laptop.checked ? "block" : "none"; 
    monitorInfoContainer.style.display = monitor.checked ? "block" : "none"; 
    dockingStationInfoContainer.style.display = dockingStation.checked ? "block" : "none"; 
    adaptorInfoContainer.style.display = adaptor.checked ? "block" : "none";
    mouseInfoContainer.style.display = mouse.checked ? "block" : "none";
    keyboardInfoContainer.style.display = keyboard.checked ? "block" : "none";
    lockInfoContainer.style.display = lock.checked ? "block" : "none";
    phoneInfoContainer.style.display = phone.checked ? "block" : "none";
    otherEquipmentInfoContainer.style.display = other.checked ? "block" : "none"; 
    
    mouse.checked = mouse.checked ? true : false; 
    mouseAvailable.value = mouse.checked ? "Yes" : "No"; 
    
    keyboard.checked = keyboard.checked ? true : false; 
    keyboardAvailable.value = keyboard.checked ? "Yes" : "No"; 
    
    lock.checked = lock.checked ? true : false; 
    lockAvailable.value = lock.checked ? "Yes" : "No"; 

    return allowNull; 
}

handleRadioSelection = () => {
    // Requires Global Variables (Radio Button Values and div Containers) 

    if (monitor.checked && oneMonitor.checked) {
        monitor1InfoContainer.style.display = "block"; 
        monitor2InfoContainer.style.display = "none"; 
    } else if (monitor.checked && twoMonitors.checked) {
        monitor1InfoContainer.style.display = "block"; 
        monitor2InfoContainer.style.display = "block"; 
    } else if (! monitor.checked) {
        monitor1InfoContainer.style.display = "none"; 
        monitor2InfoContainer.style.display = "none"; 
    }
}

notifyDockAndAdaptorSelection = () => {
    // Requires Global Variables (Checkbox Values and div Containers)   
    
    // Notify user about 1 of 2 options can be selected, not both 
    // if (dockingStation.checked && adaptor.checked) {
    //     alert("User should only be assigned either a docking station or a USB-C to HDMI Adaptor!");
    // }
    
    // OR Block a checkbox if another checkbox is selected 
    if (adaptor.checked) {
        dockingStation.disabled = true;
    } else if (dockingStation.checked) {
        adaptor.disabled = true;
    } else {
        dockingStation.disabled = false;
        adaptor.disabled = false; 
    }
}

inputOtherOption = (optionId, containerId, inputId) => {
    let optionSelect = document.getElementById(optionId);
    let otherContainer = document.getElementById(containerId);
    let otherInput = document.getElementById(inputId);
    
    if (optionSelect.value === "Other") {
        otherContainer.style.display = 'block';
        otherInput.required = true; 
    } else {
        otherContainer.style.display = "none"; 
        otherInput.required = false; 
    }
}

formatPhoneNumber = (elementId) => {
    const phoneNumberInput = document.getElementById(elementId);
    let phoneNumber = phoneNumberInput.value;
    phoneNumber = phoneNumber.replace(/\D/g, "");
    
    if (phoneNumber.length > 3 && phoneNumber.length <= 6) {
      let formattedNumber = phoneNumber.replace(/(\d{3})(\d{0,3})/, '$1-$2');
      phoneNumberInput.value = formattedNumber; 
    } else if (phoneNumber.length > 6) {
      let formattedNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{0,4})/, '$1-$2-$3');
      phoneNumberInput.value = formattedNumber;
    } else {
        phoneNumberInput.value = phoneNumber;
    }
}

document.getElementById('checkWorkOrderButton').addEventListener('click', (e) => {
    e.preventDefault();
    const workOrderVal = workOrderInput.value.toString(); // Convert to string
    const workOrderStatus = document.getElementById('workOrderStatus');
  
    fetch('/inventory-entry/check-work-order', { // Updated URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ITEquipmentWO: workOrderVal }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        console.log("Response data:", data);
        if (data.exists) {
            workOrderStatus.textContent = 'Work order number already exists in the database';
            workOrderStatus.style.color = 'red';
        } else {
            workOrderStatus.textContent = 'Work order number does not exist in the database';
            workOrderStatus.style.color = 'green';
            document.getElementById('submit').disabled = false;
        }
      })
      .catch(error => {
        console.error(error);
        workOrderStatus.textContent = 'An error occurred';
      });
});

document.getElementById('checkPhoneWorkOrderButton').addEventListener('click', (e) => {
    e.preventDefault();
    const phoneWorkOrderVal = workOrderInput.value.toString(); // Convert to string
    const phoneWorkOrderStatus = document.getElementById('phoneWorkOrderStatus');
  
    fetch('/inventory-entry/check-phone-work-order', { // Updated URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ PhoneWO: phoneWorkOrderVal }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        console.log("Response data:", data);
        if (data.exists) {
            phoneWorkOrderStatus.textContent = 'Work order number already exists in the database';
            phoneWorkOrderStatus.style.color = 'red';
        } else {
            phoneWorkOrderStatus.textContent = 'Work order number does not exist in the database';
            phoneWorkOrderStatus.style.color = 'green';
            document.getElementById('submit').disabled = false;
        }
      })
      .catch(error => {
        console.error(error);
        phoneWorkOrderStatus.textContent = 'An error occurred';
      });
});

validateForm = (containerId) => {
    const container = document.getElementById(containerId);
    const inputs = container.getElementsByClassName('verifyInput');
    const selects = container.getElementsByTagName('select');
    let allFilled = true;
    
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        
        if (input.value.trim() === "") {
            allFilled = false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "";
        }
    }

    for (let i = 0; i < selects.length; i++) {
        let select = selects[i];
    
        if (select.value.trim() === "") {
            allFilled = false;
            select.style.border = "2px solid red";
        } else {
            select.style.border = "";
        }
    }
    
    if (!allFilled) {
        alert("Please fill in all required fields!");
        return false;
    }
    
    return true;
}

document.getElementById('formId').addEventListener('submit', (e) => {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    
    if (firstName.value.trim() === "") {
        firstName.style.border = "2px solid red";
        alert("First name is required!");
        e.preventDefault();
    } else {
        firstName.style.border = "";
    }
    
    if (lastName.value.trim() === "") {
        e.preventDefault();
        lastName.style.border = "2px solid red";
        alert("Last name is required!");
    } else {
        lastName.style.border = "";
    }
    
    const checkedCount = checkboxes.filter(checkbox => checkbox.checked).length;
    if (checkedCount === 0) {
        e.preventDefault();
        alert("Please check at least 1 checkbox");
        return;
    }
    
    // const workOrderInput = document.getElementById('workOrderInput');
    const workOrderInputDisplay = getComputedStyle(workOrderInput).display;
    // console.log(workOrderInputDisplay);  
    const allowNull = handleCheckboxSelection(); // From handleCheckboxSelection() function 
    console.log(allowNull);
    if (workOrderInputDisplay === "inline-block" && !allowNull && workOrderInput.value.trim() === "") {
        workOrderInput.style.border = "2px solid red";
        alert("Standard IT Equipment work order number is required!");
        e.preventDefault();
    } else {
        workOrderInput.style.border = "";
    }
    
    const phoneWorkOrderInput = document.getElementById('phoneWorkOrderInput');
    if (phone.checked && phoneWorkOrderInput.value.trim() === "") {
        phoneWorkOrderInput.style.border = "2px solid red";
        alert("Phone work order number is required!")
        e.preventDefault();
    } else {
        phoneWorkOrderInput.style.border = "";
    }

    if (monitor.checked) {
        if (!oneMonitor.checked && !twoMonitors.checked) {
            alert("Must select either '1 monitor' or 2 monitors");
            e.preventDefault();
        } else if (oneMonitor.checked && !validateForm('monitor1InfoContainer')) {
            e.preventDefault();
            return;
        } else if (twoMonitors.checked && (!validateForm('monitor1InfoContainer') || !validateForm('monitor2InfoContainer'))) {
            e.preventDefault();
            return;
        }
    }

    if (
        (laptop.checked && !validateForm('laptopInfoContainer')) ||
        (dockingStation.checked && !validateForm('dockingStationInfoContainer')) ||
        (adaptor.checked && !validateForm('adaptorInfoContainer')) ||
        (mouse.checked && !validateForm('mouseInfoContainer')) ||
        (keyboard.checked && !validateForm('keyboardInfoContainer')) ||
        (lock.checked && !validateForm('lockInfoContainer')) ||
        (phone.checked && !validateForm('phoneInfoContainer')) ||
        (other.checked && !validateForm('otherEquipmentInfoContainer'))
        ) {
            e.preventDefault();
            return;
        } 
});

// document.getElementById('formId').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
  
//     fetch('/inventory-entry', {
//         method: 'POST',
//         body: formData,
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not OK');
//           }
//           return response.json();
//         })
//         .then(data => {
//           alert(data.message); // Display the success or error message in an alert
//         })
//         .catch(error => {
//           console.error(error);
//           alert('An error occurred'); // Display a generic error message in case of network or server error
//         });
// });
  