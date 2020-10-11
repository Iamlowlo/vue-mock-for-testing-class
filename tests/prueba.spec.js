const sum = (a, b) => a + b;

const getColor = (a) => {
  return (a % 2 === 0) ? 'red' : 'blue';
}

describe('initial test', () => {
  it('true es true', () => {
    expect(true).toBe(true);
  })

  describe('la función sum', () => {
    it('suma el primer valor al segundo', () => {
      const result = sum(1, 2);

      expect(result).toBe(3);
    })
  })

  describe('la funcion getColor', () => {

    describe('cuando recibe un valor par', () => {
      it('devuelve red', () => {
        const result = getColor(2);

        expect(result).toBe('red');
      })
    })

    describe('cuando recibe un valor impar', () => {
      it('devuelve blue', () => {
        const result = getColor(5);

        expect(result).toBe('blue');
      })
    })
  })
});
