/**
 * Los pokemons puedes realizar un ataque especial cada cierto tiempo.
 * Implementa un nuevo método de nombre "ataqueEspecial". 
 * 
 * Modifica el constructor para que ahora podamos pasarle otro parámetro que es un OBJETO. Dicho objeto tiene dos propiedades. Por ejemplo: 
 * 
 * {
 *   especial: "Hoja afilada",
 *   incremento: 1.5
 * }
 *  
 * Implementa un nuevo método además de nombre "ataqueEspecial". 
 * Este método de momento hará exactamente lo msimo que el método "ataque"; pero multiplica el daño producido por el valor de la propiedad 'incremento'
 * 
 * PIENSA BIEN como puedes reprovechar el método "atacar" para modificarlo de tal manera que ahora tenga en cuenta el modificador 'incremento'
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
    };

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
    };

    ataqueEspecial(pokemonAtacado) {
        let poderAtaque = Math.floor((Math.random() * this.ataque) * this.atkEspecial.incremento);
        let poderDefensa = Math.floor(Math.random() * pokemonAtacado.defensa);
        let dañoTotal = Math.max(0, poderAtaque - poderDefensa);
        pokemonAtacado.vida -= dañoTotal;

        console.log(`${this.nombre} utiliza ${this.atkEspecial.especial} con un poder de: ${poderAtaque}!`);
        console.log(`${pokemonAtacado.nombre} se defiende con un poder de defensa de: ${poderDefensa}!`);
        console.log("--------------------------");
        console.log(`${pokemonAtacado.nombre} recibirá un total de daño de: ${dañoTotal}`);
        console.log("--------------------------");
        console.log(`Vida restante de ${pokemonAtacado.nombre}: ${pokemonAtacado.vida}.`);
    };
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49, { especial: "hoja afilada", incremento: 1.5 });
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, { especial: "pistola agua", incremento: 2 });



// bulbasaur.atacar(squirtle)
bulbasaur.ataqueEspecial(squirtle);



