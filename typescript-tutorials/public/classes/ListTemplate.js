export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.classList.add("m-2");
        const h4 = document.createElement("h4");
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerHTML = item.format();
        li.append(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
