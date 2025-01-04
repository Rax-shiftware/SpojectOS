interface BaseIndexStorage<T> {
    addItem(key: string, item: T): void;
    getItem(key: string): T | undefined;
    removeItem(key: string): void;
    clear(): void;
}

class BaseIndexStorageImpl<T> implements BaseIndexStorage<T> {
    private storage: Map<string, T>;

    constructor() {
        this.storage = new Map<string, T>();
    }

    addItem(key: string, item: T): void {
        this.storage.set(key, item);
    }

    getItem(key: string): T | undefined {
        return this.storage.get(key);
    }

    removeItem(key: string): void {
        this.storage.delete(key);
    }

    clear(): void {
        this.storage.clear();
    }
}

// Example usage
const storage = new BaseIndexStorageImpl<number>();
storage.addItem('one', 1);
console.log(storage.getItem('one')); // Output: 1
storage.removeItem('one');
console.log(storage.getItem('one')); // Output: undefined
storage.clear();