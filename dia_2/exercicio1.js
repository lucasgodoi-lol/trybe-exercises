const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const namePersonDelivery = `Olá ` + order.order.delivery.deliveryPerson + `,`;
    const nameClient = `entrega para: ` + order.name + `,`;
    const tel =  `Telefone: ` + order.phoneNumber + `,`;
    const street = `R. ` + order.address.street + `,`
    const numberHouse = `Nº ` +  order.address.number + `,`;
    const ap = `AP:` + order.address.apartment;
    return `${namePersonDelivery} ${nameClient} ${tel} ${street} ${numberHouse} ${ap}`;
  }
  
  console.log(customerInfo(order));

  const orderModifier = (order) => {
     order.name = 'Luiz Silva'
     order.payment = 50
     order.order.pizza.margherita = 'muzzarella'
     order.order.pizza.pepperoni = 'calabresa'
    return `Olá ${order.name} o total do seu pedido de ${order.order.pizza.margherita}, ${order.order.pizza.pepperoni} e ${order.order.drinks.coke.type} é R$${order.payment},00 `
  }
  
  console.log(orderModifier(order));