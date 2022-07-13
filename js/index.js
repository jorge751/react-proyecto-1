
//
//	Elemento base
//
class Elemento {

	constructor(props) {
		this.texto = props.texto;
		this.idPadre = props.idPadre;
		this.nombreClaseCSS = props.nombreClaseCSS;
		this.miElemento = null;
	}

	mostrar() {
		const padre = document.querySelector(`#${this.idPadre}`);
		padre.appendChild(this.miElemento);
	}

}


//
//	Cabezal
//
class Cabezal extends Elemento {

	constructor(props) {
		super(props);
	}

	mostrarCabezal() {
		this.miElemento = document.createElement('header')
		this.miElemento.textContent = this.texto;
		this.miElemento.className = this.nombreClaseCSS;
		this.mostrar();
	}

}


//
//	Contenido
//
class Contenido extends Elemento {

	constructor(props) {
		super(props);
	    this.tarjetas = props.tarjetas;
	}

	mostrarContenido() {
		this.miElemento = document.createElement('main')
		this.miElemento.id = 'bloque-cuerpo'
		if (this.texto) {
			this.miElemento.textContent = this.texto;
		};
		if (this.nombreClaseCSS) {
			this.miElemento.className = this.nombreClaseCSS;
		};
	    if (this.tarjetas && this.tarjetas.length > 0) {
			//	Concatena los DIVs
			const htmlTarjetas = this.tarjetas.reduce((prev, curr) => {
				return prev + curr;
			}, '');
			this.miElemento.innerHTML = htmlTarjetas;
		}
		this.mostrar();
	}

}


//
//	Tarjeta
//
class Tarjeta extends Elemento {

	constructor(props) {
		super(props);
	}

	obtenerTarjeta() {
		this.miElemento = document.createElement('div');
		if (this.texto) {
			this.miElemento.textContent = this.texto;
		}
		if (this.nombreClaseCSS) {
			this.miElemento.className = this.nombreClaseCSS;
		}
		return this.miElemento.outerHTML;
	}

}

//
//	Tarjeta
//
class Pie extends Elemento {

	constructor(props) {
		super(props);
	}

	mostrarPie() {
		this.miElemento = document.createElement('div')
		if (this.texto) {
			this.miElemento.textContent = this.texto;
		};
		if (this.nombreClaseCSS) {
			this.miElemento.className = this.nombreClaseCSS;
		};
		this.mostrar();
	}

}

///////////////////////////////////////////////////////////////////////

const cabezal = new Cabezal({
	texto: 'Lorem ipsum donor sit',
	idPadre: 'app',
	nombreClaseCSS: 'cabezal'
});
cabezal.mostrarCabezal();

///////////////////////////////////////////////////////////////////////

const tarjeta1 = new Tarjeta({
	nombreClaseCSS: 'bloque-1'
})

const tarjeta2 = new Tarjeta({
	nombreClaseCSS: 'bloque-2'
})

const tarjeta3 = new Tarjeta({
	nombreClaseCSS: 'bloque-3'
})

const tarjeta4 = new Tarjeta({
	nombreClaseCSS: 'bloque-texto',
	texto: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed metus leo, consectetur eu tempus non. Eleifend a lorem'
})


///////////////////////////////////////////////////////////////////////

const contenido = new Contenido({
	texto: 'Lorem ipsum donor sit',
	idPadre: 'app',
	tarjetas: [
		tarjeta1.obtenerTarjeta(),
		tarjeta2.obtenerTarjeta(),
		tarjeta3.obtenerTarjeta(),
		tarjeta4.obtenerTarjeta(),
	]
});
contenido.mostrarContenido();

///////////////////////////////////////////////////////////////////////

const footer = new Pie({
	texto: 'ESTE ES EL PIE Lorem ipsum donor sit',
	nombreClaseCSS: 'pie',
	idPadre: 'app',
})
footer.mostrarPie();
