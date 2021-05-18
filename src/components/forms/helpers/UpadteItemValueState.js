export function handleFormItemChange(items, label, newValue) {
    const updatedForm = items.map(item => {
        if (item.label === label) {
            const updatedItem = {
                ...item,
                value: newValue
            }
            return updatedItem;
        }
        return item;
    })
    return updatedForm;
}
