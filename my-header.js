
// Create a class for the element
class MyHeaders extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});
    const myheader = document.createElement('header');
    shadow.appendChild(myheader);
      //creat <h1></h1>
      const h1 = document.createElement('h1');
      myheader.appendChild(h1);
      let h1title= this.getAttribute('h1title');
      h1.textContent = h1title;
      myheader.appendChild(h1);
      
    style.textContent = `
      `;
  }
  }
  
  // Define the new element
  customElements.define('my-header', MyHeader);

