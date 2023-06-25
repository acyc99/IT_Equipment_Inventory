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
    // Requires Global Variables (Checkbox Values and div Containers)   
    const checkedCount = [laptop, monitor, dockingStation, adaptor, mouse, keyboard, lock, other].filter(checkbox => checkbox.checked).length;
    standardEquipmentInfoContainer.style.display = checkedCount >= 1 ? "block" : "none"; 
    
    laptopInfoContainer.style.display = laptop.checked ? "block" : "none"; 
    monitorInfoContainer.style.display = monitor.checked ? "block" : "none"; 
    dockingStationInfoContainer.style.display = dockingStation.checked ? "block" : "none"; 
    adaptorInfoContainer.style.display = adaptor.checked ? "block" : "none";
    mouseInfoContainer.style.display = mouse.checked ? "block" : "none";
    keyboardInfoContainer.style.display = keyboard.checked ? "block" : "none";
    lockInfoContainer.style.display = lock.checked ? "block" : "none";
    phoneInfoContainer.style.display = phone.checked ? "block" : "none";
    otherEquipmentInfoContainer.style.display = other.checked ? "block" : "none";     
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
    if (dockingStation.checked && adaptor.checked) {
        alert("User should only be assigned either a docking station or a USB-C to HDMI Adaptor!");
    }
    
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

const phoneNumberInput = document.getElementById('phoneNumber');

phoneNumber.addEventListener("input", () => {
    const pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/; 
    let phoneNumber = phoneNumberInput.value;
    
    if (!pattern.test(phoneNumber)) {
        phoneNumberInput.setCustomValidity("Please input a valid phone number in the format of xxx-xxx-xxxx.");
    } else {
        phoneNumberInput.setCustomValidity(''); 
    }
    phoneNumberInput.reportValidity();
}); 


// handleRadioSelection: 
// const dockingStation = document.getElementById('dockingStation');
// const adaptor = document.getElementById('adaptor'); 
// const dockingStationInfoContainer = document.getElementById('dockingStationInfoContainer'); 
// const adaptorInfoContainer = document.getElementById('adaptorInfoContainer');
// if (dockingStation.checked) {
    //         dockingStationInfoContainer.style.display = "block"; 
    //         adaptorInfoContainer.style.display = "none"; 
    //     } else if (adaptor.checked) {
        //     adaptorInfoContainer.style.display = "block"; 
        //     dockingStationInfoContainer.style.display = "none"; 
        // } 