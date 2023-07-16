function handleOnContactClick(id, contacts, url, navigate) {
    let contact = contacts.find((item) => item.id === id);
    if (!contact.isManuallyAdded) {
        navigate(`${url}/${id}`);
    } else {
        window.alert('Нет информации о контакте');
    }
}

export default handleOnContactClick;
