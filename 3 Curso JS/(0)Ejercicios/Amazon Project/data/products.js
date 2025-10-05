export const products={
  async loadProducts(){
    const products = (await fetch('https://supersimplebackend.dev/products')).json();
    return products;},
}