const sprite = document.getElementById('sprite');
// const button = document.getElementById('randomize');
const expl_sprite = document.getElementById('explosion');
const pok_gif = document.getElementById('pokemon-gif');
// sprite.classList.add('open');
// setTimeout(() => sprite.classList.remove('open'), 1000);
const name_desc = document.getElementById('name');


const pokemons_names = 
[
    'bulbasaur', 'ivysaur', 'ivysaur', 'venusaur', 'venusaur', 'charmander', 'charmander', 'charmeleon', 'charmeleon', 'charizard', 'charizard', 'squirtle', 'squirtle', 'wartortle', 'wartortle', 'blastoise', 'blastoise', 'caterpie', 'caterpie', 'metapod', 'metapod', 'butterfree', 'butterfree', 'weedle', 'weedle', 'kakuna', 'kakuna', 'beedrill', 'beedrill', 'pidgey', 'pidgey', 'pidgeotto', 'pidgeotto', 'pidgeot', 'pidgeot', 'rattata', 'rattata', 'raticate', 'raticate', 'spearow', 'spearow', 'fearow', 'fearow', 'ekans', 'ekans', 'arbok', 'arbok', 'pikachu', 'pikachu', 'raichu', 'raichu', 'sandshrew', 'sandshrew', 'sandslash', 'sandslash', 'nidoranв™ђ', 'nidoranв™ђ', 'nidorina', 'nidorina', 'nidoqueen', 'nidoqueen', 'nidoranв™‚', 'nidoranв™‚', 'nidorino', 'nidorino', 'nidoking', 'nidoking', 'clefairy', 'clefairy', 'clefable', 'clefable', 'vulpix', 'vulpix', 'ninetales', 'ninetales', 'jigglypuff', 'jigglypuff', 'wigglytuff', 'wigglytuff', 'zubat', 'zubat', 'golbat', 'golbat', 'oddish', 'oddish', 'gloom', 'gloom', 'vileplume', 'vileplume', 'paras', 'paras', 'parasect', 'parasect', 'venonat', 'venonat', 'venomoth', 'venomoth', 'diglett', 'diglett', 'dugtrio', 'dugtrio', 'meowth', 'meowth', 
    'persian', 'persian', 'psyduck', 'psyduck', 'golduck', 'golduck', 'mankey', 'mankey', 'primeape', 'primeape', 'growlithe', 'growlithe', 'arcanine', 'arcanine', 'poliwag', 'poliwag', 'poliwhirl', 'poliwhirl', 'poliwrath', 'poliwrath', 'abra', 'abra', 
    'kadabra', 'kadabra', 'alakazam', 'alakazam', 'machop', 'machop', 'machoke', 'machoke', 'machamp', 'machamp', 'bellsprout', 'bellsprout', 'weepinbell', 'weepinbell', 'victreebel', 'victreebel', 'tentacool', 'tentacool', 'tentacruel', 'tentacruel', 'geodude', 'geodude', 'graveler', 'graveler', 'golem', 'golem', 'ponyta', 'ponyta', 'rapidash', 'rapidash', 'slowpoke', 'slowpoke', 'slowbro', 'slowbro', 'magnemite', 'magnemite', 'magneton', 'magneton', "farfetch'd", "farfetch'd", 'doduo', 'doduo', 'dodrio', 'dodrio', 'seel', 'seel', 'dewgong', 'dewgong', 'grimer', 'grimer', 'muk', 'muk', 'shellder', 'shellder', 'cloyster', 'cloyster', 'gastly', 'gastly', 'haunter', 'haunter', 'gengar', 'gengar', 
    'onix', 'onix', 'drowzee', 'drowzee', 'hypno', 'hypno', 'krabby', 'krabby', 'kingler', 'kingler', 'voltorb', 'voltorb', 'electrode', 'electrode', 'exeggcute', 'exeggcute', 'exeggutor', 'exeggutor', 'cubone', 'cubone', 'marowak', 'marowak', 'hitmonlee', 'hitmonlee', 'hitmonchan', 'hitmonchan', 'lickitung', 'lickitung', 'koffing', 'koffing', 'weezing', 'weezing', 'rhyhorn', 'rhyhorn', 'rhydon', 'rhydon', 'chansey', 'chansey', 'tangela', 'tangela', 
    'kangaskhan', 'kangaskhan', 'horsea', 'horsea', 'seadra', 'seadra', 'goldeen', 'goldeen', 'seaking', 'seaking', 'staryu', 'staryu', 'starmie', 'starmie', 'mr. mime', 'mr. mime', 'scyther', 'scyther', 
    'jynx', 'jynx', 'electabuzz', 'electabuzz', 'magmar', 'magmar', 'pinsir', 'pinsir', 'tauros', 'tauros', 'magikarp', 'magikarp', 'gyarados', 'gyarados', 'lapras', 'lapras', 'ditto', 'ditto', 'eevee', 'eevee', 'vaporeon', 'vaporeon', 'jolteon', 'jolteon', 'flareon', 'flareon', 'porygon', 'porygon', 'omanyte', 'omanyte', 'omastar', 'omastar', 'kabuto', 'kabuto', 'kabutops', 'kabutops', 'aerodactyl', 
    'aerodactyl', 'snorlax', 'snorlax', 'articuno', 'articuno', 'zapdos', 'zapdos', 'moltres', 'moltres', 'dratini', 'dratini', 'dragonair', 'dragonair', 
    'dragonite', 'dragonite', 'mewtwo', 'mewtwo', 'mew', 'mew'
]

function showRandomPokemon()
{
    const randomPokemon = pokemons_names[Math.floor(Math.random() * pokemons_names.length)];
    const pokemonGifUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${randomPokemon}.gif`;
    pok_gif.src = pokemonGifUrl;
    console.log(pokemonGifUrl);
    name_desc.textContent = randomPokemon;
};


expl_sprite.addEventListener('click', () =>
{
    name_desc.style.visibility = 'hidden';
    pok_gif.style.visibility = 'hidden';
    showRandomPokemon();
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
                pok_gif.style.visibility = 'visible';
                name_desc.style.visibility = 'visible';
            }, 1000);
        },
        300);
    },
    1000);
});
