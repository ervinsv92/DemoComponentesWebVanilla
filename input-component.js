class inputComponent extends HTMLElement{
    constructor(){
        super();
        let shadow = this.attachShadow({mode:"open"});
        this.input = document.createElement("input")
        this.input.type='text';
        this.input.value='text';
        shadow.appendChild(this.input)
        this.nombre = ''

        this.label = document.createElement('label')
        shadow.appendChild(this.label)

        self = this.label

        this.input.addEventListener('input', function(e){
            console.log(this.value)
            //this.label.innerHtml = this.value;
            self.innerText = this.value
            console.log(self.innerText)
            this.nombre = self.innerText
        })
    }

    static get observedAttributes(){
        return ['nombre'];
    }

    getNombre(){
        return this.input.value;
    }

    resetNombre(){
        this.input.value = '';
        this.label.innerText ='';
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
        switch(nameAtr){
            case 'nombre':
                this.nombre = newValue;
            break;

            default:
                return;

        }
    }

    connectedCallback(){
        this.input.value = this.nombre
        // this.input = 
        // `<input id='texto' type='text' value='${this.nombre}'/>
        // <label>${this.nombre}</label>
        // `

        // document.getElementById('texto').addEventListener('onchange', function(e){
        //     console.log(e.value)
        // })
    }
}

window.customElements.define('input-component', inputComponent);