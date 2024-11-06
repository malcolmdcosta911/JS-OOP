function HtmlElement() {
  this.click = function () {
    console.log("click");
  };

  this.render = function () {
    console.log("renders nothing");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

const e = new HtmlElement();

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    if (item) this.items.push(item);
  };

  this.removeItem = function (item) {
    if (this.items.length == 0) throw new Error("no items present");
    const index = this.items.indexOf(item);
    if (index == -1) throw new Error("item does not exist");
    this.items.splice(index, 1);
  };

  this.render = function () {
    // if (this.items.length == 0) throw new Error("no items present");
    return `<select>
    ${this.items.map((item) => `<option>${item}</option>`).join("\n")}
    </select>`;
  };
}

const selectItem = new HtmlSelectElement([]);

extend(new HtmlElement(), HtmlSelectElement);

function extend(Parent, Child) {
  Child.prototype = Object.create(Parent);
  Child.prototype.constructor = Child;
}

//img element
function HtmlImageElement(src = "") {
  this.src = src;
  this.render = function () {
    return `<img src=${this.src} />`;
  };
}

extend(new HtmlElement(), HtmlImageElement);

const img1 = new HtmlImageElement("https://");

for (let ele of [
  new HtmlSelectElement([121, 432]),
  new HtmlImageElement("https://"),
  new HtmlElement(),
]) {
  console.log(ele.render(), "instance:", ele);
}
