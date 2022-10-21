class CuentaComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        //asi se puede obtener un control de html y hacer su uso normal
        //this.shadow.querySelector('.class')
        this.template = document.createElement('template')
        this.template.innerHTML = `
            <style>
                @import url( 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css' );
                @import url('//cdn.datatables.net/1.11.4/css/jquery.dataTables.min.css');
            </style>
            <input id="txtPrueba" type='text' class='form-control' />
            <Button id='btn'>Ver</Button>
            <table id='tabla'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ervin</td>
                        <td>Solano</td>
                    </tr>
                    <tr>
                        <td>Mario</td>
                        <td>Vargas</td>
                    </tr>
                </tbody>
            </table>
        `;
    }
    connectedCallback(){
        this.render();
    }

    render(){
        //el css si hay que importarlo dentro del componente
        this.shadowRoot.appendChild(document.importNode(this.template.content, true))

        //let btn = this.shadowRoot.querySelector('#btn')
        let otro = $("#btn", this.shadowRoot);
        otro.on("click", function(){
            alert("soy un evento de jquery")
        })
        $("#tabla", this.shadowRoot).DataTable();
    }

    // static get observedAttributes(){
    //     return ['nombre'];
    // }

    // getNombre(){
    //     return this.input.value;
    // }

    // resetNombre(){
    //     this.input.value = '';
    //     this.label.innerText ='';
    // }

    // attributeChangedCallback(nameAtr, oldValue, newValue){
    //     switch(nameAtr){
    //         case 'nombre':
    //             this.nombre = newValue;
    //         break;

    //         default:
    //             return;

    //     }
    // }

    // connectedCallback(){
    //     this.input.value = this.nombre
    //     // this.input = 
    //     // `<input id='texto' type='text' value='${this.nombre}'/>
    //     // <label>${this.nombre}</label>
    //     // `

    //     // document.getElementById('texto').addEventListener('onchange', function(e){
    //     //     console.log(e.value)
    //     // })
    // }
}

window.customElements.define('cuenta-component', CuentaComponent);