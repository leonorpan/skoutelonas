import Typography from "typography"

const typography = new Typography({
    bodyFontFamily: ['sans-serif'],
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        body: {
            backgroundColor: '#E8E9EB',
            //fontFamily: ['sans-serif']
        },
    })
})

export default typography