function recomendarDrama(){
    let edadelegida = document.getElementById("edadusuario");
    let edad = edadelegida.value;
    let pelicula = document.getElementById("peliculaElegida");

    if(edad < 13){
            pelicula.textContent = "E.T, el extraterrestre";
        }else{
            if(edad > 13 && edad < 25){
                pelicula.textContent = "Parasite";
            }else{
                if(edad>25){
                pelicula.textContent = "Siempre a tu lado";
                }
            }
        }
}

function recomendarComedia(){
    let edadelegida = document.getElementById("edadusuario");
    let edad = edadelegida.value;
    let pelicula = document.getElementById("peliculaElegida");

    if(edad < 13){
            pelicula.textContent = "Mi pobre angelito";
        }else{
            if(edad > 13 && edad < 25){
                pelicula.textContent = "Buenos vecinos";
            }else{
                if(edad>25){
                pelicula.textContent = "Mentiroso, mentiroso";
                }
            }
        }
}

function recomendarAccion(){
    let edadelegida = document.getElementById("edadusuario");
    let edad = edadelegida.value;
    let pelicula = document.getElementById("peliculaElegida");

    if(edad < 13){
            pelicula.textContent = "Piratas del caribe";
        }else{
            if(edad > 13 && edad < 25){
                pelicula.textContent = "Divergentes";
            }else{
                if(edad>25){
                pelicula.textContent = "John Wick";
                }
            }
        }
}
function recomendarAnimacion(){
    let edadelegida = document.getElementById("edadusuario");
    let edad = edadelegida.value;
    let pelicula = document.getElementById("peliculaElegida");

    if(edad < 13){
            pelicula.textContent = "Mi villano favorito";
            
        }else{
            if(edad > 13 && edad < 25){
                pelicula.textContent = "Mi vecino Totoro";
                
            }else{
                if(edad>25){
                pelicula.textContent = "Coco";
                
                }
            }
        }
}