const sprite = document.getElementById('sprite');
// const button = document.getElementById('randomize');
const expl_sprite = document.getElementById('explosion');
const pok_gif = document.getElementById('pokemon-gif');
// sprite.classList.add('open');
// setTimeout(() => sprite.classList.remove('open'), 1000);
const name_desc = document.getElementById('name');


const pokemons_names = 
[
    'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 
    'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 
    'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 
    'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 
    'sandslash', 'nidorina', 'nidoqueen', 'nidorino', 'nidoking', 'clefairy', 'clefable', 
    'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 
    'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 
    'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 
    'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 
    'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 
    'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 
    'slowbro', 'magnemite', 'magneton', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 
    'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 
    'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute', 'exeggutor', 
    'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing', 
    'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 
    'goldeen', 'seaking', 'staryu', 'starmie', 'scyther', 'jynx', 'electabuzz', 'magmar', 
    'pinsir', 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 
    'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops', 
    'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 
    'dragonite', 'mewtwo', 'mew'
]

function showRandomPokemon()
{
    const randomPokemon = pokemons_names[Math.floor(Math.random() * pokemons_names.length)];
    
    var pokemonGifUrl = ``;

    const isShiny = Math.floor(Math.random() * 10);
    // console.log(isShiny);

    if (isShiny == 9)
    {
        pokemonGifUrl = `https://img.pokemondb.net/sprites/black-white/anim/shiny/${randomPokemon}.gif`;
        name_desc.textContent = `shiny ${randomPokemon}`;
        console.log("shiny");
    } else 
    {  
        pokemonGifUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${randomPokemon}.gif`;
        name_desc.textContent = randomPokemon;
    }

    pok_gif.src = pokemonGifUrl;
    // console.log(pokemonGifUrl);
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
