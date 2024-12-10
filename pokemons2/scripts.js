const sprite = document.getElementById('sprite');
// const button = document.getElementById('randomize');
const expl_sprite = document.getElementById('explosion');
// sprite.classList.add('open');
// setTimeout(() => sprite.classList.remove('open'), 1000);

// const pokemons_names = 
// [
//     'Bulbasaur', 'Ivysaur', 'Ivysaur', 'Venusaur', 'Venusaur', 'Charmander', 'Charmander', 'Charmeleon', 'Charmeleon', 'Charizard', 'Charizard', 'Squirtle', 'Squirtle', 'Wartortle', 'Wartortle', 'Blastoise', 'Blastoise', 'Caterpie', 'Caterpie', 'Metapod', 'Metapod', 'Butterfree', 'Butterfree', 'Weedle', 'Weedle', 'Kakuna', 'Kakuna', 'Beedrill', 'Beedrill', 'Pidgey', 'Pidgey', 'Pidgeotto', 'Pidgeotto', 'Pidgeot', 'Pidgeot', 'Rattata', 'Rattata', 'Raticate', 'Raticate', 'Spearow', 'Spearow', 'Fearow', 'Fearow', 'Ekans', 'Ekans', 'Arbok', 'Arbok', 'Pikachu', 'Pikachu', 'Raichu', 'Raichu', 'Sandshrew', 'Sandshrew', 'Sandslash', 'Sandslash', 'Nidoranв™Ђ', 'Nidoranв™Ђ', 'Nidorina', 'Nidorina', 'Nidoqueen', 'Nidoqueen', 'Nidoranв™‚', 'Nidoranв™‚', 'Nidorino', 'Nidorino', 'Nidoking', 'Nidoking', 'Clefairy', 'Clefairy', 'Clefable', 'Clefable', 'Vulpix', 'Vulpix', 'Ninetales', 'Ninetales', 'Jigglypuff', 'Jigglypuff', 'Wigglytuff', 'Wigglytuff', 'Zubat', 'Zubat', 'Golbat', 'Golbat', 'Oddish', 'Oddish', 'Gloom', 'Gloom', 'Vileplume', 'Vileplume', 'Paras', 'Paras', 'Parasect', 'Parasect', 'Venonat', 'Venonat', 'Venomoth', 'Venomoth', 'Diglett', 'Diglett', 'Dugtrio', 'Dugtrio', 'Meowth', 'Meowth', 
//     'Persian', 'Persian', 'Psyduck', 'Psyduck', 'Golduck', 'Golduck', 'Mankey', 'Mankey', 'Primeape', 'Primeape', 'Growlithe', 'Growlithe', 'Arcanine', 'Arcanine', 'Poliwag', 'Poliwag', 'Poliwhirl', 'Poliwhirl', 'Poliwrath', 'Poliwrath', 'Abra', 'Abra', 
//     'Kadabra', 'Kadabra', 'Alakazam', 'Alakazam', 'Machop', 'Machop', 'Machoke', 'Machoke', 'Machamp', 'Machamp', 'Bellsprout', 'Bellsprout', 'Weepinbell', 'Weepinbell', 'Victreebel', 'Victreebel', 'Tentacool', 'Tentacool', 'Tentacruel', 'Tentacruel', 'Geodude', 'Geodude', 'Graveler', 'Graveler', 'Golem', 'Golem', 'Ponyta', 'Ponyta', 'Rapidash', 'Rapidash', 'Slowpoke', 'Slowpoke', 'Slowbro', 'Slowbro', 'Magnemite', 'Magnemite', 'Magneton', 'Magneton', "Farfetch'd", "Farfetch'd", 'Doduo', 'Doduo', 'Dodrio', 'Dodrio', 'Seel', 'Seel', 'Dewgong', 'Dewgong', 'Grimer', 'Grimer', 'Muk', 'Muk', 'Shellder', 'Shellder', 'Cloyster', 'Cloyster', 'Gastly', 'Gastly', 'Haunter', 'Haunter', 'Gengar', 'Gengar', 
//     'Onix', 'Onix', 'Drowzee', 'Drowzee', 'Hypno', 'Hypno', 'Krabby', 'Krabby', 'Kingler', 'Kingler', 'Voltorb', 'Voltorb', 'Electrode', 'Electrode', 'Exeggcute', 'Exeggcute', 'Exeggutor', 'Exeggutor', 'Cubone', 'Cubone', 'Marowak', 'Marowak', 'Hitmonlee', 'Hitmonlee', 'Hitmonchan', 'Hitmonchan', 'Lickitung', 'Lickitung', 'Koffing', 'Koffing', 'Weezing', 'Weezing', 'Rhyhorn', 'Rhyhorn', 'Rhydon', 'Rhydon', 'Chansey', 'Chansey', 'Tangela', 'Tangela', 
//     'Kangaskhan', 'Kangaskhan', 'Horsea', 'Horsea', 'Seadra', 'Seadra', 'Goldeen', 'Goldeen', 'Seaking', 'Seaking', 'Staryu', 'Staryu', 'Starmie', 'Starmie', 'Mr. Mime', 'Mr. Mime', 'Scyther', 'Scyther', 
//     'Jynx', 'Jynx', 'Electabuzz', 'Electabuzz', 'Magmar', 'Magmar', 'Pinsir', 'Pinsir', 'Tauros', 'Tauros', 'Magikarp', 'Magikarp', 'Gyarados', 'Gyarados', 'Lapras', 'Lapras', 'Ditto', 'Ditto', 'Eevee', 'Eevee', 'Vaporeon', 'Vaporeon', 'Jolteon', 'Jolteon', 'Flareon', 'Flareon', 'Porygon', 'Porygon', 'Omanyte', 'Omanyte', 'Omastar', 'Omastar', 'Kabuto', 'Kabuto', 'Kabutops', 'Kabutops', 'Aerodactyl', 
//     'Aerodactyl', 'Snorlax', 'Snorlax', 'Articuno', 'Articuno', 'Zapdos', 'Zapdos', 'Moltres', 'Moltres', 'Dratini', 'Dratini', 'Dragonair', 'Dragonair', 
//     'Dragonite', 'Dragonite', 'Mewtwo', 'Mewtwo', 'Mew', 'Mew'
// ];

// function showRandomPokemon()
// {
//     const randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
//     console.log(randomPokemon);
//     const pokemonGifUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${randomPokemon}.gif`;
//     // document.getElementById('pokemon-gif').src = pokemonGifUrl;
// }

expl_sprite.addEventListener('click', () =>
{
    // showRandomPokemon();
    sprite.classList.remove('open');
    const totalColumns = 27;

    const randomColumn = Math.floor(Math.random() * totalColumns);
    const xOffset = `-${randomColumn * 41}px`;
    sprite.style.setProperty('--start-x', xOffset);
    console.log(randomColumn);
    
    const randomHue = Math.floor(Math.random() * 360);
    console.log(randomHue);
    expl_sprite.style.filter = `hue-rotate(${randomHue}deg)`;

    sprite.classList.add('animate');
    setTimeout(() => {
        sprite.classList.remove('animate');
        sprite.classList.add('pause');
        setTimeout(() =>
        {
            sprite.classList.remove('pause');
            sprite.classList.add('open');
            expl_sprite.classList.remove('hold')
            expl_sprite.classList.add('animate')
            setTimeout(() =>
            {        
                expl_sprite.classList.remove('animate')
                expl_sprite.classList.add('hold')
            }, 1000);
        },
        300);
    },
    1000);
});
