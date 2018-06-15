import { Font } from 'expo';

const cachedFonts = fonts => fonts.map(font => Font.loadAsync(font));

export const fontAssets = cachedFonts([
    {
        source_sans_pro: require('../assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf')
    },
    {
        source_sans_pro_bold: require('../assets/fonts/SourceSansPro/SourceSansPro-Bold.ttf')
    },
    {
        roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf')
    },
    {
        roboto_bold: require('../assets/fonts/Roboto/Roboto-Bold.ttf')
    },
]);