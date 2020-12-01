let store = {
    _state: {
        nameN: [
            {id: 1, firstName: 'Admin', likesCount: 0},
            {id: 2, firstName: 'Соня', secondName: 'Макарова', likesCount: 43},
            {id: 3, secondName: 'Adminsha', likesCount: 21},
            {id: 4, firstName: 'username', likesCount: 1},
            {id: 5, firstName: 'Mmb', secondName: 'ras', likesCount: 13},
            {id: 6, firstName: 'Андрей', secondName: 'Барашкин', likesCount: 12},
            {id: 7, firstName: 'Сирожа', secondName: 'Хакимов', likesCount: 19},
            {id: 8, firstName: 'Андрей', secondName: 'Еремин', likesCount: 34},
        ]
    },
    getState() {
        return this._state
    },
}

export default store;
