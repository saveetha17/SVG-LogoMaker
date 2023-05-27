class SVG {
    constructor(){
        this.text="";
        this.shape="";
    }
    render() {
        return `<svg version="1.1" width="350" height="250" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
      }    
}


module.exports = SVG;
