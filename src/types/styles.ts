import { DefaultTheme, RuleSet } from 'styled-components'

export type Modifiers<T extends string> = Record<
  T,
  (theme: DefaultTheme) => RuleSet
>
