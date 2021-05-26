export const getItemByLabel = (itemsList, label) => {
    return itemsList.filter(item => item.label === label)[0].value
}
