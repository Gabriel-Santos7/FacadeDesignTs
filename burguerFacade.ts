class Produto {
  constructor(public descricao: string, public preco: number) {}
}

class Burguer extends Produto {
  constructor(
    public descricao: string,
    public preco: number,
    public gramas: number
  ) {
    super(descricao, preco);
  }
}

class Sobremesa extends Produto {
  constructor(
    public descricao: string,
    public preco: number,
    public tamanho: string
  ) {
    super(descricao, preco);
  }
}

class Bebida extends Produto {
  constructor(
    public descricao: string,
    public preco: number,
    public ml: number
  ) {
    super(descricao, preco);
  }
}

class ComboItem {
  constructor(public produto: Produto, public quantidade: number) {}
}

class Combo {
  private itens: ComboItem[] = [];

  adicionarItem(produto: Produto, quantidade: number) {
    this.itens.push(new ComboItem(produto, quantidade));
  }

  criarCombo(tipo: number) {
    if (tipo === 1) {
      this.adicionarItem(new Burguer("Hamburguer", 10.0, 200), 1);
      this.adicionarItem(new Sobremesa("Sobremesa Pequena", 5.0, "Pequena"), 1);
      this.adicionarItem(new Bebida("Bebida 300ml", 3.0, 300), 1);
    } else if (tipo === 2) {
      this.adicionarItem(new Burguer("Hamburguer Grande", 15.0, 300), 1);
      this.adicionarItem(new Sobremesa("Sobremesa Grande", 7.0, "Grande"), 1);
      this.adicionarItem(new Bebida("Bebida 500ml", 4.0, 500), 1);
    } else {
      console.log("Escolha inválida");
    }
  }

  mostrarItens() {
    console.log("Seu Combo:");
    let total = 0;

    this.itens.forEach((item) => {
      const itemTotal = item.produto.preco * item.quantidade;
      console.log(
        `${item.produto.descricao} x${item.quantidade}: R$${itemTotal.toFixed(
          2
        )}`
      );
      total += itemTotal;
    });

    console.log(`Total: R$${total.toFixed(2)}`);
  }
}

const combo = new Combo();

console.log("Selecione seu combo");
console.log("1. Combo Master");
console.log("2. Super Combo");

combo.criarCombo(1);
combo.mostrarItens();
