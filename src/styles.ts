import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* colors variable */
    --primary-color: #6750A4;
    --primary-container-color: #EADDFF;
    --secondary-color: #625B71;
    --secondary-container-color: #E8DEF8;
    --surface-color: #FFFBFE;
    --surface-variant-color: #E7E0EC;
    --background-color: #FFFBFE;
    --error-color: #B3261E;
    --error-container-color: #F9DEDC;
    --on-primary-color: #FFFFFF;
    --on-primary-container-color: #21005D;
    --on-secondary-color: #FFFFFF;
    --on-secondary-container-color: #1D192B;
    --on-surface-color: #1C1B1F;
    --on-surface-variant-color: #49454F;
    --on-error-color: #FFFFFF;
    --on-error-container-color: #410E0B;
    --on-background: #1C1B1F;
    --outline-color: #79747E;
    --outline-variant-color: #CAC4D0;
    --shadow-color: #000000; 
    --surface-tint-color: #6750A4;
    --inverse-surface-color: #313033;
    --inverse-on-surface-color: #F4EFF4;
    --inverse-primary-color: #D0BCFF;

    /* font size variables */
    --font-size-display-large: 56px;
    --font-size-display-medium: 44px;
    --font-size-display-small: 36px;
    --font-size-headline-large: 32px;
    --font-size-headline-medium: 28px;
    --font-size-headline-small: 24px;
    --font-size-title-large: 22px;
    --font-size-title-medium: 16px;
    --font-size-title-small: 14px;
    --font-size-label-large: 14px;
    --font-size-label-medium: 12px;
    --font-size-label-small: 10px;
    --font-size-body-large: 16px;
    --font-size-body-medium: 14px;
    --font-size-body-small: 12px;

    /* line height variables */
    --line-height-display-large: 64px;
    --line-height-display-medium: 52px;
    --line-height-display-small: 44px;
    --line-height-headline-large: 40px;
    --line-height-headline-medium: 36px;
    --line-height-headline-small: 32px;
    --line-height-title-large: 28px;
    --line-height-title-medium: 24px;
    --line-height-title-small: 20px;
    --line-height-label-large: 20px;
    --line-height-label-medium: 16px;
    --line-height-label-small: 16px;
    --line-height-body-large: 24px;
    --line-height-body-medium: 20px;
    --line-height-body-small: 16px;
}
`;