// Implementa un método de la clase pokemon, de nombre 'atacar'. El método toma por parámetro otro objeto de la clase Pokemon.

// El Pokemon que ejecuta el método realiza un ataque 
// pokemonA.atacar(PokemonB)

/**
 * Primero ataca el Pokemon A:
 * 1. Calcular un número al azar entre 0 y 'poder de ataque' para el Pokemon A
 * 2. Calcular un número al azar entre 0 y 'poder de defensa' para el Pokemon B
 * 2. El Pokemon A asesta un golpe al Pokemon B. El Pokemon B recibe el siguiente daño: "poder de ataque que ha sacado el Pokemon A - poder de defensa que ha sacado el Pokemon B". Dicha diferencia debemos restarla a la vida total del Pokemon B"

 * Dentro del mismo método 'atacar', muestra por consola cada uno de los pasos tal y como se sugiere en el ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU1MF8xNTc3MzM3OQ
 

 */

class Pokemon {
    constructor(id, nombre, tipos, vida, ataque, defensa) {
        this.id = id;
        this.nombre = nombre;
        this.tipos = tipos;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
    }

    atacar(pokemonAtacado) {
        let poderAtaque = Math.floor(Math.random() * this.ataque);
        let poderDefensa = Math.floor(Math.random() * pokemonAtacado.defensa);
        let dañoTotal = Math.max(0, poderAtaque - poderDefensa);
        pokemonAtacado.vida -= dañoTotal;

        console.log(`${this.nombre} ataca con un poder de ataque de: ${poderAtaque}!`);
        console.log(`${pokemonAtacado.nombre} se defiende con un poder de defensa de: ${poderDefensa}!`);
        console.log("--------------------------");
        console.log(`${pokemonAtacado.nombre} recibirá un total de daño de: ${dañoTotal}`);
        console.log("--------------------------");
        console.log(`Vida restante de ${pokemonAtacado.nombre}: ${pokemonAtacado.vida}.`);
    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49);
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65);

bulbasaur.atacar(squirtle);


