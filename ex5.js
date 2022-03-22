/**
 * Para aumentar el realistmo del combate, vamos a implementar las debilidades y fortalezas entre los diferentes tipos de pokemon.
 * 
 * Por ejemplo, es bien sabido que los pokemon tipo 'Grass' son fuertes contra los pokemon tipo 'Water'.
 * 
 * Implementa una CLASE NUEVA de nombre PokemonPedia. 
 * 
 * Esta clase tan solo implementa un método de clase o método estático.
 * El método toma por parámetro un tipo de pokemon (string), y devuelve para contra que tipos este es inmune, es débil o bien es fuerte. Como sugerencia de nombre del método puede ser 'obtenerSinergiasPokemon'
 * 
 * Puedes obtener los datos de aquí: https://raw.githubusercontent.com/filipekiss/pokemon-type-chart/master/types.json
 * 
 * Para no complicar mucho las cosas, copia este JSON y guardalo todo entero dentro de una variable que usarás en el mismo método estático 'obtenerSinergiasPokemon' 
 * 
 * Ejemplo de resultado: https://oscarm.tinytake.com/tt/NTAxMzU5OF8xNTc3MzY1NQ
 * 
 * Como paso final, cuando el pokemon realice el ataque especial, debe consultar la PokemonPedia. Si resulta que elpokemon que relize el ataque especial, es "fuerte" contra el pokemon objetivo, debemos multiplicar el incremento POR DOS. En caso contrario, si es un pokemon DEBIL contra el pokemon contra el que realiza el ataque, debemos multiplicar el incremento por 0.5. S
 * 
 * NOTA: Para simplificar la lógica, hemos considerado que un pokemon solo va a ser de un tipo, un array de un solo elemento. Además, no tendremos en cuenta la inmunida de los pokemon. Ten cuidado a la hora de manipular el campo "tipos"; porque no deja de ser un array de una posición.
 * 
 * Ejemplo comate y uso de PokemonPedia: https://pastebin.com/raw/rbMVZq9t
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

        let incrementoPorTipo = 1;
        let tipoMensaje = "";
        let sinergias = new PokemonPedia().obtenerSinergiasPokemon(this.tipos[0]);

        if (sinergias.weaknesses.includes(pokemonAtacado.tipos[0])) {
            incrementoPorTipo *= 0.5;
            tipoMensaje = `El ataque tipo ${this.tipos[0]} es DÉBIL contra el tipo ${pokemonAtacado.tipos[0]}!`
        }
        if (sinergias.strengths.includes(pokemonAtacado.tipos[0])) {
            incrementoPorTipo *= 1.5;
            tipoMensaje = `El ataque tipo ${this.tipos[0]} es FUERTE contra el tipo ${pokemonAtacado.tipos[0]}!`
        }
        if (sinergias.immunes.includes(pokemonAtacado.tipos[0])) {
            incrementoPorTipo *= 0;
            tipoMensaje = `El ataque tipo ${this.tipos[0]} es INÚTIL contra el tipo ${pokemonAtacado.tipos[0]}!`
        }




        let poderAtaque = Math.floor((Math.random() * this.ataque) * this.atkEspecial.incremento * incrementoPorTipo);
        let poderDefensa = Math.floor(Math.random() * pokemonAtacado.defensa);
        let dañoTotal = Math.max(0, poderAtaque - poderDefensa);
        pokemonAtacado.vida -= dañoTotal;

        console.log("--------------------------");
        console.log(`${this.nombre} utiliza ${this.atkEspecial.especial} con un poder de: ${poderAtaque}!`);
        console.log(tipoMensaje);
        console.log(`${pokemonAtacado.nombre} se defiende con un poder de defensa de: ${poderDefensa}!`);
        console.log("--------------------------");
        console.log(`${pokemonAtacado.nombre} recibirá un total de daño de: ${dañoTotal}`);
        console.log("--------------------------");
        console.log(`Vida restante de ${pokemonAtacado.nombre}: ${pokemonAtacado.vida}.`);
        console.log("--------------------------");
    };
}

class PokemonPedia {
    constructor() {
        this.sinergias = [
            { "name": "Normal", "immunes": ["Ghost"], "weaknesses": ["Rock", "Steel"], "strengths": [] },
            { "name": "Fire", "immunes": [], "weaknesses": ["Fire", "Water", "Rock", "Dragon"], "strengths": ["Grass", "Ice", "Bug", "Steel"] },
            { "name": "Water", "immunes": [], "weaknesses": ["Water", "Grass", "Dragon"], "strengths": ["Fire", "Ground", "Rock"] },
            { "name": "Electric", "immunes": ["Ground"], "weaknesses": ["Electric", "Grass", "Dragon"], "strengths": ["Water", "Flying"] },
            { "name": "Grass", "immunes": [], "weaknesses": ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"], "strengths": ["Water", "Ground", "Rock"] },
            { "name": "Ice", "immunes": [], "weaknesses": ["Fire", "Water", "Ice", "Steel"], "strengths": ["Grass", "Ground", "Flying", "Dragon"] },
            { "name": "Fighting", "immunes": ["Ghost"], "weaknesses": ["Poison", "Flying", "Psychic", "Bug", "Fairy"], "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"] },
            { "name": "Poison", "immunes": ["Steel"], "weaknesses": ["Poison", "Ground", "Rock", "Ghost"], "strengths": ["Grass", "Fairy"] },
            { "name": "Ground", "immunes": ["Flying"], "weaknesses": ["Grass", "Bug"], "strengths": ["Fire", "Electric", "Poison", "Rock", "Steel"] },
            { "name": "Flying", "immunes": [], "weaknesses": ["Electric", "Rock", "Steel"], "strengths": ["Grass", "Fighting", "Bug"] },
            { "name": "Psychic", "immunes": ["Dark"], "weaknesses": ["Psychic", "Steel"], "strengths": ["Fighting", "Poison"] },
            { "name": "Bug", "immunes": [], "weaknesses": ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"], "strengths": ["Grass", "Psychic", "Dark"] },
            { "name": "Rock", "immunes": [], "weaknesses": ["Fighting", "Ground", "Steel"], "strengths": ["Fire", "Ice", "Flying", "Bug"] },
            { "name": "Ghost", "immunes": ["Normal"], "weaknesses": ["Dark"], "strengths": ["Psychic", "Ghost"] },
            { "name": "Dragon", "immunes": ["Fairy"], "weaknesses": ["Steel"], "strengths": ["Dragon"] },
            { "name": "Dark", "immunes": [], "weaknesses": ["Fighting", "Dark", "Fairy"], "strengths": ["Psychic", "Ghost"] },
            { "name": "Steel", "immunes": [], "weaknesses": ["Fire", "Water", "Electric", "Steel"], "strengths": ["Ice", "Rock", "Fairy"] },
            { "name": "Fairy", "immunes": [], "weaknesses": ["Fire", "Poison", "Steel"], "strengths": ["Fighting", "Dragon", "Dark"] }
        ]
    };

    obtenerSinergiasPokemon(tipo) {
        return this.sinergias.find(s => s["name"] == tipo);
    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass'], 45, 49, 49, {
    especial: "Hoja afilada",
    incremento: 1.5
})
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, {
    especial: "Pistola agua",
    incremento: 1.65
})

// // Prueba PokemonPedia
// console.log(new PokemonPedia().obtenerSinergiasPokemon('Grass'))

// // Combate
bulbasaur.ataqueEspecial(squirtle)
bulbasaur.atacar(squirtle)
bulbasaur.atacar(squirtle)
bulbasaur.atacar(squirtle)
bulbasaur.ataqueEspecial(squirtle)

// // Combate 2
let bulbasaur2 = new Pokemon(1, "Bulbasaur", ['Grass'], 45, 49, 49, {
    especial: "Hoja afilada",
    incremento: 1.5
})
let squirtle2 = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, {
    especial: "Pistola agua",
    incremento: 1.65
})

// // COMBATE 2
squirtle2.atacar(bulbasaur2)
squirtle2.atacar(bulbasaur2)
squirtle2.atacar(bulbasaur2)
squirtle2.ataqueEspecial(bulbasaur2)