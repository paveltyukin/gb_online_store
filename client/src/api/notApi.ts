export const createCustomSetTimeout = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 500);
    });
};