let contenedor = document.getElementById('container');
let cantidadProductos = 0;
let precioTotalFinal = 0;

agregar = () => {
    let form1 = document.getElementById('texto1');
    let form2 = document.getElementById('texto2');
    let producto = document.getElementById('Producto').value;
    let precio = document.getElementById('Precio').value;
    
    let item1 = document.createElement('P');
    let item2 = document.createElement('P');
    item1.innerHTML = "- " + producto;
    item2.innerHTML = precio + ".00 $";
    item1.classList.add('productos');
    item2.classList.add('productos');
    
    contenedor.appendChild(item1);
    contenedor.appendChild(item2);
    
    cantidadProductos++
    totalProductos.innerHTML = `Productos totales: ${cantidadProductos}`; 
    precioTotalFinal = (precioTotalFinal + (precio*1));
    totalPrecio.innerHTML = `Precio total: ${precioTotalFinal}.00 $`;
    
    contenedor.appendChild(totalProductos);
    contenedor.appendChild(totalPrecio);

    form1.reset();
    form2.reset();
}

agregarTodos = () => {
    let listaFinal = [];
    let preciosTotalesArreglo = [];
    let sumaPreciosArreglo = 0;
    let producto = 0;

    for (let i = 0; producto != null; i++) {
        producto = prompt("Agrege su producto numero " + (cantidadProductos + i + 1));
        precio = prompt("Agregele el precio a su producto numero " + (cantidadProductos + i + 1));
        listaFinal.push("- " + producto);
        listaFinal.push(precio + ".00 $");
        preciosTotalesArreglo.push(precio);
    }

    contenedor.style.gridTemplateRows = "1.6fr, repeat(" + listaFinal.length - 1 + ", 0.9fr)";

    listaFinal.pop();
    listaFinal.pop();

    const fragmento = document.createDocumentFragment();

    for (let i = 0; i < listaFinal.length; i++) {
        let item = document.createElement('P');
        item.classList.add('productos');
        item.innerHTML = listaFinal[i];
        fragmento.appendChild(item);
    }

    contenedor.appendChild(fragmento);

    cantidadProductos = (cantidadProductos + (listaFinal.length / 2));
    totalProductos.innerHTML = `Productos totales: ${cantidadProductos}`; 

    for (let i = 0; i < preciosTotalesArreglo.length; i++) {
        sumaPreciosArreglo += (preciosTotalesArreglo[i]*1);        
    }

    precioTotalFinal = precioTotalFinal + sumaPreciosArreglo;
    totalPrecio.innerHTML = `Precio total: ${precioTotalFinal}.00 $`;

    contenedor.appendChild(totalProductos);
    contenedor.appendChild(totalPrecio);
}

reiniciar = () => window.location.reload();