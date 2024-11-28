
const kompiuteris = {
    gamintojas: "Dell",
    procesorius: "Intel Core i7",
    RAM: "16GB",

    
    gautiSpecifikacijas: function() {
        return `Gamintojas: ${this.gamintojas}, Procesorius: ${this.procesorius}, RAM: ${this.RAM}`;
    }
};


console.log(kompiuteris.gautiSpecifikacijas());