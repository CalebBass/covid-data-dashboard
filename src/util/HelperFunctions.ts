
export function formatNumber (num: any) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}