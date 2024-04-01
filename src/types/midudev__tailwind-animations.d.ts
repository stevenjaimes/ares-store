declare module '@midudev/tailwind-animations' {
    import { PluginCreator } from 'tailwindcss';
    import { Config } from 'tailwindcss/types/config';

    const pluginCreator: PluginCreator<any>;
    const pluginConfig: Config;

    export default pluginCreator;
}
