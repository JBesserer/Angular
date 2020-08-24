import { Stats } from './stats.model';
import { Details } from './details.model';
import { TechniqueTemtem } from './technique-temtem.model';
import { GenderRatio } from './gender-ratio.model';
import { TvYields } from './tv-yields.model';

export class Temtem {
    number: string;
    catchRate: number;
    name: string;
    types: Array<string>;
    stats: Stats;
    traits: Array<string>;
    portraitWikiUrl: string;
    lumaPortraitWikiUrl: string;
    wikiUrl: string;
    details: Details;
    techniques: Array<TechniqueTemtem>;
    trivia: Array<string>;
    wikiPortraitUrlLarge: string;
    lumaWikiPortraitUrlLarge: string;
    icon: string;
    lumaIcon: string;
    genderRatio: GenderRatio;
    hatchMins: number;
    tvYields: TvYields;
    gameDescription: string;
    wikiRenderStaticUrl: string;
    wikiRenderAnimatedUrl: string;
    wikiRenderStaticLumaUrl: string;
    wikiRenderAnimatedLumaUrl: string;
    renderStaticImage: string;
    renderStaticLumaImage: string;
    renderAnimatedImage: string;
    renderAnimatedLumaImage: string;

    constructor(number: string,
                catchRate: number,
                name: string,
                types: Array<string>,
                stats: Stats,
                traits: Array<string>,
                portraitWikiUrl: string,
                lumaPortraitWikiUrl: string,
                wikiUrl: string,
                details: Details,
                techniques: Array<TechniqueTemtem>,
                trivia: Array<string>,
                wikiPortraitUrlLarge: string,
                lumaWikiPortraitUrlLarge: string,
                icon: string,
                lumaIcon: string,
                genderRatio: GenderRatio,
                hatchMins: number,
                tvYields: TvYields,
                gameDescription: string,
                wikiRenderStaticUrl: string,
                wikiRenderAnimatedUrl: string,
                wikiRenderStaticLumaUrl: string,
                wikiRenderAnimatedLumaUrl: string,
                renderStaticImage: string,
                renderStaticLumaImage: string,
                renderAnimatedImage: string,
                renderAnimatedLumaImage: string ) {
      this.number = number;
      this.catchRate = catchRate;
      this.name = name;
      this.types = types;
      this.stats = stats;
      this.traits = traits;
      this.portraitWikiUrl = portraitWikiUrl;
      this.lumaPortraitWikiUrl = lumaPortraitWikiUrl;
      this.wikiUrl = wikiUrl;
      this.details = details;
      this.techniques = techniques;
      this.trivia = trivia;
      this.wikiPortraitUrlLarge = wikiPortraitUrlLarge;
      this.lumaWikiPortraitUrlLarge = lumaWikiPortraitUrlLarge;
      this.icon = icon;
      this.lumaIcon = lumaIcon;
      this.genderRatio = genderRatio;
      this.hatchMins = hatchMins;
      this.tvYields = tvYields;
      this.gameDescription = gameDescription;
      this.wikiRenderStaticUrl = wikiRenderStaticUrl;
      this.wikiRenderAnimatedUrl = wikiRenderAnimatedUrl;
      this.wikiRenderStaticLumaUrl = wikiRenderStaticLumaUrl;
      this.wikiRenderAnimatedLumaUrl = wikiRenderAnimatedLumaUrl;
      this.renderStaticImage = renderStaticImage;
      this.renderStaticLumaImage = renderStaticLumaImage;
      this.renderAnimatedImage = renderAnimatedImage;
      this.renderAnimatedLumaImage = renderAnimatedLumaImage;
    }
}
