import { styled } from "../stitches.config";

const Button = styled('button', {
    border: '0 none transparent',
    fontSize: '$fontSizeSm',
    lineHeight: '$lineHeightTight',
    borderRadius: '$borderRadiusNone',
    padding: '$spacingSquishXs',
    fontFamily: '$fontFamilyHighlight',
    fontWeight: '$fontWeightMedium',
    color: '$colorNeutral05',
    backgroundColor: '$colorBrandPrimary03',
    '&:active': {
        backgroundColor: '$colorBrandPrimary02'
    }
});

export default Button;