const FORMATTER = new Intl.NumberFormat(undefined, {
     currency : 'USD',
     style : 'currency'
})

export function currencyFormat(price : number){
     return FORMATTER.format(price)
}