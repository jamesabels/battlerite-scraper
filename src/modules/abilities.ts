import * as Xray from 'x-ray';
import * as request from 'request';
import * as timers from 'timers';

const xray = Xray();

const root = 'div.ability';
const options = {
    title: '.ability--title',
    type: '.ability--type',
    desc: '.ability--description',
    hotKey: xray(['.ability--hotkey']),
    image: 'a.image>img@src',
    overlay: '.ability--header_left>span>img@src',
    cooldown: '.ability--cooldown-text',
    energyCost: '.ability--energy-text',
    abilityIcons: xray('.ability--header_right-bottom', ['div>img@src']),
    castTime: '.ability--casttime-value',
    abilityTitles: xray('.ability--properties', ['.ability--property_title']),
    abilityProps: xray('.ability--properties', ['.ability--property_value'])
};

export module ChampAbilities {
    export function getAll(champs: any) {
        if (champs) {
            champs.map((champ: any, index: number) => {
                xray(`https://battlerite.gamepedia.com/${champ}`, root, [options])
                .write(`./data/abilities/${champ}.json`);
            });
        } else {
            console.error('Champ Update Failed!!');
        }
    }
    export function getByChamp(champ: string) {
        if (champ) {
            xray(`https://battlerite.gamepedia.com/${champ}`, root, [options])
            .write(`./data/abilities/${champ}.json`);
        } else {
            console.error(`${champ} Update Failed!!`);
        }
    }
}