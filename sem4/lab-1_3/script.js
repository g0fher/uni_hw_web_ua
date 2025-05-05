// let textArea = document.getElementById("test");

// function save_text() {
//     localStorage.setItem("text", textArea.value);
// }

// function retrieve_text() {
//     textArea.value = localStorage.getItem("text");
// }



function add_input_container_edu() {
    const wrapper = document.getElementById("edu_wrapper");
    let linebrake = document.createElement('br');
    
    const container = document.createElement('div');
    container.classList.add("input_container");

    const title_label = document.createElement('label');
    title_label.textContent = "Title";
    const title_input = document.createElement('input');
    title_input.type = 'text';
    title_input.maxLength = 50;
    title_input.name = 'title_edu';

    const desc_label = document.createElement('label');
    desc_label.textContent = "Desc";
    const desc_input = document.createElement('input');
    desc_input.type = 'text';
    desc_input.maxLength = 50;
    desc_input.name = "desc_edu";

    container.appendChild(title_label);
    container.appendChild(linebrake);

    container.appendChild(title_input);
    linebrake = document.createElement('br');
    container.appendChild(linebrake);

    container.appendChild(desc_label);
    linebrake = document.createElement('br');
    container.appendChild(linebrake);

    container.appendChild(desc_input);

    wrapper.appendChild(container);
}

function add_input_container_skills() {
    const wrapper = document.getElementById("skills_wrapper");
    let linebrake = document.createElement('br');
    
    const container = document.createElement('div');
    container.classList.add("input_container");

    const title_label = document.createElement('label');
    title_label.textContent = "Title";
    const title_input = document.createElement('input');
    title_input.type = 'text';
    title_input.maxLength = 50;
    title_input.name = 'title_skill';

    const desc_label = document.createElement('label');
    desc_label.textContent = "Desc";
    const desc_input = document.createElement('input');
    desc_input.type = 'text';
    desc_input.maxLength = 50;
    desc_input.name = "desc_skill";

    container.appendChild(title_label);
    container.appendChild(linebrake);

    container.appendChild(title_input);
    linebrake = document.createElement('br');
    container.appendChild(linebrake);
    
    container.appendChild(desc_label);
    linebrake = document.createElement('br');
    container.appendChild(linebrake);

    container.appendChild(desc_input);

    wrapper.appendChild(container);
}

function collect_edu() {
    const titles = document.querySelectorAll('[name="title_edu"]');
    const descs = document.querySelectorAll('[name="desc_edu"]');
    
    for (let i = 0; i < titles.length; i++) {
        console.log(`Title: ${titles[i].value}, Desc: ${descs[i].value}`);
    }
}

function collect_skills() {
    const titles = document.querySelectorAll('[name="title_skill"]');
    const descs = document.querySelectorAll('[name="desc_skill"]');
    
    for (let i = 0; i < titles.length; i++) {
        console.log(`Title: ${titles[i].value}, Desc: ${descs[i].value}`);
    }
}

class Entry {
    constructor(title, desc) {
        this._title = title;
        this._desc = desc;
    }

    get title() { return this._title; }
    set title(setTitle) {
        if (setTitle) {
            this._title = setTitle;
        }
    }

    get desc() { return this._desc; }
    set desc(setDesc) {
        if (setDesc) {
            this._desc = setDesc;
        }
    }
}

class Resume {
    constructor() {

    }
}

class PersonalInfo {
    constructor(name, surname, age, telegram) {
        this._name = name;
        this._surname = surname;
        this._age = age;
        this._telegram = telegram;
    }

    get name() { return this._name; }
    set name(setName) {
        if (setName) {
            this._name = setTitle;
        }
    }

    get surname() { return this._surname; }
    set surname(setSurname) {
        if (setSurname) {
            this._surname = setSurname;
        }
    }

    get age() { return this._age; }
    set age(setAge) {
        if (setAge) {
            this._age = setAge;
        }
    }

    get telegram() { return this._telegram; }
    set telegram(setTelegram) {
        if (setTelegram) {
            this._telegram = setTelegram;
        }
    }
}


