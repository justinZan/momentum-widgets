/**
 * The keys of the built-in themes
 */
export enum ThemeKey {
  Default = 'default',
  Material = 'material',
  // following themes are from old version
  ColorHealth = 'color-health',
  QualitativeColorsPrimary = 'qualitative-colors-primary',
  QualitativeColorsSecondary = 'qualitative-colors-secondary',
  QualitativeColorsTertiary = 'qualitative-colors-tertiary',
  SequentialColorsGeneralViolet = 'sequential-colors-general-violet',
  SequentialColorsGeneralCobalt = 'sequential-colors-general-cobalt',
  SequentialColorsGeneralSlate = 'sequential-colors-general-slate',
  SequentialColorsHealthGreen = 'sequential-colors-health-green',
  SequentialColorsHealthYellow = 'sequential-colors-health-yellow',
  SequentialColorsHealthRed = 'sequential-colors-health-red',
  DivergingColorsAlerts = 'diverging-colors-alerts',
  DivergingColorsGreen2Red = 'diverging-colors-green-to-red',
}

export const themes = new Map<ThemeKey | string, string[]>([
  [ThemeKey.Default, ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']],
  [ThemeKey.Material, ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B']],
  [ThemeKey.ColorHealth, ['#00CF64', '#FFC14F', '#D4371C', '#643ABD', '#F0677E', '#EBD460', '#00A3B5']],
  [ThemeKey.QualitativeColorsPrimary, ['#643ABD', '#F0677E', '#EBD460', '#00A3B5', '#93C437', '#7D7A18', '#99DDFF']],
  [ThemeKey.QualitativeColorsSecondary, ['#0A78CC', '#16A693', '#FAC3F8', '#FF9D52', '#601E66', '#C7A5FA', '#D3DB7B']],
  [ThemeKey.QualitativeColorsTertiary, ['#8C91BD', '#67E7F0', '#148579', '#F294F1', '#0A414D', '#B4BA43', '#996E00']],
  [ThemeKey.SequentialColorsGeneralViolet, ['#F0E3FC', '#E2CAFC', '#C7A5FA', '#A87FF1', '#875AE1', '#643ABD', '#432C77']],
  [ThemeKey.SequentialColorsGeneralCobalt, ['#C7EEFF', '#99DDFF', '#5EBFF6', '#279BE7', '#0A78CC', '#08599C', '#103C62']],
  [ThemeKey.SequentialColorsGeneralSlate, ['#E3E7FA', '#CED2ED', '#B0B4D9', '#8C91BD', '#6F739E', '#535573', '#393A47']],
  [ThemeKey.SequentialColorsHealthGreen, ['#78F5B8', '#31E88C', '#00CF64', '#00AB50', '#00853C', '#03612C', '#08421F']],
  [ThemeKey.SequentialColorsHealthYellow, ['#FFD98C', '#FFC14F', '#FC9D03', '#D97F00', '#A85F00', '#7D4705', '#54330D']],
  [ThemeKey.SequentialColorsHealthRed, ['#FFD5CC', '#FFBBAD', '#FF9580', '#F7644A', '#D4371C', '#A12512', '#6E1D13']],
  [ThemeKey.DivergingColorsAlerts, ['#FFCD59', '#F7A947', '#EE8335', '#E55920', '#CF3110', '#A82013', '#821016']],
  [ThemeKey.DivergingColorsGreen2Red, ['#008672', '#4BA28C', '#8CBBAC', '#CCD2CE', '#E19D79', '#C3411D', '#990000']],
]);

export const defaultTheme = ThemeKey.Default;
