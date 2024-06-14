type Theme = 'light' | 'dark'

interface AppSettings {
  /**
   * The default theme for the application.
   * This value should be one of the themes defined in 'availableThemes'.
   *  i.e. ['light', 'dark', 'contrast', 'sepia', 'custom']
   */
  defaultTheme: Theme

  /**
   * All the available themes in the application.
   *  i.e. ['light', 'dark', 'contrast', 'sepia', 'custom']
   */
  availableThemes: Theme[]
}
/**
 * Defines application settings.
 * This function is available beyond the Nuxt context,
 * as opposed to defineAppConfig or defineRuntime, it can be used in any file.
 *
 * @param settings - An object containing application settings.
 *                   The 'availableThemes' property should contain at least one theme
 *                   before using the 'defaultTheme' property.
 * @returns The provided settings object.
 */

// @ts-expect-error This directive is necessary to suppress the TypeScript error.
// eslint-disable-next-line unused-imports/no-unused-vars
declare function defineAppSettings(settings: AppSettings): AppSettings
