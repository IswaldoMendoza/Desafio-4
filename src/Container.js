const ERROR = { error: "producto no encontrado" };

class Container {
    constructor() {
        this.products = []
    }

    getAll() {
        return this.products
    }

    getById(id) {
        const obj = this.products.find((product) => product.id === id)
        if (obj) {
            return obj
        } else {
            return ERROR
        }
    }

    create(obj) {
        const arrayOfIds = this.products.map((product) => product.id);
        const maxId = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds);
        const id = maxId + 1;
        const newObj = { id, ...obj };
        this.products.push(newObj);
        return newObj
    }

    updateById(id, obj) {
        const encontrarObj = this.products.find((product) => product.id === id)
        if(encontrarObj) {
            const productoFiltrado = this.products.filter((product) => product.id === id)
            const newObj = { id, ...obj }
            this.products = {...productoFiltrado, newObj}
            return newObj
        } else {
            return ERROR
        }
    }

}


module.exports = Container
