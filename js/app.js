const carrito = []

const ordenarMenorMayor = () => {
    productos.sort ((a,b) => a.precio - b.precio)
    mostrarListaProductos()
};

const mostrarListaProductos = () => {
    const listaProductos = productos.map(producto => {
        return "-" + producto.nombre + "$" + producto.precio
    })
    alert("Lista de productos:" + "\n\n" + listaProductos.join("\n"))
    comprarProductos(listaProductos)
};

const comprarProductos = (listaProductos) => {
    let productoNombre = ""
    let productoCantidad = 0
    let otroProducto = false
    do {
        productoNombre = prompt("¿Cual producto deseas comprar?"+ "\n" + listaProductos.join("\n") )
        productoCantidad = parseInt(prompt("¿Cuantos queres comprar?"))
        const producto = productos.find(producto => productoNombre.toLocaleLowerCase() == producto.nombre.toLocaleLowerCase())

        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)
        }else {
            alert("El producto no esta disponible")
        }
        otroProducto = confirm("Desea agregar otro producto?")
    } while (otroProducto);

};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId)

    if(productoRepetido) {
        productoRepetido.cantidad += productoCantidad
    } else {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    }
    
    let carritoNombre = carrito.map((el)=> el.nombre)
    let carritoPrecio = carrito.map((el)=> el.precio)
    let carritoCantidad = carrito.map((el)=> el.cantidad)

    let calcularTotal = carritoCantidad * carritoPrecio

    console.log(carritoPrecio)
    console.log(carrito)
    alert("Tu carrito: " +"\n" + carritoNombre.join("\n"))
    alert("Tu total a pagar: " +"\n" + calcularTotal)    
}

ordenarMenorMayor()