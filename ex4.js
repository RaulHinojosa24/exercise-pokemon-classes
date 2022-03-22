/**
 * Un pokemon solo puede realizar un ataque especial cada 3 ataques normales. 
 * 
 * Modifica el constructor para guardar la información necesaria para controlar cuando es que el pokemon puede usar su ataque especial
 * 
 * Deberás modificar el método 'atacar' para que, una vez ataque normal, cuente como carga del ataque especial.
 * 
 * Y a su vez, deberás modificar 'ataqueEspecial' para que 'resetee' el contador de ataques
 * 
 * Ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU3OV8xNTc3MzUwMQ
 *  
 * 
 */

class Pokemon {
    constructor(id, nombre, tipos, vida, ataque, defensa, ataqueEspecial) {
        this.id = id;
        this.nombre = nombre;
        this.tipos = tipos;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.atkEspecial = ataqueEspecial;
        this.contadorAtaques = 0;
    };

    atacar(pokemonAtacado) {
        this.contadorAtaques++;
        let poderAtaque = Math.floor(Math.random() * this.ataque);
        let poderDefensa = Math.floor(Math.random() * pokemonAtacado.defensa);
        let dañoTotal = Math.max(0, poderAtaque - poderDefensa);
        pokemonAtacado.vida -= dañoTotal;

        console.log("--------------------------");
        console.log(`${this.nombre} ataca con un poder de ataque de: ${poderAtaque}!`);
        console.log(`${pokemonAtacado.nombre} se defiende con un poder de defensa de: ${poderDefensa}!`);
        console.log("--------------------------");
        console.log(`${pokemonAtacado.nombre} recibirá un total de daño de: ${dañoTotal}`);
        console.log("--------------------------");
        console.log(`Vida restante de ${pokemonAtacado.nombre}: ${pokemonAtacado.vida}.`);
        console.log("--------------------------");
    };

    ataqueEspecial(pokemonAtacado) {
        if (this.contadorAtaques < 3) {
            console.log("--------------------------");
            console.log("Todavía no puedes utilizar el ataque especial.");
            console.log("--------------------------");
            return;
        }
        this.contadorAtaques = 0;
        let poderAtaque = Math.floor((Math.random() * this.ataque) * this.atkEspecial.incremento);
        let poderDefensa = Math.floor(Math.random() * pokemonAtacado.defensa);
        let dañoTotal = Math.max(0, poderAtaque - poderDefensa);
        pokemonAtacado.vida -= dañoTotal;

        console.log("--------------------------");
        console.log(`${this.nombre} utiliza ${this.atkEspecial.especial} con un poder de: ${poderAtaque}!`);
        console.log(`${pokemonAtacado.nombre} se defiende con un poder de defensa de: ${poderDefensa}!`);
        console.log("--------------------------");
        console.log(`${pokemonAtacado.nombre} recibirá un total de daño de: ${dañoTotal}`);
        console.log("--------------------------");
        console.log(`Vida restante de ${pokemonAtacado.nombre}: ${pokemonAtacado.vida}.`);
        console.log("--------------------------");
    };
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49, { especial: "hoja afilada", incremento: 1.5 });
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, { especial: "pistola agua", incremento: 2 });


// TESTS: El primer araque especial deberia fallar tal y como se muestra en el ejemplo!

bulbasaur.ataqueEspecial(squirtle);
bulbasaur.atacar(squirtle);
bulbasaur.atacar(squirtle);
bulbasaur.atacar(squirtle);
bulbasaur.ataqueEspecial(squirtle);