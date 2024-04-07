export class Template {
    constructor(data, type) {
        this.data = data;
        this.type = type;
    }
    viewData() {
        let list = document.querySelector('.item-list');
        let li = document.createElement('li');
        let heading4 = document.createElement('h4');
        heading4.innerText = this.type;
        li.append(heading4);
        let p = document.createElement('p');
        p.innerText = this.data.format();
        li.append(p);
        list.append(li);
    }
}
