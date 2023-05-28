type Product = {
  product: string;
  lote: number;
  year: number;
  quantity: number;
};

const product: Product = {
  product: "CPU Dual Core 3.0GHZ",
  lote: 321,
  year: 2022,
  quantity: 5,
};

function createSerialCode(product: Product) {
  const response: string[] = Array.from(
    { length: product.quantity },
    (_, index) => {
      const serialCode = `${product.lote}-${product.year}-${(index + 1)
        .toString()
        .padStart(3, "0")}`;
      return serialCode;
    }
  );

  return response;
}

console.log(createSerialCode(product));
